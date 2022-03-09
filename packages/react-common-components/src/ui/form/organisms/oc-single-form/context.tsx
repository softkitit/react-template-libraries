import * as React from 'react';
import { useFormikContext } from 'formik';
import { get, noop, update, isEmpty } from 'lodash-es';

import { Dataset } from '../../../common/atoms/oc-button';
import { FIELD_TYPE } from '../../lib';
import { FormikField, FormikFieldsValues } from '../../models';

import {
	elementUtils,
	getInitialValuesFromFields,
	normalizeFieldsForFormik,
	updateElementKeys,
	updateFieldsDefinition,
	setFormChildes,
} from './utils/fields';
import { OcFormContextProps, OcFormContextProviderProps } from './types';

export const OcFormContext = React.createContext<OcFormContextProps>({
	fields: [],
	onAddDynamicField: noop,
	onRemoveDynamicField: noop,
	onStartEditingField: noop,
	onCancelEditingField: noop,
	onSaveField: noop,
});

export const useOcFormContext = () => {
	return React.useContext(OcFormContext);
};

const useModifyDFA = (
	fieldsDefinition: FormikField[],
	values: FormikFieldsValues,
	flattenFields: FormikField[],
	normalizeFieldsAndUpdateDefinition: (arg0: FormikField[]) => void,
) => {
	const next = elementUtils.updateFieldsValues(fieldsDefinition, values);

	flattenFields.forEach((field: FormikField) => {
		if (field && field.type === FIELD_TYPE.DYNAMIC_FIELD_ARRAY && !isEmpty(field.fields)) {
			const instance = flattenFields.find((item) => item.staticId === field.staticId);
			if (!instance) return;

			const existedElement: FormikField = get(next, field.path);

			if (Array.isArray(instance.defaultValue) && !isEmpty(instance.defaultValue)) {
				(instance.defaultValue as unknown[]).forEach((value: any, parentIndex: number) => {
					const fieldsWithDefValues = instance.fields!.map((item) => {
						/* Display child components Start */
						const childInstance = flattenFields.find(
							(child) => child.id === item.id && child.type === FIELD_TYPE.DYNAMIC_FIELD_ARRAY,
						);
						if (childInstance && !isEmpty(value[childInstance.id])) {
							return setFormChildes(flattenFields, childInstance, value);
						} else if (childInstance && isEmpty(value[childInstance.id])) {
							return elementUtils.cloneAndUpdate(childInstance, false, {
								fields: [],
								isEditing: false,
							});
						}
						/* Display child components End */

						return elementUtils.cloneAndUpdate(item, false, {
							value: value[item.id],
							previousValue: value[item.id],
							isEditing: false,
						});
					});

					next[existedElement.index + parentIndex] = elementUtils.cloneAndUpdate(instance, false, {
						fields: fieldsWithDefValues.flat(),
						isEditing: false,
					});
				});
			}
		}
	});

	normalizeFieldsAndUpdateDefinition(next);
};

export const OcFormContextProvider: React.FC<OcFormContextProviderProps> = ({
	children,
	pullFieldsDefinition,
	initialValue: { flattenFields, fieldsDefinition, updateState },
}) => {
	React.useEffect(() => {
		useModifyDFA(fieldsDefinition, values, flattenFields, normalizeFieldsAndUpdateDefinition);
	}, []);
	React.useEffect(() => {
		if (pullFieldsDefinition !== undefined) {
			pullFieldsDefinition(fieldsDefinition);
		}
	});
	const { values, setValues } = useFormikContext<FormikFieldsValues>();

	const normalizeFieldsAndUpdateDefinition = React.useCallback(
		(array) => {
			const newArray = normalizeFieldsForFormik(updateElementKeys)(array);
			updateState(newArray);
			setValues(getInitialValuesFromFields(newArray));
		},
		[setValues, updateState],
	);

	const onAddDynamicField = React.useCallback(
		(event: React.MouseEvent) => {
			const button = event.target as HTMLButtonElement;
			const elementStaticId = button.dataset.staticid || '';
			const elementPath = button.dataset.path || '';
			const instance = flattenFields.find((item) => item.staticId === elementStaticId);
			if (!instance) return;
			const next = elementUtils.updateFieldsValues(fieldsDefinition, values);
			const { path, isFirstLevelDeep } = elementUtils.getParentPath(elementPath);
			const existedElement = get(next, elementPath);

			if (isFirstLevelDeep) {
				if (existedElement.fields && existedElement.fields.length === 0) {
					next[existedElement.index] = elementUtils.cloneAndUpdate(instance, true);
				} else {
					next.splice(existedElement.index + 1, 0, elementUtils.cloneAndUpdate(instance, true));
				}
			} else {
				update(next, path, (fields) => {
					if (existedElement.fields && existedElement.fields.length === 0) {
						fields[existedElement.index] = elementUtils.cloneAndUpdate(instance, true);
					} else {
						fields.push(elementUtils.cloneAndUpdate(instance, true));
					}

					return fields;
				});
			}

			normalizeFieldsAndUpdateDefinition(next);
		},
		[values, fieldsDefinition, normalizeFieldsAndUpdateDefinition],
	);

	const onRemoveDynamicField = React.useCallback(
		(event: React.SyntheticEvent<Dataset>) => {
			const elementPath = event.currentTarget.dataset.path;

			let next = elementUtils.updateFieldsValues(fieldsDefinition, values);
			const { path, isFirstLevelDeep } = elementUtils.getParentPath(elementPath);
			const existedElement: FormikField = get(next, elementPath);

			if (isFirstLevelDeep) {
				const removeChildField =
					next.filter((f) => f.type === FIELD_TYPE.DYNAMIC_FIELD_ARRAY).length === 1;

				next = elementUtils.removeChildOrCurrent(next, existedElement, removeChildField);
			} else {
				update(next, path, (fields: FormikField[]) => {
					const removeChildField =
						fields.filter((f) => f.type === FIELD_TYPE.DYNAMIC_FIELD_ARRAY).length === 1;

					fields = elementUtils.removeChildOrCurrent(fields, existedElement, removeChildField);

					return fields;
				});
			}

			normalizeFieldsAndUpdateDefinition(next);
		},
		[values, fieldsDefinition, normalizeFieldsAndUpdateDefinition],
	);

	const onStartEditingField = (event: React.SyntheticEvent<Dataset>) => {
		const fieldName = event.currentTarget.dataset.name;

		updateState(
			updateFieldsDefinition({
				fields: fieldsDefinition,
				fieldName,
				isEditing: true,
				withChilds: false,
			}),
		);
	};

	const onCancelEditingField = (event: React.MouseEvent) => {
		const button = event.target as HTMLButtonElement;
		const elementPath = button.dataset.path || '';

		let next = elementUtils.updateFieldsValues(fieldsDefinition, values);
		const existedElement: FormikField = get(next, elementPath);
		const { path, isFirstLevelDeep } = elementUtils.getParentPath(elementPath);

		if (isFirstLevelDeep) {
			if (existedElement.isNew) {
				const removeChildField =
					next.filter((f) => f.type === FIELD_TYPE.DYNAMIC_FIELD_ARRAY).length === 1;

				next = elementUtils.removeChildOrCurrent(next, existedElement, removeChildField);
			} else {
				next = elementUtils.resetFieldValueToPreviousValue(next, existedElement);
			}
		} else {
			update(next, path, (fields: FormikField[]) => {
				if (existedElement.isNew) {
					const removeChildField =
						fields.filter((f) => f.type === FIELD_TYPE.DYNAMIC_FIELD_ARRAY).length === 1;

					fields = elementUtils.removeChildOrCurrent(fields, existedElement, removeChildField);
				} else {
					fields = elementUtils.resetFieldValueToPreviousValue(fields, existedElement);
				}

				return fields;
			});
		}

		normalizeFieldsAndUpdateDefinition(next);
	};

	const onSaveField = (event: React.MouseEvent) => {
		const button = event.target as HTMLButtonElement;
		const fieldName = button.dataset.name || '';

		updateState(
			updateFieldsDefinition({
				fields: fieldsDefinition,
				fieldName,
				formikValues: values,
				isEditing: false,
				withChilds: true,
			}),
		);
	};

	return (
		<OcFormContext.Provider
			value={{
				fields: fieldsDefinition,
				onAddDynamicField,
				onRemoveDynamicField,
				onStartEditingField,
				onCancelEditingField,
				onSaveField,
			}}
		>
			{children}
		</OcFormContext.Provider>
	);
};

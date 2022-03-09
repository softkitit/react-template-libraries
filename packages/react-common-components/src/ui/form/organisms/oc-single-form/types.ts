import * as React from 'react';
import type { FieldInputProps, FormikHelpers, FormikProps, FormikValues } from 'formik';

import type { OcEditUserFormConfig } from '../../../auth/organisms/oc-edit-user-form';
import type { Dataset, FileUploadService } from '../../../common';
import type { AppFormModel, FieldValidators, FormikField, FormikFieldsValues } from '../../models';

export type OcFormValues = Record<string, any>;
export type OcFormFormikHelpers = FormikHelpers<Record<string, unknown>>;
export type OcFormChildren =
	| React.ReactNode
	| ((formik: FormikProps<any>, fields: FormikField[]) => React.ReactNode);
export type SelectedFormType = { label: string };

export interface OcFormExtraProps {
	/**
	 * Service to make API calls.
	 */
	service?: any;
	/**
	 * Service to make API calls.
	 */
	fileService?: FileUploadService;
	/**
	 * Service which contains both service and fileService API calls
	 */
	fieldProps?: any;
	/**
	 * Don't render field by ID.
	 */
	excludeRenderFields?: string[];
}

export interface FormProps extends OcFormExtraProps {
	/**
	 * Form config
	 */
	formJsonData?: AppFormModel;
	/**
	 * Callback with values and formProps on button click
	 *
	 * @param values
	 * @param formikHelpers
	 * @param action
	 */
	onSubmit?(values: OcFormValues, formikHelpers: OcFormFormikHelpers, action?: string): void;
	/**
	 * Callback on Cancel button click
	 */
	onCancel?(): void;
	/**
	 * Set position of the field label.
	 * @param {('top'|'left'|'right')} position
	 * @default top
	 */
	labelPosition?: 'top' | 'left' | 'right';
	/**
	 * @default Submit
	 */
	submitButtonText?: string;
	/**
	 * Set position of the field label.
	 * @default left
	 */
	buttonPosition?: 'top' | 'left' | 'right' | 'between';

	children?: OcFormChildren;

	cancelButtonText?: string;
}

export interface OcFormProps extends FormProps {
	/**
	 * Form configs
	 */
	formConfigs?: OcEditUserFormConfig[];
	/**
	 * Form type select label
	 * @default Type
	 */
	formTypeLabel?: string;
	/**
	 * Default FormType (config name)
	 */
	defaultFormType?: string;
	/**
	 * Enable required password field. //todo: Set True to include field to form state.
	 * @default false
	 */
	enablePasswordField?: boolean;
	/**
	 * Enable required Terms checkbox field. //todo: Set True to include field to form state.
	 * @default false
	 */
	enableTermsCheckboxField?: boolean;

	children?: OcFormChildren;

	cancelButtonText?: string;

	customSubmitClass?: string;

	customCancelClass?: string;

	showSaveBtn?: boolean;

	showSubmitBtn?: boolean;

	saveButtonText?: string;

	pullFormik?: React.Dispatch<any>;
	pullFieldsDefinition?: React.Dispatch<any>;
}

export type FieldType =
	| 'richText'
	| 'text'
	| 'longText'
	| 'dropdownList'
	| 'tags'
	| 'singleFile'
	| 'multiple'
	| 'multiImage'
	| 'singleImage'
	| 'privateSingleFile'
	| 'multiPrivateFile'
	| 'number'
	| 'checkbox'
	| 'emailAddress'
	| 'websiteUrl'
	| 'color'
	| 'booleanTags'
	| 'numberTags'
	| 'videoUrl'
	| 'date'
	| 'datetime'
	| 'multiselectList'
	| 'dynamicFieldArray'
	| 'password';

export interface OcFormContextProviderProps {
	initialValue: {
		flattenFields: FormikField[];
		fieldsDefinition: FormikField[];
		updateState: (normalizedFields: FormikField[]) => void;
	};
	pullFieldsDefinition?: React.Dispatch<any>;
}

export interface OcFormContextProps {
	fields: FormikField[];
	onAddDynamicField: React.MouseEventHandler;
	onRemoveDynamicField: (event: React.SyntheticEvent<Dataset>) => void;
	onStartEditingField: (event: React.SyntheticEvent<Dataset>) => void;
	onCancelEditingField: React.MouseEventHandler;
	onSaveField: React.MouseEventHandler;
}

export interface FormikMapFieldsProps extends OcFormExtraProps {
	fields: FormikField[];
}

export interface FormikComponentWrapperProps<Value> {
	field: FieldInputProps<Value>;
	form: FormikProps<FormikFieldsValues>;
	customClass?: string;
}

export type FCWP<Value> = FormikComponentWrapperProps<Value>;

export interface FieldGroupProps {
	description?: string;
	label?: string;
	labelFor?: string;
	name: string;
	required?: boolean;
}

export interface OcFormState {
	formId: string;
	validators: FieldValidators;
	flattenFields: FormikField[];
	fieldsDefinition: FormikField[];
	initialValues: FormikValues;
}

export interface FormikFileUploadProps<Value> {
	fileType: FileType;
	acceptType?: string;
	isMultiFile: boolean;
	maxWidth: string;
	maxHeight: string;
	fileService: FileUploadService;
	isPrivate?: boolean;
	hash?: string;
	form: FormikProps<FormikFieldsValues>;
	field: FieldInputProps<Value>;
}

type FileType =
	| 'singleFile'
	| 'singleImage'
	| 'privateSingleFile'
	| 'multiFile'
	| 'multiImage'
	| 'multiPrivateFile';

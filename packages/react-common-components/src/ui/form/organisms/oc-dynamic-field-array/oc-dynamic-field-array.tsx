import * as React from 'react';
import { useFormikContext } from 'formik';

import { ReactComponent as EditIconSvg } from '../../../../assets/img/edit.svg';
import { ReactComponent as TrashIconSvg } from '../../../../assets/img/trash-icon.svg';
import OcButtonComponent from '../../../common/atoms/oc-button';
import { FormikFieldsValues } from '../../models';
import { OcDynamicArrayPreview } from '../oc-dynamic-array-preview';
import { FormikMapFields } from '../oc-single-form';
import { useOcFormContext } from '../oc-single-form/context';

import { OcDynamicFieldArrayProps } from './types';
import { getFieldLabel } from './utils';

import './style.scss';

export const OcDynamicFieldArray: React.FC<OcDynamicFieldArrayProps> = (props) => {
	const { field, showAddButton, groupFieldIndex, fieldProps } = props;

	const { values } = useFormikContext<FormikFieldsValues>();
	const context = useOcFormContext();

	return (
		<div className="cards-interface">
			{field.fields && field.fields.length > 0 && (
				<div className="cards-interface__added-item">
					<div className="cards-interface__preview">
						<div className="cards-interface__preview-header">
							<h3 className="cards-interface__preview-header-text">
								{getFieldLabel(field, values, groupFieldIndex)}
							</h3>
							<div className="cards-interface__icons-handler">
								{!field.isEditing && (
									// eslint-disable-next-line jsx-a11y/click-events-have-key-events
									<div
										tabIndex={0}
										role="button"
										data-name={field.name}
										data-index={field.index}
										data-path={field.path}
										onClick={context.onStartEditingField}
										className="cards-interface__preview-icon"
									>
										<EditIconSvg />
									</div>
								)}
								{/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
								<div
									tabIndex={0}
									role="button"
									data-name={field.name}
									data-index={field.index}
									data-path={field.path}
									className="cards-interface__preview-icon"
									onClick={context.onRemoveDynamicField}
								>
									<TrashIconSvg />
								</div>
							</div>
						</div>
						{!field.isEditing ? (
							<div className="cards-interface__preview-content">
								<OcDynamicArrayPreview
									// elementName={element.name}
									fields={field.fields}
									fieldProps={fieldProps}
									// fieldLabel={getFieldLabel(element, formik.values) || `Item ${0 + 1}`}
									// onDelete={removeDynamicFieldFromFormikValues}
								/>
							</div>
						) : (
							<>
								<div className="cards-interface__preview-content">
									<FormikMapFields fields={field.fields} fieldProps={fieldProps} />
								</div>
								<div className="cards-interface__preview-buttons">
									<div className="cards-interface__preview-buttons-cancel">
										<OcButtonComponent
											data-name={field.name}
											data-index={field.index}
											data-path={field.path}
											htmlType="button"
											type="secondary"
											onClick={context.onCancelEditingField}
										>
											Cancel
										</OcButtonComponent>
									</div>
									<div className="cards-interface__preview-buttons-save">
										<OcButtonComponent
											data-name={field.name}
											data-index={field.index}
											data-path={field.path}
											htmlType="button"
											type="primary"
											onClick={context.onSaveField}
										>
											Save
										</OcButtonComponent>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			)}
			{showAddButton && (
				<div className="cards-interface__add-btn">
					<OcButtonComponent
						data-name={field.name}
						data-index={field.index}
						data-path={field.path}
						data-staticid={field.staticId}
						htmlType="button"
						type="primary"
						onClick={context.onAddDynamicField}
					>
						Add
					</OcButtonComponent>
				</div>
			)}
		</div>
	);
};

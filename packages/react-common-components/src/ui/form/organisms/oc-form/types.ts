import * as React from 'react';
import { FormikHelpers, FormikProps, FormikValues } from 'formik';

import { AppFormField, AppFormModel } from '../../models';

import { FormProps } from '../oc-single-form';

import { FormProgressbarStep } from './oc-form-progress-bar/oc-form-progress-bar';

export interface FieldStep {
	label?: AppFormField;
	items?: AppFormField[];
}
export type OcFormValues = Record<string, any>;
export type OcFormFormikHelpers = FormikHelpers<Record<string, unknown>>;

export type FormType = 'wizard' | 'page';

export interface OcFormProps extends FormProps {
	/**
	 * Form config
	 */
	formJsonData?: AppFormModel;
	/**
	 * form type: wizard or ordinary(page)
	 */
	displayType: FormType;
	/**
	 * Set position of the field label.
	 * @default left
	 */
	buttonPosition?: 'top' | 'left' | 'right' | 'between';
	/**
	 * You can set the number of steps to show. If set to 0, this option is turned off and all the steps will be visible.
	 */
	maxStepsToShow: number;
	/**
	 * Max shown steps setter
	 */
	setMaxStepsToShow: React.Dispatch<React.SetStateAction<number>>;
	/**
	 * Custom template for the Save button to show.
	 */
	additionalButton?: React.ReactElement | React.ReactNode;
	/**
	 * Set position of the field label.
	 * @param {('top'|'left'|'right')} position
	 * @default top
	 */
	labelPosition?: 'top' | 'left' | 'right';
	/**
	 * Submitting process. The true option will lock for click and start the spinner in the submit button.
	 */
	process?: boolean;
	/**
	 * flag to show buttons on form
	 */
	showButton?: boolean;
	/**
	 * Flag to show group description.
	 */
	showGroupDescription?: boolean;
	/**
	 * Flag to show group heading.
	 */
	showGroupHeading?: boolean;
	/**
	 * Flag to show progressbar.
	 */
	showProgressBar?: boolean;
	/**
	 * flag to show submit button on form
	 */
	showSubmitButton?: boolean;
	/**
	 * Set custom text to success button.
	 */
	successButtonText?: string;
	/**
	 * Progressbar steps array to be passed to progress
	 */
	progressBarSteps?: FormProgressbarStep[];
	/**
	 * hasFieldGroups boolean flag
	 */
	hasFieldGroups?: boolean;
	/**
	 * Current wizard step.
	 */
	currentStep?: number;
	/**
	 * setCurrentStep is setter function for current form step
	 */
	setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
	showSaveBtn?: boolean;
	saveButtonText?: string;
	formik: Partial<FormikProps<FormikValues>>;
	pullFormik: React.Dispatch<React.SetStateAction<Partial<FormikProps<FormikValues>>>>;
}

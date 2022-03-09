import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { mockFileService, mockService } from './mockData';
import { OcForm } from '@openchannel/react-common-components/src/ui/form/organisms/oc-form/oc-form';
import { FormikProps, FormikValues } from 'formik';

export default {
	title: 'Wizard form component',
	component: OcForm,
} as Meta;

const Component: Story<any> = (args) => {
	const [currentStep, setCurrentStep] = React.useState(1);
	const [maxStepsToShow, setMaxStepsToShow] = React.useState<number>(args.maxStepsToShow);
	const [formik, pullFormik] = React.useState<Partial<FormikProps<FormikValues>>>({
		errors: {},
		touched: {},
		isSubmitting: false,
		values: {},
		isValidating: false,
		submitCount: 0,
	});
	return (
		<OcForm
			{...args}
			currentStep={currentStep}
			setCurrentStep={setCurrentStep}
			maxStepsToShow={maxStepsToShow}
			setMaxStepsToShow={setMaxStepsToShow}
			onSubmit={(e) => console.log(e)}
			formik={formik}
			pullFormik={pullFormik}
		/>
	);
};
export const WizardForm = Component.bind({});
WizardForm.args = {
	formJsonData: {
		appTypeId: 'dfa-field',
		label: 'Wizard App Type',
		description: null,
		createdDate: 1612460763356,
		fields: [
			{
				id: 'name',
				label: 'Name',
				type: 'text',
				attributes: { maxChars: null, required: true, minChars: null },
			},
			{
				attributes: {
					ordering: 'append',
					minCount: null,
					rowLabel: null,
					maxCount: null,
					required: null,
					group: '',
				},
				fields: [{ id: 'text', label: 'Text', type: 'text', attributes: { required: true } }],
				id: 'customData.dfa1',
				label: 'DFA1',
				type: 'dynamicFieldArray',
			},
			{
				id: 'customData.description',
				label: 'description',
				type: 'richText',
				attributes: { maxChars: null, required: null, minChars: null, group: '' },
			},
			{
				id: 'customData.contact-information',
				label: 'Contact information',
				description: 'Here is description!',
				type: 'fieldGroup',
				attributes: {},
			},
			{
				id: 'customData.contact-1',
				label: 'contact 1',
				description: 'Description of contact',
				type: 'text',
				attributes: {
					maxChars: null,
					required: true,
					minChars: null,
					group: 'contact-information',
				},
			},
			{
				id: 'customData.contact-2',
				label: 'contact 2',
				description: '',
				type: 'longText',
				attributes: {
					maxChars: null,
					required: true,
					minChars: null,
					group: 'contact-information',
				},
			},
			{
				id: 'customData.images',
				label: 'Images',
				description: '',
				type: 'fieldGroup',
				attributes: {},
			},
			{
				id: 'customData.images-1',
				label: 'Images 1',
				description: '',
				type: 'singleImage',
				attributes: {
					width: null,
					required: true,
					hash: null,
					accept: null,
					height: null,
					group: 'images',
				},
			},
			{
				id: 'customData.images-2',
				label: 'Images 2',
				description: '',
				type: 'singleFile',
				attributes: { required: true, hash: null, accept: null, group: 'images' },
			},
			{
				id: 'customData.personal-data',
				label: 'Personal Data',
				description: '',
				type: 'fieldGroup',
				attributes: {},
			},
			{
				id: 'customData.personal-1',
				label: 'Personal 1',
				description: '',
				type: 'color',
				attributes: { required: null, group: 'personal-data' },
			},
			{
				id: 'customData.personal-2',
				label: 'Personal 2',
				description: '',
				type: 'emailAddress',
				attributes: { required: true, group: 'personal-data' },
			},
			{
				id: 'customData.personal-3',
				label: 'Personal 3',
				description: '',
				type: 'richText',
				attributes: { maxChars: null, required: true, minChars: null, group: 'personal-data' },
			},
			{
				id: 'customData.general-test-field',
				label: 'General test field',
				description: '',
				defaultValue: [],
				type: 'tags',
				attributes: { minCount: null, maxCount: null, required: true, group: '' },
			},
		],
	},
	displayType: 'wizard',
	showProgressBar: true,
	showGroupDescription: true,
	showGroupHeading: true,
	showButton: true,
	buttonPosition: 'between',
	maxStepsToShow: 3,
	enableTextTruncation: true,
	service: mockService,
	fileService: mockFileService,
};

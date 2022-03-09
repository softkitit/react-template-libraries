import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { InputNumberProps } from '../../../packages/react-common-components/src/ui/common';
import OcNumberComponent from '../../../packages/react-common-components/src/ui/common/atoms/oc-number';

export default {
	title: 'Number Input Component [BEM]',
	component: OcNumberComponent,
} as Meta;

const InputComponent: Story<InputNumberProps> = (args) => {
	return <OcNumberComponent {...args} />;
};

export const SimpleNumberInput = InputComponent.bind({});
SimpleNumberInput.args = {
	required: false,
	placeholder: 'Write any number here',
	customClass: '',
};

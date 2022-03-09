import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { InputProps } from '../../../packages/react-common-components/src/ui/common';
import OcInputComponent from '../../../packages/react-common-components/src/ui/common/atoms/oc-input';

export default {
	title: 'Input [BEM]',
	component: OcInputComponent,
} as Meta;

const InputComponent: Story<InputProps> = (args) => <OcInputComponent {...args} />;

export const DefaultInput = InputComponent.bind({});
DefaultInput.args = {
	required: false,
	inputType: 'text',
};

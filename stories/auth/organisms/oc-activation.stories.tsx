import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import {
	errorMessages,
	OcActivationProps,
	OcActivation,
} from '../../../packages/react-common-components/src/ui';

export default {
	title: 'User Activation',
	component: OcActivation,
} as Meta;

const DefaultComponent: Story<OcActivationProps> = (args) => (
	<BrowserRouter>
		<OcActivation {...args} />
	</BrowserRouter>
);

export const Default = DefaultComponent.bind({});
Default.args = {
	companyLogoUrl: './img/logo-company.png',
	resendActivationUrl: '/',
	signupUrl: '/',
	inputProps: {
		id: 'input',
	},
};

const FilledComponent: Story<OcActivationProps> = (args) => {
	const [value, setValue] = React.useState('one-time-activation-code');
	const [blurred, setBlurred] = React.useState(false);

	return (
		<BrowserRouter>
			<OcActivation
				{...args}
				inputProps={{
					id: 'input',
					value,
					onChange: (e: any) => setValue(e.target.value),
					onBlur: () => setBlurred(true),
				}}
				inputError={blurred && !value && errorMessages.required()}
			/>
		</BrowserRouter>
	);
};

export const Filled = FilledComponent.bind({});
Filled.args = {
	companyLogoUrl: './img/logo-company.png',
	resendActivationUrl: '/',
	signupUrl: '/',
};

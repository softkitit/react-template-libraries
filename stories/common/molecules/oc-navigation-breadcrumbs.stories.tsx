import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
	NavigationBreadcrumbsProps,
	OcNavigationBreadcrumbs
} from "../../../packages/react-common-components/src/ui/common/molecules/oc-navigation-breadcrumbs";
import './oc-navigation-breadcrumbs.stories.scss'

export default {
	title: 'Navigation Breadcrumbs',
	component: OcNavigationBreadcrumbs,
	parameters: {
		actions: {
			handles: ['click'],
		},
	},
} as Meta;

const NavigationComponent: Story<NavigationBreadcrumbsProps> = (args) => {
	return (
		<div className="bg-container height-unset">
			<OcNavigationBreadcrumbs {...args}/>
		</div>

	)
}

export const Navigation = NavigationComponent.bind({})

Navigation.args = {
	navigateText: 'Back',
	navigateClick: action('onAppClick'),
	pageTitle: 'My Profile',
	buttonText: 'Invite a member',
	buttonClick: action('onAppClick')
}

Navigation.storyName = 'Navigation Breadcrumb';

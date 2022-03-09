import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { OcTagElementProps } from '../../../packages/react-common-components/src/ui/common';
import OcTagElement from '../../../packages/react-common-components/src/ui/common/atoms/oc-tag-element';

export default {
	title: 'Tag element',
	component: OcTagElement,
} as Meta;

const Component: Story<OcTagElementProps> = (args) => <OcTagElement {...args} />;

export const Default = Component.bind({});
Default.args = {
	title: 'simple tag',
	onIconClick: action('icon clicked'),
};

export const CustomIcon = Component.bind({});
CustomIcon.args = {
	title: 'tag',
	deleteTagImgUrl: './img/delete.svg',
};
CustomIcon.storyName = 'Tag with custom icon';

export const TagWithoutIcon = Component.bind({});
TagWithoutIcon.args = {
	title: 'tag without icon',
	onIconClick: undefined,
};

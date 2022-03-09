import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import {
	ImageGalleryProps,
	GalleryItem,
} from '../../../packages/react-common-components/src/ui/common';
import OcImageGalleryComponent from '../../../packages/react-common-components/src/ui/common/atoms/oc-image-gallery';

export default {
	title: 'Image Gallery [BEM]',
	component: OcImageGalleryComponent,
} as Meta;

const ImageGalleryComponent: Story<ImageGalleryProps> = (args) => (
	<OcImageGalleryComponent {...args} />
);

const imageItem: GalleryItem = {
	image: './img/get-started.svg',
	title: 'Test App Image',
	description: 'Improve and extend your experience right from your own UI',
};

export const SmallGallery = ImageGalleryComponent.bind({});
SmallGallery.args = {
	gallery: [imageItem, imageItem, imageItem],
	maxItems: 3,
};

export const ExtendedGallery = ImageGalleryComponent.bind({});
ExtendedGallery.args = {
	gallery: [imageItem, imageItem, imageItem, imageItem, imageItem, imageItem, imageItem],
	maxItems: 6,
};

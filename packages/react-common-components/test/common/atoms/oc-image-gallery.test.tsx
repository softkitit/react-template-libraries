import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { GalleryItem } from '@openchannel/react-common-components/src/ui';
import OcImageGalleryComponent from '../../../src/ui/common/atoms/oc-image-gallery/oc-image-gallery';

describe('Image Gallery', () => {
	const imageItem: GalleryItem = {
		image: './img/get-started.svg',
		title: 'Test App Image',
		description: 'Improve and extend your experience right from your own UI',
	};
	const component = shallow(
		<OcImageGalleryComponent gallery={[imageItem, imageItem, imageItem]} maxItems={3} />,
	);

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show images', () => {
		const component = mount(
			<OcImageGalleryComponent gallery={[imageItem, imageItem, imageItem]} maxItems={3} />,
		);
		expect(component.prop('gallery')).toBeTruthy();
	});

	it('should show extended gallery', () => {
		const component = mount(
			<OcImageGalleryComponent
				gallery={[imageItem, imageItem, imageItem, imageItem, imageItem, imageItem]}
				maxItems={6}
			/>,
		);
		expect(component.prop('gallery').length).toEqual(6);
	});
});

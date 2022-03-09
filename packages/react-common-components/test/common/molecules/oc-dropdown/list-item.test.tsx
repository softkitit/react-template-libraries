import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ListItemProps } from '@openchannel/react-common-components/src/ui';

import { ListItem } from '../../../../src/ui/common/molecules/oc-dropdown/common/list-item';

const setUp = (props: ListItemProps) => shallow(<ListItem {...props} />);

describe('OcDropdown - list item component (common dropdown)', () => {
	const component: ShallowWrapper = setUp({
		variant: 'inline',
		children: 'value',
		option: { label: 'One', value: 'one' },
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have empty style class prop', () => {
		component.setProps({ variant: 'block' });

		expect(component.hasClass('')).toBeTruthy();
	});
});

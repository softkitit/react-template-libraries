import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ToggleProps } from '@openchannel/react-common-components/src/ui';

import { Toggle } from '../../../../src/ui/common/molecules/oc-dropdown/common/toggle';

const setUp = (props: ToggleProps) => shallow(<Toggle {...props} />);

describe('OcDropdown - toggle component (common dropdown)', () => {
	const component: ShallowWrapper = setUp({
		variant: 'inline',
		onClick: jest.fn(),
		className: 'dropdown-item',
		'aria-haspopup': true,
		children: 'value',
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have "button" style class', () => {
		component.setProps({ variant: 'block' });

		expect(component.hasClass('dropdown-button__placeholder-container')).toBeTruthy();
	})
});

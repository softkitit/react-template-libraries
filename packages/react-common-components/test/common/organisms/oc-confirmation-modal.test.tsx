import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ConfirmationModalProps } from '@openchannel/react-common-components/src/ui';
import OcConfirmationModalComponent from '../../../src/ui/common/organisms/oc-confirmation-modal/oc-confirmation-modal';

const setUp = (props: ConfirmationModalProps) =>
	shallow(<OcConfirmationModalComponent {...props} />);

describe('Confirmation Modal (common modal)', () => {
	it('should create with default/required props', () => {
		const component: ShallowWrapper = setUp({
			isOpened: false,
			onClose: jest.fn(),
			modalTitle: 'some title',
			modalText: 'some text',
		});

		expect(component).toBeTruthy();
	});

	it('should create with all props', () => {
		const component: ShallowWrapper = setUp({
			isOpened: false,
			onClose: jest.fn(),
			onCancel: jest.fn(),
			onSubmit: jest.fn(),
			modalTitle: 'some title',
			modalText: 'some text',
			confirmButtonText: 'Ok',
			confirmButtonType: 'primary',
			confirmButtonHide: true,
			rejectButtonText: 'No, cancel',
			rejectButtonType: 'secondary',
			rejectButtonHide: true,
		});

		expect(component).toBeTruthy();
	});
});

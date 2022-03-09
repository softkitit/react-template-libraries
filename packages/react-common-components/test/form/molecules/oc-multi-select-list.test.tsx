import * as React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { OcMultiSelectListProps } from '@openchannel/react-common-components/src/ui';
import OcTagElement from '../../../src/ui/common/atoms/oc-tag-element/oc-tag-element';
import OcMultiSelectList from '../../../src/ui/form/molecules/oc-multi-select-list/oc-multi-select-list';
import OcDropboxComponent from '../../../src/ui/common/atoms/oc-dropbox/oc-dropbox';

const setUp = (props: OcMultiSelectListProps) => shallow(<OcMultiSelectList {...props} />);

describe('OcMultiSelectList', () => {
	let component: ShallowWrapper;

	const onChangeMock = jest.fn();

	beforeEach(() => {
		component = setUp({
			availableItemsList: ['item2'],
			onChange: onChangeMock,
			value: ['item1'],
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should click on tag an remove it from selected values', () => {
		const tagElement = component.find(OcTagElement);

		tagElement.get(0).props.onIconClick();

		expect(onChangeMock).toHaveBeenCalledWith(['item1']);
	});

	it('should select available item and return arr of items', () => {
		const dropboxComponent = component.find(OcDropboxComponent);

		dropboxComponent.get(0).props.selectItem('item2');

		expect(onChangeMock).toHaveBeenCalledWith(['item1', 'item2']);
	});

	it('should call onChange after first render and return default value as selected value', () => {
		const onChangeMock = jest.fn();

		mount(
			<OcMultiSelectList
				availableItemsList={['item2']}
				onChange={onChangeMock}
				value={[]}
				defaultItems={['item1']}
			/>,
		);

		expect(onChangeMock).toHaveBeenCalledWith(['item1']);
	});
});

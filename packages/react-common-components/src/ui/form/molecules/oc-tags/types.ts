import React from 'react';

export type OcTagsValue = Array<string | number | boolean | any>;

export interface OcTagsProps {
	name?: string;
	/**
	 * List of classes which can be attached to the current list
	 */
	customClass?: string;
	/**
	 * Placeholder.
	 */
	placeholder?: string;
	/**
	 * It is list tags for the dropbox. Users can choice tags of this list.
	 * When this list is empty dropbox not shows.
	 */
	availableTags?: OcTagsValue;
	/**
	 * Set type of tags values.
	 * Can be 'string', 'boolean' or 'number'.
	 * @default string
	 */
	tagsType?: 'string' | 'boolean' | 'number';
	/**
	 * List of selected tags.
	 */
	value: OcTagsValue;
	/**
	 * Return array of selected items.
	 * @param v
	 */
	onChange: (v: OcTagsValue) => void;
	onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
}

export type NormalizeTags = (array: string[], type: 'string' | 'boolean' | 'number') => OcTagsValue;

export type UseTagDropboxState = ({ createTag }: { createTag: (s: string) => void }) => {
	inputValue: string;
	resetInputValue: () => void;
	onInputChange: (inputValue: any, { action }: any) => void;
	onKeyDown: (event: any) => void;
};

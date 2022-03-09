import * as React from 'react';

import './style.scss';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	/**
	 * Label value. Use text or children prop
	 */
	text: React.ReactNode;
	/**
	 * Marks the label as required
	 */
	required?: boolean;
	/**
	 * Label value. Use text or children prop
	 */
	children: React.ReactNode;
	/**
	 * Add class list to the current class list.
	 * Required string with class names separated by space.
	 */
	customClass?: string;
}

export const OcLabelComponent: React.FC<Partial<LabelProps>> = (props) => {
	const { text, children, required, customClass = '', ...p } = props;

	return (
		// eslint-disable-next-line jsx-a11y/label-has-for
		<label className={`oc-form-label ${customClass}`} {...p}>
			{text || children}
			{required && <span className="oc-form-label__required">&nbsp;*</span>}
		</label>
	);
};

export default OcLabelComponent;

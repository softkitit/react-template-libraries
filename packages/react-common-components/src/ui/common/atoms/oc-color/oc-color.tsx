import * as React from 'react';
import Color from 'color';
import { debounce } from 'lodash-es';

import './style.scss';

export interface ColorProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * List of classes which can be attached to the current list
	 */
	customClass?: string;
	/**
	 * Placeholder text for input(optional)
	 */
	placeholder?: string;
	/**
	 * Set disabled state for input color picker(optional)
	 */
	disabled?: boolean;
	/**
	 * Value of input type "text"
	 */
	colorValue: string;
	/**
	 * setter function to set value of input type "text"
	 */
	onValueChange: (v: string) => void;
}

// eslint-disable-next-line
const colorRegEx = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)/gi;

const validateColor = (target: string) => target.match(colorRegEx) !== null;

export const OcColorComponent: React.FC<ColorProps> = (props) => {
	const {
		disabled,
		customClass = '',
		placeholder,
		colorValue = '#ced4da',
		onValueChange,
		name,
		onBlur,
	} = props;
	
	const [inputColorValue, setInputColorValue] = React.useState(colorValue);
	const colorInput: React.RefObject<HTMLInputElement> = React.createRef();

	const dummyClick = () => {
		colorInput.current?.click();
	};

	const debouncedOnChange = React.useCallback(
		debounce((value) => {
			onValueChange(value);
		}, 500),
		[onValueChange],
	);

	const handleColorChange = React.useCallback(
		(e: { target: HTMLInputElement }) => {
			setInputColorValue(e.target.value);
			debouncedOnChange(e.target.value);
		},
		[debouncedOnChange],
	);

	const handleTextChange = React.useCallback(
		(e: { target: HTMLInputElement }) => {
			setInputColorValue(e.target.value);
			onValueChange(validateColor(e.target.value) ? Color(e.target.value)?.hex() : e.target.value);
		},
		[onValueChange],
	);

	return (
		<div className={`color-adjust ${customClass}`}>
			<div className="color-adjust__demonstration">
				<span
					className="color-adjust__display form-control"
					style={{ backgroundColor: inputColorValue }}
				/>
				<input
					name={name}
					disabled={disabled}
					placeholder={placeholder}
					value={inputColorValue}
					onChange={handleTextChange}
					className="color-adjust__input form-control"
					onBlur={onBlur}
				/>
			</div>
			{/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
			<div
				role="button"
				tabIndex={0}
				className="color-adjust__picker form-control"
				onClick={dummyClick}
			>
				<span className="color-adjust__picker-icon">
					<svg
						fill="currentColor"
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="eye-dropper"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="color-adjust__picker-icon-svg svg-inline--fa fa-eye-dropper fa-w-16 fa-9x"
					>
						<path
							fill="currentColor"
							d="M483.89 28.14l-.02-.02-.03-.03c-37.47-37.47-98.26-37.46-135.72.03l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-63.6 63.6c-9.37 9.37-9.37 24.57 0 33.94l16.98 16.98L50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62 16.96 16.96c9.44 9.44 24.65 9.31 33.94 0l63.6-63.6c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.5-37.47 37.5-98.25.02-135.73zM144.8 427.32a15.892 15.892 0 0 1-11.31 4.68H80v-53.49c0-4.27 1.66-8.29 4.69-11.31l126.63-126.62 60.12 60.12L144.8 427.32zm305.14-297.38l-77.09 77.09-33.94 33.94 30.07 30.06-29.66 29.66-128-128 29.66-29.65 30.06 30.07L382.08 62.05c9.05-9.06 21.1-14.05 33.91-14.05 12.82 0 24.86 4.98 33.91 14.04l.04.04C459.01 71.14 464 83.19 464 96.01c0 12.81-5 24.86-14.06 33.93z"
						/>
					</svg>
					<input
						name={name}
						type="color"
						tabIndex={-1}
						className="color-adjust__picker-input"
						value={colorValue}
						onChange={handleColorChange}
						ref={colorInput}
						onBlur={onBlur}
					/>
				</span>
			</div>
		</div>
	);
};

export default OcColorComponent;

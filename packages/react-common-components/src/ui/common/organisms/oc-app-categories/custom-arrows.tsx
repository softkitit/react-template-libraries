import * as React from 'react';

import { ReactComponent as LeftArrowIcon } from '../../../../assets/img/arrow-left-analog.svg';
import { ReactComponent as RightArrowIcon } from '../../../../assets/img/arrow-right-analog.svg';

import 'react-multi-carousel/lib/styles.css';
import './style.scss';

export const CustomLeftArrow = (props: any) => {
	const { onClick } = props;
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			role="button"
			tabIndex={0}
			className="categories__carousel-nav categories__carousel-nav-left"
			onClick={onClick}
		>
			<LeftArrowIcon />
		</div>
	);
};

export const CustomRightArrow = (props: any) => {
	const { onClick } = props;
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			role="button"
			tabIndex={0}
			className="categories__carousel-nav categories__carousel-nav-right"
			onClick={onClick}
		>
			<RightArrowIcon />
		</div>
	);
};

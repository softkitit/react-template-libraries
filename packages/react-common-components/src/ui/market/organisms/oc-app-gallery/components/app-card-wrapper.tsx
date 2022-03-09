import * as React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash-es';

import OcAppCard from '../../../molecules/oc-app-card';
import type { CardWrapperProps } from '../types';

const validateLink = (link: string) => {
	if (link[link.length - 1] === '/') return link;
	return `${link}/`;
};

export const AppCardWrapper: React.FC<CardWrapperProps> = (props) => {
	const {
		app,
		customAppCardTemplate,
		routerLinkForOneApp,
		appNavigationParam = '',
		onAppClick,
	} = props;

	return (
		<div
			role="button"
			tabIndex={0}
			className="gallery__content-card"
			onClick={onAppClick ? () => onAppClick(app) : undefined}
		>
			{routerLinkForOneApp ? (
				<Link to={validateLink(routerLinkForOneApp).concat(get(app, appNavigationParam, ''))}>
					{customAppCardTemplate ? (
						React.cloneElement(customAppCardTemplate, { app })
					) : (
						<OcAppCard app={app} />
					)}
				</Link>
			) : customAppCardTemplate ? (
				React.cloneElement(customAppCardTemplate, { app })
			) : (
				<OcAppCard app={app} />
			)}
		</div>
	);
};

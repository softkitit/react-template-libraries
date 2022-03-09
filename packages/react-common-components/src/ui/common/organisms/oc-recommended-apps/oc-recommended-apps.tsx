//commit 77c7c788ebd91651e6edbb765e0501d609a55bf0 Author: Julia Date: 05.05.21, 19:30
import * as React from 'react';

import OcAppCard from '../../../market/molecules/oc-app-card';

import './style.scss';

export interface RecommendedAppsProps {
	/**
	 *  Array of the Recommended apps
	 *  Must consists fields: 'name', 'model',
	 * 'rating', 'reviewCount', 'summary' or 'description'
	 */
	appList: Array<any>;
	/** Message that will be shown when no apps */
	noAppMessage?: string;
	/** Title for the Recommended apps list. Default 'Recommended Apps' */
	recommendedAppTitle?: string;
	/** Router link for one app click */
	routerLinkForOneApp: string | any;
	/** Emitter for click by App card.*/
	clickByAppCard: any;
}

export const OcRecommendedAppsComponent: React.FC<RecommendedAppsProps> = (props) => {
	const {
		recommendedAppTitle = 'Recommended Apps',
		clickByAppCard,
		appList,
		noAppMessage = 'No App Found',
	} = props;

	const handleClick = () => {
		clickByAppCard();
		window.scrollTo(0, 0);
	};

	return (
		<div className="recommended-apps">
			<h4 className="recommended-apps__heading">{recommendedAppTitle || ''}</h4>
			{appList.length ? (
				<div className="recommended-apps__container">
					{appList.map((appCard, index) => (
						<div
							className="recommended-apps__card"
							onClick={handleClick}
							key={recommendedAppTitle + index}
						>
							<OcAppCard appRedirectLink={appCard.safeName[0]} app={appCard} />
						</div>
					))}
				</div>
			) : (
				<h5 className="recommended-apps_empty">{noAppMessage}</h5>
			)}
		</div>
	);
};

export default OcRecommendedAppsComponent;

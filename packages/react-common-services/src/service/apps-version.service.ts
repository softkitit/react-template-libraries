/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '../lib/api';

/**
 * Description: API service for getting and modifying apps by version.<br>
 * Documentation: <a href="https://support.openchannel.io/documentation/api/#531-apps">Openchannel API</a><br>
 * Endpoints:<br>
 * GET '/v2/apps/{appId}/versions/textSearch'<br>
 * GET '/v2/apps/{appId}/versions'<br>
 * GET '/v2/apps/{appId}/versions/{version}'<br>
 * POST '/v2/apps/{appId}/versions/{version}'<br>
 * DELETE '/v2/apps/{appId}/versions/{version}'<br>
 */

const APPS_URL = 'v2/apps';

export const appVersion = {
	/**
	 * Description: You can search for apps by specifying the text that you want to search for as well as a list of fields that you want to include in the search.
	 *
	 * @param pageNumber - (optional) Current page index. Starts from >= 1.
	 * @param limit - (optional) Count apps into response. Starts from >= 1.
	 * @param sort - (optional) Sort apps by specific field.
	 *  Documentation <a href="https://support.openchannel.io/documentation/api/#381-sort-document">Openchannel API</a>
	 * @param query - (optional) Your specific search query.
	 *  Documentation <a href="https://support.openchannel.io/documentation/api/#380-query-document">Openchannel API</a>
	 * @param searchText - (required) Text for searching.
	 * @param searchTextByFields - (required) Fields for searching.
	 * @return Promise<Page<AppVersionResponse>>
	 *
	 * ### Example:
	 * ``
	 * getAppsVersionsBySearchText(1, 10, "{"name": 1}", "{"name": {"$in":["first", "second"]}}", "AppName", ["name"])
	 * ``
	 */
	getAppsVersionsBySearchText: (
		pageNumber: number,
		limit: number,
		sort: string,
		query: string,
		searchText: string,
		searchTextByFields: string[],
	) => {
		const mainUrl = `${APPS_URL}/versions/textSearch`;

		const params = {
			pageNumber: String(pageNumber),
			limit: String(limit),
			sort,
			query,
			fields: JSON.stringify(searchTextByFields),
			searchText: searchText || '',
		};

		return api.get(mainUrl, { params });
	},

	/**
	 * Description: Listing app versions returns App Pages based on query and sort criteria.
	 *
	 * Documentation: <a href="https://support.openchannel.io/documentation/api/#411-apps-list-app-versions">Openchannel API</a>
	 *
	 * @param pageNumber - (optional) Current page index. Starts from >= 1.
	 * @param limit - (optional) Count apps into response. Starts from >= 1.
	 * @param sort - (optional) Sort apps by specific field.
	 *  Documentation <a href="https://support.openchannel.io/documentation/api/#381-sort-document">Openchannel API</a>
	 * @param query - (optional) Your specific search query.
	 *  Documentation <a href="https://support.openchannel.io/documentation/api/#380-query-document">Openchannel API</a>
	 * @return Promise<Page<AppVersionResponse>>
	 *
	 * ### Example:
	 * ``
	 * getAppsVersions(1, 10, null, null);
	 * ``
	 */
	getAppsVersions: (pageNumber: number, limit: number, sort: any, query: string) => {
		const mainUrl = `${APPS_URL}/versions`;

		const params = {
			pageNumber: String(pageNumber),
			limit: String(limit),
			sort,
			query,
		};

		return api.get(mainUrl, { params });
	},

	/**
	 * Description: Retrieving an app version returns a single, specific version of an app.
	 *
	 * Documentation: <a href="https://support.openchannel.io/documentation/api/#413-apps-get-an-app-version">Openchannel API</a>
	 *
	 * @param appId (required)
	 * @param version (required) Starts from >= 1.
	 * @return Promise<AppVersionResponse>
	 *
	 * ### Example:
	 * ``
	 * getAppByVersion("6238426d0c0osf654208", 1);
	 * ``
	 */
	getAppByVersion: (appId: string, version: number) => {
		const mainUrl = `${APPS_URL}/${appId}/versions/${version}`;
		return api.get(mainUrl);
	},

	/**
	 * Description: Update app by version but the update may create a new app version
	 *  that cannot be viewed by a marketplace administrator until the developer publishes the new app version.
	 *
	 * Documentation: <a href="https://support.openchannel.io/documentation/api/#408-apps-update-app">Openchannel API</a>
	 *
	 * @param appId (required)
	 * @param version (required) Starts from >= 1.
	 * @return Promise<AppVersionResponse>
	 *
	 * ### Example:
	 * ``
	 * updateAppByVersion("6238426d0c0osf654208", 1, {"name": "New app name"})
	 * ``
	 */
	updateAppByVersion: (appId: string, version: number, updateAppVersionModel: any) => {
		const mainUrl = `${APPS_URL}/${appId}/versions/${version}`;
		return api.post(mainUrl, updateAppVersionModel);
	},

	/**
	 * Description: Deleting an app version permanently removes that version.
	 *
	 * Documentation: <a href="https://support.openchannel.io/documentation/api/#410-apps-delete-app-version">Openchannel API</a>
	 * @param appId (required)
	 * @param version (required) Starts from >= 1.
	 * @return Empty response {};
	 *
	 * ### Example:
	 * ``
	 * deleteAppVersion("6238426d0c0osf654208", 1);
	 * ``
	 */
	deleteAppVersion: (appId: string, version: number) => {
		const mainUrl = `${APPS_URL}/${appId}/versions/${version}`;
		return api.delete(mainUrl);
	},
};

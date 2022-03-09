export interface AppModel {
	type: string;
	price: number;
	trial: number;
	license: string;
	modelId: string;
	currency: string;
	commission?: number;
	feePayer?: string;
	billingPeriod?: string | 'daily' | 'weekly' | 'monthly' | 'annually';
	billingPeriodUnit?: any;
}

export interface Restrict {
	own: {
		country: string[];
	};
	view: {
		country: string[];
	};
}

export declare type AppStatusValue =
	| 'pending'
	| 'inReview'
	| 'inDevelopment'
	| 'approved'
	| 'suspended'
	| 'rejected';

export interface AppStatus {
	value: AppStatusValue;
	lastUpdated: number;
	modifiedBy: string;
	reason: string;
}

export interface StatElement {
	'90day': number;
	'30day': number;
	total: number;
}

export interface Statistics {
	views: StatElement;
	downloads: StatElement;
	developerSales: StatElement;
	totalSales: StatElement;
	ownerships: StatElement;
	reviews: StatElement;
}

export interface CustomDataAppConfig {
	icon: string;
	logo: string;
	summary: string;
	description: string;
	video: string;
	images: string;
	categories: string;
	author: string;
	gallery: string;
}

export interface Parent {
	status: AppStatus;
}

/**
 * Gallery Item interface
 * @property {string} title - String value with image title
 * @property {string} description - String value with description for the title
 * @property {string} image - Image URL value
 */
export interface GalleryItem {
	title: string;
	description: string;
	image: string;
}

export interface App {
	appId: string;
	customData?: any;
	lastUpdated: Date | number;
	version: number;
	name: string;
	safeName: string[];
	developerId: string;
	model: AppModel[];
	access?: string[];
	restrict?: Restrict | Record<string, unknown>;
	allow?: Restrict | Record<string, unknown>;
	submittedDate: Date | number;
	created: Date | number;
	attributes?: any;
	rating: number;
	reviewCount: number;
	status: AppStatus;
	statistics: Statistics;
	isLive: boolean;
	type?: string;
}

export interface OwnershipModel {
	ownershipId: string;
	date: Date;
	appId: string;
	userId: string;
	developerId: string;
	ownershipType: string | 'full' | 'subscription' | 'trial';
	ownershipStatus: string | 'pending' | 'active' | 'uninstalled' | 'cancelled';
	uninstallDate?: Date;
	expires?: Date;
	model: AppModel;
	customData?: any;
}

export interface AppVersion extends App {
	isLatestVersion?: boolean;
	children?: FullAppData[];
	parent?: Parent;
	ownership?: OwnershipModel;
}

/**
 * Class used for mapping apps customData to proper fields.
 * If you need more fields just extend this class.
 *
 * @example
 * export class MyFullAppData extends FullAppData {
 *   myField: string;
 *
 *   constructor(appData: AppVersion, customDataConfig: CustomDataAppConfig) {
 *   super(appData, customDataConfig);
 *
 *   this.myField = appData.customData[customDataConfig.myField] || '';
 * }
 *
 * const app: App = await apps.getAppById('appId')
 * new MyFullAppData(app, {icon: 'image1', myFiled: 'fieldNameInCustomData'}))
 */
export class FullAppData {
	/**
	 * App fields
	 */
	appId: string;
	customData?: any;
	lastUpdated: number | Date;
	version: number;
	name: string;
	safeName: string[];
	developerId: string;
	model: AppModel[];
	access?: string[];
	restrict?: Record<string, unknown> | Restrict;
	allow?: Record<string, unknown> | Restrict;
	submittedDate: number | Date;
	created: number | Date;
	attributes?: any;
	rating: number;
	reviewCount: number;
	status: AppStatus;
	statistics: Statistics;
	isLive: boolean;
	type?: string;

	/**
	 * App version fields
	 */
	isLatestVersion?: boolean;
	children?: FullAppData[];
	parent?: Parent;
	ownership?: OwnershipModel;

	/**
	 * custom data fields mapped in constructor
	 */
	icon?: string;
	logo?: string;
	summary?: string;
	description?: string;
	video?: string;
	images?: string[];
	categories?: string[];
	author?: string;
	gallery?: GalleryItem[];

	/**
	 * Create a class with mapped customData to proper fields
	 *
	 * @param appData app data or app version data from api response
	 * @param customDataConfig customDataConfig  config for customData fields name information
	 */
	constructor(appData: any, customDataConfig: CustomDataAppConfig) {
		this.appId = appData.appId;
		this.type = appData.type;
		this.lastUpdated = new Date(appData.lastUpdated);
		this.version = appData.version;
		this.name = appData.name;
		this.safeName = appData.safeName;
		this.developerId = appData.developerId;
		this.model = appData.model;
		this.access = appData.access || [];
		this.restrict = appData.restrict || null;
		this.allow = appData.allow || null;
		this.submittedDate = new Date(appData.submittedDate);
		this.created = new Date(appData.created);
		this.attributes = appData.attributes || null;
		this.rating = appData.rating;
		this.reviewCount = appData.reviewCount;
		this.status = appData.status;
		this.statistics = appData.statistics;
		this.isLive = appData.isLive;
		this.customData = appData.customData;
		this.isLatestVersion = appData.isLatestVersion || null;
		this.children = appData.children || [];
		this.parent = appData.parent;
		this.ownership = appData?.ownership;

		// custom data mapping
		if (customDataConfig) {
			this.icon = appData.customData[customDataConfig.icon] || '';
			this.logo = appData.customData[customDataConfig.logo] || '';
			this.summary = appData.customData[customDataConfig.summary] || '';
			this.description = appData.customData[customDataConfig.description] || '';
			this.video = appData.customData[customDataConfig.video] || '';
			this.images = appData.customData[customDataConfig.images] || [];
			this.categories = appData.customData[customDataConfig.categories] || [];
			this.author = appData.customData[customDataConfig.author] || '';
			this.gallery = appData.customData[customDataConfig.gallery] || [];
		}
	}
}

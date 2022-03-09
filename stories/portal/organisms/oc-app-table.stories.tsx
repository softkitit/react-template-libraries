import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { FullAppData } from '@openchannel/react-common-components/src/ui/common';
import OcAppTable from '../../../packages/react-common-components/src/ui/portal/organisms/oc-app-table/oc-app-table';

const statElement = {
	'90day': 10,
	'30day': 20,
	total: 30,
};

const app1: FullAppData = {
	appId: '5f22dd91b5ad376fff8431a71',
	safeName: ['firstapp'],
	customData: {
		summary: 'Some Test summary',
		'website-url': null,
		'product-images': null,
		icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255adfb5ad376fff84b6cf.png',
		category: ['category'],
		'video-url': null,
	},
	status: {
		value: 'approved',
		lastUpdated: 1432696823474,
		modifiedBy: 'developer',
		reason: '',
	},
	developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
	model: [
		{
			license: 'single',
			modelId: '5f22dd91b5ad376fff8431a6',
			price: 0,
			currency: 'USD',
			type: 'free',
			trial: 0,
		},
	],
	name: 'FirstApp',
	lastUpdated: 1432696823474,
	isLive: true,
	version: 1,
	submittedDate: 1432696823474,
	created: 1432696823474,
	rating: 4.2,
	reviewCount: 10,
	statistics: {
		views: statElement,
		downloads: statElement,
		developerSales: statElement,
		totalSales: statElement,
		ownerships: statElement,
		reviews: statElement,
	},
	children: [
		{
			appId: '5f22dd91b5ad376fff8431a72',
			safeName: ['firstapp'],
			customData: {
				summary: 'New Test Summary',
				'website-url': null,
				'product-images': null,
				icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255adfb5ad376fff84b6cf.png',
				category: ['category'],
				'video-url': null,
			},
			status: {
				value: 'inDevelopment',
				lastUpdated: 1432696823474,
				modifiedBy: 'developer',
				reason: '',
			},
			developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
			model: [
				{
					license: 'single',
					modelId: '5f22dd91b5ad376fff8431a6',
					price: 0,
					currency: 'USD',
					type: 'free',
					trial: 0,
				},
			],
			name: 'FirstApp',
			lastUpdated: 1432696823474,
			isLive: false,
			version: 1.2,
			submittedDate: 1432696823474,
			created: 1432956823474,
			rating: 4.2,
			reviewCount: 10,
			statistics: {
				views: statElement,
				downloads: statElement,
				developerSales: statElement,
				totalSales: statElement,
				ownerships: statElement,
				reviews: statElement,
			},
		},
		{
			appId: '5f22dd91b5ad376fff8431a7',
			safeName: ['firstapp'],
			customData: {
				summary: 'New Test Summary',
				'website-url': null,
				'product-images': null,
				icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255adfb5ad376fff84b6cf.png',
				category: ['category'],
				'video-url': null,
			},
			status: {
				value: 'suspended',
				lastUpdated: 1432696823474,
				modifiedBy: 'developer',
				reason: 'need to double check permissions',
			},
			developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
			model: [
				{
					license: 'single',
					modelId: '5f22dd91b5ad376fff8431a6',
					price: 0,
					currency: 'USD',
					type: 'free',
					trial: 0,
				},
			],
			name: 'FirstApp',
			lastUpdated: 1432696823474,
			isLive: false,
			version: 1.1,
			submittedDate: 1432696823474,
			created: 1434796823474,
			rating: 4.2,
			reviewCount: 10,
			statistics: {
				views: statElement,
				downloads: statElement,
				developerSales: statElement,
				totalSales: statElement,
				ownerships: statElement,
				reviews: statElement,
			},
		},
	],
};
const app2: FullAppData = {
	appId: '5f22e2e1ec4ad046ff9e5968',
	safeName: ['secondapp'],
	customData: {
		summary: '',
		'website-url': null,
		'product-images': null,
		icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255ab1ec4ad046ff9edaa2.png',
		category: ['Cat1'],
		'video-url': null,
	},
	status: {
		value: 'inDevelopment',
		lastUpdated: 1596283571928,
		modifiedBy: 'developer',
		reason: '',
	},
	developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
	model: [
		{
			license: 'single',
			modelId: '5f22e2e1ec4ad046ff9e5967',
			price: 0,
			currency: 'USD',
			type: 'free',
			trial: 0,
		},
	],
	name: 'SecondApp',
	lastUpdated: 1596283571928,
	isLive: false,
	version: 1,
	submittedDate: 1596121825148,
	created: 1432696823474,
	rating: 4.2,
	reviewCount: 10,
	statistics: {
		views: statElement,
		downloads: statElement,
		developerSales: statElement,
		totalSales: statElement,
		ownerships: statElement,
		reviews: statElement,
	},
};

const app3: FullAppData = {
	appId: '5f22e3a9ec4ad046ff9e59ec',
	safeName: ['thirdapp'],
	customData: {
		summary: 'this is long text',
		'website-url': 'http://www.google.com',
		'product-images': null,
		icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255af8b5ad376fff84b6d2.png',
		category: ['Cat1'],
		'video-url': 'http://www.google.com',
	},
	status: {
		value: 'pending',
		lastUpdated: 1596122025252,
		modifiedBy: 'developer',
		reason: '',
	},
	developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
	model: [
		{
			license: 'single',
			modelId: '5f22e3a9ec4ad046ff9e59eb',
			price: 5,
			currency: 'USD',
			type: 'single',
			trial: 0,
		},
	],
	name: 'ThirdApp',
	lastUpdated: 1596283642040,
	isLive: false,
	version: 1,
	submittedDate: 1596283642040,
	created: 1596122025249,
	rating: 4.2,
	reviewCount: 10,
	statistics: {
		views: statElement,
		downloads: statElement,
		developerSales: statElement,
		totalSales: statElement,
		ownerships: statElement,
		reviews: statElement,
	},
};

const app4: FullAppData = {
	appId: '5f236dedec4ad046ff9e855e',
	safeName: ['fourthapp'],
	customData: {
		summary:
			'New Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary, new Test Summary',
		'website-url': 'http://www.google.com',
		'product-images': null,
		icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255992b5ad376fff84b6a6.png',
		category: ['Cat1'],
		'video-url': 'http://www.google.com',
	},
	status: {
		value: 'suspended',
		lastUpdated: 1596781554361,
		modifiedBy: 'administrator',
		reason: '',
	},
	developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
	model: [
		{
			license: 'single',
			modelId: '5f236dedec4ad046ff9e855d',
			price: 5,
			currency: 'USD',
			type: 'recurring',
			trial: 0,
			billingPeriod: 'monthly',
		},
	],
	name: 'FourthApp',
	lastUpdated: 1596283284364,
	isLive: false,
	version: 1.3,
	submittedDate: 1596781554341,
	created: 1596157421014,
	rating: 5,
	reviewCount: 3,
	statistics: {
		views: statElement,
		downloads: statElement,
		developerSales: statElement,
		totalSales: statElement,
		ownerships: statElement,
		reviews: statElement,
	},
};

const app5: FullAppData = {
	appId: '5f236e6bec4ad046ff9e8567',
	safeName: ['fifththapp'],
	customData: {
		summary: 'my app',
		'website-url': 'http://www.google.com',
		'product-images': null,
		icon: '//d3grfap2l5ikgv.cloudfront.net/5f20f7ff579d1a20c527d847/public/5f255992b5ad376fff84b6a6.png',
		category: ['Cat1'],
		'video-url': 'http://www.google.com',
	},
	status: {
		value: 'approved',
		lastUpdated: 1596782716848,
		modifiedBy: 'administrator',
		reason: '',
	},
	developerId: '3dcfdd48ed6b4f9d8b6a3e23deb36249',
	model: [
		{
			license: 'single',
			modelId: '5f236dedec4ad046ff9e855d',
			price: 5,
			currency: 'USD',
			type: 'recurring',
			trial: 0,
			billingPeriod: 'monthly',
		},
	],
	name: 'FifthApp',
	lastUpdated: 1596782716848,
	isLive: true,
	version: 2.1,
	submittedDate: 1596781554341,
	created: 1596157421014,
	rating: 4,
	reviewCount: 12,
	statistics: {
		views: statElement,
		downloads: statElement,
		developerSales: statElement,
		totalSales: statElement,
		ownerships: statElement,
		reviews: statElement,
	},
};

const propsConfig = {
	layout: 'table',
	data: {
		pages: 50,
		pageNumber: 1,
		list: [app1, app2, app3, app4, app5],
		count: 50,
	},
	options: ['EDIT', 'PREVIEW', 'SUBMIT', 'SUSPEND', 'DELETE'],
};

export default {
	title: 'App List',
	component: OcAppTable,
} as Meta;

const Component: Story<any> = (args) => (
	<BrowserRouter>
		<div style={{ maxWidth: '1110px' }}>
			<OcAppTable {...args} />
		</div>
	</BrowserRouter>
);

export const Default = Component.bind({});
Default.args = {
	properties: propsConfig,
	noAppMessage: 'No Apps Has Been Added Yet',
};

export const EmptyApplicationList = Component.bind({});
EmptyApplicationList.args = {
	properties: {
		...propsConfig,
		data: {
			...propsConfig.data,
			list: [],
		},
	},
	noAppMessage: 'No Apps Has Been Added Yet',
};

const reviewHeaderCell = () => {
	return <span style={{ display: 'block', minWidth: '100px' }}>Reviews</span>;
};

const reviewRowCell = (app: FullAppData) => <span>{app.reviewCount}</span>;

const descriptionHeaderCell = () => <span>Description</span>;

const descriptionRowCell = (app: FullAppData) => (
	<span style={{ maxHeight: '48px', display: 'block', overflowY: 'hidden' }}>
		{app.customData.summary}
	</span>
);

const createDateRowCell = (app: FullAppData) => (
	<span style={{ maxHeight: '48px', display: 'block', overflowY: 'hidden' }}>
		{new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		}).format(new Date(app.created))}
	</span>
);

const modifyColumns = {
	'you-custom-review-column': { headerCell: reviewHeaderCell, rowCell: reviewRowCell },
	'you-custom-description-column': {
		headerCell: descriptionHeaderCell,
		rowCell: descriptionRowCell,
	},
	'create-date': { rowCell: createDateRowCell, headerCell: reviewRowCell },
};

export const CustomAppTable = Component.bind({});
CustomAppTable.args = {
	properties: propsConfig,
	noAppMessage: 'No Apps Has Been Added Yet',
	activeColumns: [
		'left-placeholder',
		'create-date',
		'name',
		'you-custom-review-column',
		'you-custom-description-column',
		'status',
		'app-options',
		'right-placeholder',
	],
	modifyColumns: modifyColumns,
};

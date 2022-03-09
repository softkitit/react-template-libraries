import * as React from 'react';
import { get } from 'lodash-es';

import { FullAppData } from '../../../../common/models';
import { stripHtmlTags, titleCase } from '../../../../../lib';
import OcDropdownButton from '../../../../common/molecules/oc-dropdown/oc-dropdown-button';

import lineArrowDownIcon from '../../../../../assets/img/line-arrow-down.svg';
import dotsMenuIcon from '../../../../../assets/img/dots-menu.svg';

import { filterOptions, statusColor } from '../utils';
import { OptionsProps, ActiveColumns, ModifyColumn, DataRowProps, OcAppTableProps } from '../types';
import { DropdownListItem } from './dropdown-list-item';
import { SortIcon } from './';

// head

export const getHeaderCell = (
	val: ActiveColumns,
	props: OcAppTableProps,
	handleSortApps: (e: any) => void,
	key: string,
	orderBy: string,
) => {
	const { modifyColumns, ascendingSortIcon, descendingSortIcon } = props;

	switch (val) {
		case 'left-placeholder':
		case 'right-placeholder':
		case 'app-options':
			return getDefaultTH(val, null);
		case 'name':
			return getSortTH(
				val,
				'Name',
				'name',
				handleSortApps,
				ascendingSortIcon,
				descendingSortIcon,
				key,
				orderBy,
			);
		case 'summary':
			return getDefaultTH(val, 'Summary');
		case 'create-date':
			return getSortTH(
				val,
				'Created',
				'created',
				handleSortApps,
				ascendingSortIcon,
				descendingSortIcon,
				key,
				orderBy,
			);
		case 'status':
			return getSortTH(
				val,
				'Status',
				'status.value',
				handleSortApps,
				ascendingSortIcon,
				descendingSortIcon,
				key,
				orderBy,
			);

		default:
			return getCustomTH(val, modifyColumns);
	}
};

const getSortTH = (
	val: ActiveColumns,
	title: string,
	sortKey: string,
	handleSortApps: (e: any) => void,
	ascendingSortIcon?: string | React.ReactElement,
	descendingSortIcon?: string | React.ReactElement,
	key?: string,
	orderBy?: string,
) => {
	return (
		<th
			className={`app-grid-table__header__cell app-grid-table__header__cell-${val}`}
			scope="col"
			tabIndex={0}
			data-sortkey={sortKey}
			onClick={handleSortApps}
		>
			<span className="app-grid-table__header__cell-status-content-text">{title}&nbsp;</span>
			<SortIcon
				isAscending={key === sortKey && orderBy === 'asc'}
				ascendingSortIcon={ascendingSortIcon}
				descendingSortIcon={descendingSortIcon}
			/>
		</th>
	);
};

const getDefaultTH = (val: ActiveColumns, title: string | null) => {
	return (
		<th className={`app-grid-table__header__cell app-grid-table__header__cell-${val}`}>
			{title && <span className="app-grid-table__header__cell-status-content-text">{title}</span>}
		</th>
	);
};

const getCustomTH = (val: ActiveColumns, modifyColumns: ModifyColumn | undefined) => {
	return (
		<th className={`app-grid-table__header__cell app-grid-table__header__cell-${val}`}>
			{modifyColumns?.[val].headerCell?.()}
		</th>
	);
};

// body
export const getBodyCell = (
	val: ActiveColumns,
	props: DataRowProps,
	handleAppNameClick: () => void,
	handleMenuClick: (value: string) => void,
) => {
	const {
		modifyColumns,
		app,
		isChild,
		index,
		defaultAppIcon,
		menuOptions,
		previewTemplate,
		menuUrl,
	} = props;

	const filteredMenuOptions = filterOptions(
		menuOptions,
		app.status.value,
		app.status.modifiedBy,
		previewTemplate,
	);
	if (modifyColumns?.[val]) {
		return getCustomTD(val, app, modifyColumns);
	}
	switch (val) {
		case 'left-placeholder':
		case 'right-placeholder':
			return;
		case 'name':
			return getNameTD(app, isChild, index, defaultAppIcon, handleAppNameClick);
		case 'summary':
			return getSummaryTD(app);
		case 'create-date':
			return getCreateTD(app);
		case 'status':
			return getStatusTD(app);
		case 'app-options':
			return getOptionTD(filteredMenuOptions, handleMenuClick, DropdownListItem, menuUrl);

		default:
			return getCustomTD(val, app, modifyColumns);
	}
};

const getNameTD = (
	app: FullAppData,
	isChild?: boolean,
	index?: number,
	defaultAppIcon?: string,
	handleAppNameClick?: () => void,
) => {
	return (
		<div className="app-grid-table__row__cell-name-content">
			{isChild && (
				<img
					className={`app-grid-table__row__cell-name-content-app-child-icon ${
						index && index > 0 ? 'app-grid-table__row__cell-name-content-hidden' : ''
					}`}
					src={lineArrowDownIcon}
					alt="child application"
				/>
			)}

			<img
				className="app-grid-table__row__cell-name-content-icon"
				src={get(app, 'customData.icon', defaultAppIcon)}
				alt={app.name}
			/>
			<div className="app-grid-table__row__cell-name-content-text">
				<span
					className="app-grid-table__row__cell-name-content-text-title"
					aria-label="Edit application"
					role="button"
					tabIndex={0}
					onClick={handleAppNameClick}
				>
					{app.name}
				</span>
				<span className="app-grid-table__row__cell-name-content-text-version">
					v. {app.version}
				</span>
			</div>
		</div>
	);
};

const getCreateTD = (app: FullAppData) => {
	return (
		<span className="app-grid-table__row__cell-create-date-text">
			{new Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
			}).format(app.created instanceof Date ? app.created : new Date(app.created))}
		</span>
	);
};

const getSummaryTD = (app: FullAppData) => {
	return (
		<span className="app-grid-table__row__cell-summary-text">
			{stripHtmlTags(get(app, 'customData.summary', ''))}
		</span>
	);
};

const getStatusTD = (app: FullAppData) => {
	const color = statusColor(app.status.value);
	const value = app.status.value === 'inDevelopment' ? 'Draft' : titleCase(app.status.value);

	return (
		<div className="app-grid-table__row__cell-status-content">
			<div className={`app-grid-table__row__cell-status-content-marker-${color}`} />
			<span className="app-grid-table__row__cell-status-content-text">{value}</span>
		</div>
	);
};

const getOptionTD = (
	filteredMenuOptions: OptionsProps[],
	handleMenuClick: ({ value }: any) => void,
	DropdownListItem: any,
	menuUrl: any,
) => {
	return (
		<div className="app-grid-table__row__cell-app-options-dropdown">
			<OcDropdownButton
				options={filteredMenuOptions}
				onSelect={handleMenuClick}
				listItem={DropdownListItem}
				listProps={{ alignRight: true }}
			>
				<img
					alt="View more"
					className="app-grid-table__row__cell-app-options-dropdown-dots"
					src={menuUrl || dotsMenuIcon}
				/>
			</OcDropdownButton>
		</div>
	);
};

const getCustomTD = (
	val: ActiveColumns,
	app: FullAppData,
	modifyColumns: ModifyColumn | undefined,
) => {
	if (!modifyColumns || !app) return;
	return modifyColumns[val].rowCell!(app);
};

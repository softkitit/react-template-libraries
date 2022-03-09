import * as React from 'react';

import { ReactComponent as GraphIcon } from '../../../../../assets/img/icon-graph.svg';
import { ReactComponent as TabularIcon } from '../../../../../assets/img/icon-tabular.svg';
import { ReactComponent as SelectDownIcon } from '../../../../../assets/img/select-down.svg';
import { ReactComponent as SelectUpIcon } from '../../../../../assets/img/select-up.svg';
import OcDropdownButton from '../../../../common/molecules/oc-dropdown/oc-dropdown-button';
import { ActionsProps } from '../types';
import { defaultChartStatisticParameter, GRAPH_DATA_TYPE, TABULAR_DATA_TYPE } from '../utils';

import { Radio } from './radio';

export const Actions: React.FC<ActionsProps> = (props) => {
	const {
		periods,
		fields,
		apps = [],
		activeDataType,
		onChangeDataType,
		changeChartOptions,
		minDropdownWidth,
	} = props;

	const selectedPeriod = React.useMemo(
		() => periods.find(({ active }) => active) || defaultChartStatisticParameter,
		[periods],
	);
	const selectedChartType = React.useMemo(
		() => fields.find(({ active }) => active) || defaultChartStatisticParameter,
		[fields],
	);
	const selectedsortingApp = React.useMemo(
		() => apps.find(({ active }) => active) || defaultChartStatisticParameter,
		[apps],
	);

	const onChangePeriod = React.useCallback(
		(e) => {
			const period = periods.find(({ id }) => id === e.target.id);

			if (!period) {
				return;
			}

			changeChartOptions({ period, field: selectedChartType, app: selectedsortingApp });
		},
		[changeChartOptions, selectedChartType, selectedsortingApp],
	);

	const onSelectChartType = React.useCallback(
		(value) => {
			changeChartOptions({ field: value, period: selectedPeriod, app: selectedsortingApp });
		},
		[changeChartOptions, selectedPeriod, selectedsortingApp],
	);

	const onSelectSortingApp= React.useCallback(
		(value) => {
			changeChartOptions({ field: selectedChartType, period: selectedPeriod, app: value});
		},
		[changeChartOptions,selectedChartType, selectedPeriod],
	);

	const onClickDataType = React.useCallback((e) => {
		onChangeDataType(e.currentTarget.dataset.name);
	}, []);

	return (
		<div className="chart__options-container">
			{apps.length > 0 && <OcDropdownButton
				options={apps}
				onSelect={onSelectSortingApp}
				selected={selectedsortingApp}
				className="chart__type-section"
				minDropdownWidth={minDropdownWidth}
				defaultPlaceholderIcon={<SelectDownIcon className="chart__type-section-dropdown-icon" />}
				activePlaceholderIcon={<SelectUpIcon className="chart__type-section-dropdown-icon" />}
			>
				<div className="chart__type-section-dropdown">
					{/* eslint-disable-next-line jsx-a11y/label-has-for */}
					<label className="chart__type-section-dropdown-label">{selectedsortingApp.label}</label>
				</div>
			</OcDropdownButton>}
			<div className="chart__period-container">
				{periods.map((obj, k) => (
					<Radio
						key={k}
						id={obj.id}
						label={obj.label}
						checked={selectedPeriod.id === obj.id}
						onChange={onChangePeriod}
					/>
				))}
			</div>
			<div className="chart__filter-buttons-container">
				<div className="chart__filter-buttons-container-tabs">
					{/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
					<div
						tabIndex={0}
						role="button"
						data-name={TABULAR_DATA_TYPE}
						onClick={onClickDataType}
						className={`chart__swap-type-button chart__tabular-button ${
							activeDataType === TABULAR_DATA_TYPE ? 'chart__swap-type-button_active' : ''
						}`}
					>
						<TabularIcon />
					</div>
					{/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
					<div
						tabIndex={0}
						role="button"
						data-name={GRAPH_DATA_TYPE}
						onClick={onClickDataType}
						className={`chart__swap-type-button chart__graph-button ${
							activeDataType === GRAPH_DATA_TYPE ? 'chart__swap-type-button_active' : ''
						}`}
					>
						<GraphIcon />
					</div>
				</div>
				<OcDropdownButton
					options={fields}
					onSelect={onSelectChartType}
					selected={selectedChartType}
					className="chart__type-section"
					minDropdownWidth={minDropdownWidth}
					defaultPlaceholderIcon={<SelectDownIcon className="chart__type-section-dropdown-icon" />}
					activePlaceholderIcon={<SelectUpIcon className="chart__type-section-dropdown-icon" />}
				>
					<div className="chart__type-section-dropdown">
						{/* eslint-disable-next-line jsx-a11y/label-has-for */}
						<label className="chart__type-section-dropdown-label">{selectedChartType.label}</label>
					</div>
				</OcDropdownButton>
			</div>
		</div>
	);
};

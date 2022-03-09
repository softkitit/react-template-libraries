import * as React from 'react';
import { get } from 'lodash-es';

import dotsMenuIcon from '../../../../../assets/img/dots-menu.svg';
import { titleCase } from '../../../../../lib';
import OcDropdownButton from '../../../../common/molecules/oc-dropdown/oc-dropdown-button';
import {
	ComponentsUserAccountGridModel,
	ComponentsUserGridActionModel,
	UserGridOptionType,
} from '../../../models';
import { userInitials } from '../utils';

import { DropdownListItem } from './dropdown-list-item';

interface DataRowProps {
	user: ComponentsUserAccountGridModel;
	dropdownOptions: UserGridOptionType[];
	menuUrl?: string;
	onMenuClick?(action: ComponentsUserGridActionModel): void;
	mode?: 'developer' | 'user';
}

export const DataRow: React.FC<DataRowProps> = (props) => {
	const { user, menuUrl, dropdownOptions, onMenuClick, mode = 'user' } = props;

	const handleMenuClick = React.useCallback(
		({ value }) => {
			if (!onMenuClick) {
				return;
			}

			const action: ComponentsUserGridActionModel =
				mode === 'user'
					? {
							action: value,
							userId: user.userId!,
							userAccountId: user.userAccountId!,
							inviteId: user?.inviteId!,
							inviteToken: user?.inviteToken!,
					  }
					: {
							action: value,
							userId: user.developerId!,
							userAccountId: user.userAccountId!,
							inviteId: user?.developerInviteId!,
							inviteToken: user?.inviteToken!,
					  };
			onMenuClick(action);
		},
		[onMenuClick, user],
	);

	const isInvited = user.inviteStatus === 'INVITED';

	return (
		<tr className={`user-table__row ${isInvited ? 'user-table__row_highlight-user' : ''}`}>
			<td className="user-table__row-td">
				<div className="user-table__td-row">
					<div className={`user-table__profile ${isInvited ? 'user-table__profile_invited' : ''}`}>
						{userInitials(user.name)}
					</div>
					<span className="user-table__text user-table__text_dark user-table__profile-text">
						{user.name}
					</span>
				</div>
			</td>
			<td className="user-table__row-td">
				<div className="user-table__td-row">
					<span className="user-table__text">{user.email}</span>
				</div>
			</td>
			<td className="user-table__row-td">
				<div className="user-table__td-row">
					<span className="user-table__text">
						{new Intl.DateTimeFormat('en-US', {
							year: 'numeric',
							month: 'numeric',
							day: 'numeric',
						}).format(new Date(user.created))}
					</span>
				</div>
			</td>
			<td className="user-table__row-td">
				<div className="user-table__td-row">
					<span className="user-table__text user-table__text_role">
						{get(user, 'roles[0]', '').toLowerCase()}
					</span>
				</div>
			</td>
			<td className="user-table__row-td">
				<div className="user-table__td-row">
					<span
						className={`user-table__text user-table__text_status ${
							!isInvited ? 'user-table__text_dark' : ''
						}`}
					>
						{(user.inviteStatus || '').toLowerCase()}
					</span>
				</div>
			</td>
			<td className="user-table__row-td action-menu">
				<div className="user-table__menu">
					<OcDropdownButton
						options={dropdownOptions.map((v) => ({ label: titleCase(v), value: v }))}
						onSelect={handleMenuClick}
						listItem={DropdownListItem}
					>
						<img
							alt="View more"
							className="user-table__menu-icon-dots"
							src={menuUrl || dotsMenuIcon}
						/>
					</OcDropdownButton>
				</div>
			</td>
		</tr>
	);
};

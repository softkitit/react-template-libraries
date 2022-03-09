import * as React from 'react';

import { ReactComponent as DownArrow } from '../../../../assets/img/select-down.svg';
import { ReactComponent as UpArrow } from '../../../../assets/img/select-up.svg';
import OcDropdown from '../oc-dropdown/oc-dropdown';

import { DropdownModel } from './types';
import { WithPermissionsListItem } from './withPermissionsListItem';

import './style.scss';

export interface ProfileNavbarProps {
	/**Username initials that will be shown in the avatar circle. If not set - avatar circle will not be shown */
	initials?: string;
	/** Name of the user that will be shown at the top near the avatar circle. If not set - username text will not be shown*/
	username?: string;
	/**Role of the user that will be shown at the bottom near the avatar circle. If not set - role text will not be shown */
	role?: string;
	/** internal prop for dropdown functional */
	selected?: any;
	/** internal prop for dropdown functional */
	onSelect?: any;
	/** Navbar options to be passed */
	options: DropdownModel<string>[];
	/** default dropdown icon */
	defaultPlaceholderIcon?: React.ReactElement;
	/** icon for clicked state */
	activePlaceholderIcon?: React.ReactElement;
	/** ListItem component to render. Should be wrapped with forwardRef.*/
	listItem?: React.ForwardRefExoticComponent<any>;
}

export const OcProfileNavbar: React.FC<ProfileNavbarProps> = (props) => {
	const {
		initials,
		username,
		role,
		selected,
		onSelect,
		defaultPlaceholderIcon = <DownArrow />,
		activePlaceholderIcon = <UpArrow />,
		listItem = WithPermissionsListItem,
		options = [],
	} = props;

	return (
		<div className="profile-navbar">
			{initials && <div className="profile-navbar__initials">{initials}</div>}
			<div className="profile-navbar__dropdown-container">
				<OcDropdown
					onSelect={onSelect}
					selected={selected}
					options={options}
					defaultPlaceholderIcon={defaultPlaceholderIcon}
					activePlaceholderIcon={activePlaceholderIcon}
					variant="block"
					listItem={listItem}
				>
					<div className="profile-navbar__info-container">
						{username && <span className="profile-navbar__username">{username}</span>}
						{role && <span className="profile-navbar__role">{role}</span>}
					</div>
				</OcDropdown>
			</div>
		</div>
	);
};

export default OcProfileNavbar;

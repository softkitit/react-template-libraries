// commit 8042d87b78e1a50f433116e39cb0a61c0a457b9f Author: Julia Date: 26.02.21, 19:40
import * as React from 'react';
import { Link } from 'react-router-dom';

import OcButtonComponent from '../../../common/atoms/oc-button/oc-button';
import OcError from '../../../common/atoms/oc-error/oc-error';
import OcLabelComponent from '../../../common/atoms/oc-label/oc-label';
import OcPasswordComponent from '../../../common/atoms/oc-password/oc-password';

import { OcResetPasswordProps } from './types';

import './styles.scss';

export const OcResetPasswordComponent: React.FC<OcResetPasswordProps> = (props) => {
	const {
		companyLogoUrl,
		loginUrl,
		signupUrl,
		process,
		inputProps,
		inputError,
		value,
		onChange,
		validationError,
		handleButtonClick,
	} = props;

	return (
		<div className="reset-password login-card login-card_borders">
			{/*<form noValidate>*/}
			<div className="reset-password__card-body">
				<div className="reset-password__logo">
					<img src={companyLogoUrl} className="company-logo" alt="logo" />
				</div>
				<div className="reset-password__header">
					<h4 className="reset-password__header-heading">New password</h4>
					<OcLabelComponent>Create new password</OcLabelComponent>
				</div>
				<div className="reset-password__password-group">
					<span className="reset-password__password-group-label">
						<OcLabelComponent htmlFor={inputProps?.id}>Password</OcLabelComponent>
					</span>
					<OcPasswordComponent
						disabled={false}
						placeholder="New password"
						value={value}
						onChange={onChange}
						required
						customClass={validationError ? 'invalid' : ''}
						{...inputProps}
					/>
					{validationError && <OcError message={String(inputError)} />}
				</div>
				<OcButtonComponent
					htmlType="submit"
					type="primary"
					customClass="reset-password__button"
					process={process}
					onClick={handleButtonClick}
				>
					Confirm
				</OcButtonComponent>
				<div className="reset-password__log-in">
					<OcLabelComponent>Already have an account?</OcLabelComponent>
					<Link to={loginUrl} className="reset-password__link">
						{' '}
						Log in
					</Link>
				</div>
				<div className="reset-password__sign-up">
					<OcLabelComponent>Don&apos;t have an account yet?</OcLabelComponent>
					<Link to={signupUrl} className="reset-password__link">
						{' '}
						Sign up
					</Link>
				</div>
			</div>
			{/*</form>*/}
		</div>
	);
};

export default OcResetPasswordComponent;

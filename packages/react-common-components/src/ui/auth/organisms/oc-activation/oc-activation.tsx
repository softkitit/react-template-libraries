// commit 4f17f34a478a17430393de5162da92e855368297 Author: Julia Date: 03.03.21, 18:35
// commit 493f7208c17301bc13c80e4d97cacd6c26273009 Author: Julia Date: 29.04.21, 20:11
import * as React from 'react';
import { Link } from 'react-router-dom';

import OcButtonComponent from '../../../common/atoms/oc-button/oc-button';
import OcError from '../../../common/atoms/oc-error/oc-error';
import OcInputComponent from '../../../common/atoms/oc-input/oc-input';
import OcLabelComponent from '../../../common/atoms/oc-label/oc-label';

import { OcActivationProps } from './types';

import './styles.scss';

export const OcActivation: React.FC<OcActivationProps> = (props) => {
	const {
		companyLogoUrl,
		resendActivationUrl,
		signupUrl,
		process,
		inputProps,
		inputError,
		handleButtonClick,
	} = props;

	return (
		<div className="activation login-card login-card_borders">
			{/*<form noValidate>*/}
			<div className="activation__card-body">
				<div className="activation__logo">
					<img src={companyLogoUrl} className="activation__logo-img company-logo" alt="logo" />
				</div>
				<div className="activation__header">
					<h4 className="activation__header-heading">Activate account</h4>
					<OcLabelComponent>Check your inbox for the activation code</OcLabelComponent>
				</div>
				<div className="activation__form-group">
					<span className="activation__form-group-label">
						<OcLabelComponent htmlFor={inputProps?.id}>Activation code</OcLabelComponent>
					</span>
					<OcInputComponent
						inputType="text"
						placeholder="Activation code"
						customClass={`activation__form-group-input ${inputError ? 'invalid' : ''}`}
						required
						{...inputProps}
					/>
					{inputError && <OcError message={String(inputError)} />}
				</div>
				<OcButtonComponent
					htmlType="submit"
					type="primary"
					customClass="activation__button"
					process={process}
					onClick={handleButtonClick}
				>
					Activate
				</OcButtonComponent>
				<div className="activation__reactivation">
					<span className="activation__reactivation-label">
						<OcLabelComponent>Didn’t get the activation code?</OcLabelComponent>
					</span>
					<Link to={resendActivationUrl} className="activation__link">
						{' '}
						Resend it
					</Link>
				</div>
				<div className="activation__sign-up">
					<span className="activation__reactivation-label">
						<OcLabelComponent>Don't have an account yet?</OcLabelComponent>
					</span>
					<Link to={signupUrl} className="activation__link">
						{' '}
						Sign up
					</Link>
				</div>
			</div>
			{/*</form>*/}
		</div>
	);
};

export default OcActivation;

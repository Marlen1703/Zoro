import React, { useState } from 'react';
import './signIn.scss';
import image from '../../assets/images/signIn.png';
import { useTranslation } from 'react-i18next';
import checkmark from '../../assets/icons/checkmark.webp';

export const SignIn = () => {

    const { t } = useTranslation();
    const [isRemember, setRemember] = useState(false);

    return(
        <div className="sign-in">
            <div className="sign-in-image" style={{background: `url(${image}) center center`}}>
                <h2>
                    <div className="sign-in-image-border-1" />
                    <div className="sign-in-image-border-2" />
                    <div className="sign-in-image-border-3" />
                    <div className="sign-in-image-border-4" />
                    {t('signIn.school')}
                </h2>
                <span>ZORO INC.</span>
            </div>
            <div className="sign-in-form">
                <form>
                    <span>{t('signIn.welcome')}</span>
                    <h3>{t('signIn.login')}</h3>
                    <span>Email</span>
                    <input
                        type="email"
                    />
                    <span>{t('signIn.password')}</span>
                    <input
                        type="password"
                    />
                    <div className="sign-in-form-div">
                        <div className={isRemember ? 'sign-in-form-remember sign-in-form-remember-checked' : 'sign-in-form-remember'}>
                            <div onClick={() => setRemember(!isRemember)}><img alt="" src={checkmark} /></div>
                            <span>{t('signIn.remember')}</span>
                        </div>
                        <span className="sign-in-form-forgot">{t('signIn.forgot')}</span>
                    </div>
                    <button>{t('signIn.signIn')}</button>
                </form>
            </div>
        </div>
    )
};
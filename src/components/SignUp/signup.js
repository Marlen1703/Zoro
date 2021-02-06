import React, { useState } from 'react';
import './signUp.scss';
import { useTranslation } from 'react-i18next';
import back from '../../assets/images/signUp.png';
import checkmark from '../../assets/icons/checkmark.webp';

export const SignUp = () => {

    const { t } = useTranslation();
    const [isAgree, setAgree] = useState(false);

    return(
        <div className="sign-up">
            <div className="sign-up-image" style={{background: `url(${back})`}}>
                <h3>{t('signUp.quote')}</h3>
                <span>ZORO INC.</span>
            </div>
            <div className="sign-up-form">
                <form>
                    <span>{t('signUp.welcome')}</span>
                    <h3>{t('signUp.signUp')}</h3>
                    <span>{t('signUp.name')}</span>
                    <input type="text" />
                    <span>Email</span>
                    <input type="email" />
                    <span>{t('signUp.username')}</span>
                    <input type="text" />
                    <span>{t('signIn.password')}</span>
                    <input type="password" />
                    <span>{t('signUp.confirm')}</span>
                    <input type="password" />
                    <div className={isAgree ? 'sign-up-form-agree sign-up-form-agree-agree' : 'sign-up-form-agree'}>
                        <div onClick={() => setAgree(!isAgree)}>
                            <img alt="" src={checkmark} />
                        </div>
                        <span>{t('signUp.agree')}</span>
                    </div>
                    <button>{t('signUp.submit')}</button>
                </form>
                <span className="sign-up-form-school">КСШГ №4</span>
            </div>
        </div>
    )
};
import React from 'react';
import './header.scss';

import { useTranslation } from 'react-i18next';
import { BurgerMenu } from '../BurgerMenu/burgerMenu';

export const Header = () => {

    const { t } = useTranslation();

    return(
        <header className="header">

            <div className="header-container">
                <ul>
                    <li className="header-brand">Studdis</li>
                    <li>{t('header.why')}</li>
                    <li>{t('header.solutions')}</li>
                    <li>{t('header.resources')}</li>
                    <li>{t('header.enterprice')}</li>
                </ul>
                <ul>
                    <li>{t('header.contact')}</li>
                    <li>{t('header.login')}</li>
                    <li><button>{t('header.try')}</button></li>
                </ul>
            </div>
        </header>
    )
}
import React from 'react';
import './burgerMenu.scss';
import { bubble  as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';

export const BurgerMenu = () => {

    const {t} = useTranslation();

    return(
        <div className="burger">
            <Menu   >
                <div className="burger-container">
                    <ul>
                        <li className="burger-brand">Studdis</li>
                        <li>{t('header.login')}</li>
                        <li><button>{t('header.try')}</button></li>
                        <li>{t('header.contact')}</li>
                    </ul>
                    <ul>
                        <li>{t('header.why')}</li>
                        <li>{t('header.solutions')}</li>
                        <li>{t('header.resources')}</li>
                        <li>{t('header.enterprice')}</li>
                    </ul>
                </div>
            </Menu>
        </div>
    )
};

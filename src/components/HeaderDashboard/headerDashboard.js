import React from 'react';
import './headerDashboard.scss';
import bell from '../../assets/icons/bell.png';
import arrow from '../../assets/icons/arrow.png';
import { BurgerMenuDashboard } from '../BurgerMenuDashboard/burgerMenuDashboard';

export const HeaderDashboard = () => {
    return(
        <header className="header-d">
            <BurgerMenuDashboard />
            <div className="header-d-user">
                <div className="header-d-user-notifications">
                    <img alt="" src={bell} />
                </div>
                <div className="header-d-user-info">
                    <img alt="" src="https://secure.gravatar.com/avatar/72294b4143576d30332775e4045dbf6d?s=150&r=g&d=https://www.beauxapp.com/wp-content/plugins/userswp/assets/images/no_profile.png" className="header-d-user-info-ava" />
                    <div>
                        <span>Rose Satterfield</span>
                        <span>@rozetka_1993</span>
                    </div>
                    <img alt="" src={arrow} className="header-d-user-info-arrow"/>
                </div>
            </div>
        </header>
    )
};
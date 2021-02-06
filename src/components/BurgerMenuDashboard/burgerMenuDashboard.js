import React, { useEffect, useState } from 'react';
import './burgerMenuDashboard.scss';
import { bubble as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import home from '../../assets/icons/home.png';
import tasks from '../../assets/icons/tasks.png';
import settings from '../../assets/icons/settings.png';
import exit from '../../assets/icons/exit.png';
import grades from '../../assets/icons/grades.png';

export const BurgerMenuDashboard = () => {

    const { t } = useTranslation();
    const history = useHistory();
    const location = useLocation();
    const [userType, setUserType] = useState('');

    useEffect(() => {
        if (new RegExp(`\\bstudent`, 'gi').test(location.pathname)) {
            setUserType('student');
        } 
        if (new RegExp(`\\bteacher`, 'gi').test(location.pathname)) {
            setUserType('teacher');
        }
    }, [location]);
   
    return(
        <div className="burger-dashboard">
            <Menu>
                <div className="burger-dashboard-container">
                    {userType === 'student' &&
                        <ul>
                            <li onClick={() => history.push('/student')}><img alt="" src={home}/>{t('student.home')}</li>
                            <li onClick={() => history.push('/student/tasks')}><img alt="" src={tasks}/>{t('student.tasks')}</li>
                            <li onClick={() => history.push('/student/settings')}><img alt="" src={settings}/>{t('student.settings')}</li>
                            <li onClick={() => history.push('/student/grades')}><img alt="" src={grades}/>{t('student.grades')}</li>
                        </ul>
                    }
                    {userType === 'teacher' &&
                        <ul>
                            <li onClick={() => history.push('/teacher')}><img alt="" src={home}/>{t('student.home')}</li>
                            <li onClick={() => history.push('/teacher/homework')}><img alt="" src={tasks}/>{t('student.tasks')}</li>
                            <li onClick={() => history.push('/teacher/settings')}><img alt="" src={settings}/>{t('student.settings')}</li>
                            <li onClick={() => history.push('/teacher/grades')}><img alt="" src={grades}/>{t('student.grades')}</li>
                        </ul>
                    }
                    <img alt="" src={exit} className="burger-dashboard-exit" />
                </div>
            </Menu>
        </div>
    )
}; 
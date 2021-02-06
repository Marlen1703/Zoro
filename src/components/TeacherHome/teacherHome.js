import React from 'react';
import './teacherHome.scss';
import { CardCourse } from '../CardCourse/cardCourse';
import { CalendarComponent } from '../Calendar/calendar';
import { CardEvent } from '../CardEvent/cardEvent';
import { useTranslation } from 'react-i18next';

export const TeacherHome = () => {

    const { t } = useTranslation();

    return(
        <div className="teacher-home">
            <div className="teacher-home-container">
                <div className="teacher-home-classes">
                    <CardCourse />
                    <CardCourse />
                    <CardCourse />
                    <CardCourse />
                    <CardCourse />
                </div>
                <div className="teacher-home-ce">
                    <ul className="teacher-home-ce-menu">
                            <li className="teacher-home-ce-menu-selected">{t('student.courses')}</li>
                            <li>{t('student.events')}</li>
                        </ul>
                    <CalendarComponent />
                    <div className="teacher-home-ce-events">
                        <h3>{t('student.upcoming')}</h3>
                        <CardEvent />
                    </div>
                </div>
            </div>
        </div>
    )
};
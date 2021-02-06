import React, { useState } from 'react';
import './studentSettings.scss';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

export const StudentSettings = () => {

    const { t } = useTranslation();
    const [isEdit, setEdit] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: "Nurdan Elemanov",
            email: "e1eman1337@gmail.com",
            utc: "utc+6"
        },
        onSubmit: values => {
            console.log(values)
        }
    });

    const cancel = () => {
        formik.resetForm();
        setEdit(false);
    }

    return(
        <div className="student-settings">
            <div className="student-settings-container">
                <div className="student-settings-profile">
                    <h3>{t('profile.title')}</h3>
                    <img alt="" src="https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png" className="student-settings-profile-ava"/>
                    <span className="student-settings-profile-name">Nurdan Elemanov</span>
                    <span className="student-settings-profile-school">KSSHG №4</span>
                    <span className="student-settings-profile-class">10-A</span>
                    <span className="student-settings-profile-class-class">Class</span>
                    <button className="student-settings-profile-edit" onClick={() => setEdit(!isEdit)}>{t('profile.edit')}</button>
                </div>
                {isEdit &&
                <div className="student-settings-border" />}
                {isEdit &&
                <div className="student-settings-edit">
                    <h3>{t('profile.edit')} {t('profile.title')}</h3>
                    <form onSubmit={formik.handleSubmit} className="student-settings-edit-form">
                        <div className="student-settings-edit-form-input">
                            <span>{t('profile.fullName')}</span>
                            <input
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                name="fullName" 
                            />
                        </div>
                        <div className="student-settings-edit-form-input">
                            <span>{t('profile.email')}</span>
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                name="email" 
                            />
                        </div>
                        <div className="student-settings-edit-form-input">
                            <span>UTC</span>
                            <select name="utc" value={formik.values.utc} onChange={formik.handleChange}>
                                <option value="utc+4">UTC+4</option>
                                <option value="utc+6">UTC+6</option>
                                <option value="utc-6">UTC-6</option>
                            </select>
                        </div>
                        <span className="student-settings-edit-form-change">{t('profile.changePass')}</span>
                        <div className="student-settings-edit-form-buttons">
                            <button onClick={cancel}>{t('profile.cancel')}</button>
                            <button type="submit">{t('profile.apply')}</button>
                        </div>
                    </form>
                </div>}
            </div>
        </div>
    )
};
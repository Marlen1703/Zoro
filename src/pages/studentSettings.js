import React from 'react';
import { HeaderDashboard } from '../components/HeaderDashboard/headerDashboard';
import { StudentSettings } from '../components/StudentSettings/studentSettings';

const StudentSettingsPage = () => {
    return(
        <>
            <HeaderDashboard />
            <StudentSettings />
        </>
    )
};

export default StudentSettingsPage;
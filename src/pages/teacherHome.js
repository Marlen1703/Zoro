import React from 'react';
import { HeaderDashboard } from '../components/HeaderDashboard/headerDashboard';
import { TeacherHome } from '../components/TeacherHome/teacherHome';

const TeacherHomePage = () => {
    return(
        <>
            <HeaderDashboard />
            <TeacherHome />
        </>
    )
};

export default TeacherHomePage;
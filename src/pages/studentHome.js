import React from 'react';
import { HeaderDashboard } from '../components/HeaderDashboard/headerDashboard';
import { StudentHome } from '../components/StudentHome/studentHome';

const StudentDashboard = () => {
    return(
        <>
            <HeaderDashboard />
            <StudentHome />
        </>
    )
};

export default StudentDashboard;
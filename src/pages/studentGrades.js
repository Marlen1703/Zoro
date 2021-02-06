import React from 'react';
import { HeaderDashboard } from '../components/HeaderDashboard/headerDashboard';
import { StudentGrades } from '../components/StudentGrades/studentGrades';

const StudentGradesPage = () => {
    return(
        <>
            <HeaderDashboard />
            <StudentGrades />
        </>
    )
};

export default StudentGradesPage;
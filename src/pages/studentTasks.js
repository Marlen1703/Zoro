import React from 'react';
import { HeaderDashboard } from '../components/HeaderDashboard/headerDashboard';
import { StudentTasks } from '../components/StudentTasks/studentTasks';

const StudentTasksPage = () => {
    return(
        <>
            <HeaderDashboard />
            <StudentTasks />
        </>
    )
};

export default StudentTasksPage;
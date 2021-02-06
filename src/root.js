import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './assets/styles/main.scss';
import { SuspenseComponent } from './components/Suspense/suspense';
const HomePage = lazy(() => import('./pages/home'));
const SignInPage = lazy(() => import('./pages/signIn'));
const SignUpPage = lazy(() => import('./pages/signUp'));
const StudentHome = lazy(() => import('./pages/studentHome'));
const StudentTasks = lazy(() => import('./pages/studentTasks'));
const StudentSettingsPage = lazy(() => import('./pages/studentSettings'));
const StudentGradesPage = lazy(() => import('./pages/studentGrades'));
const TeacherHomePage = lazy(() => import('./pages/teacherHome'));
const TeacherHomeworkPage = lazy(() => import('./pages/teacherHomework'));

export const AppRouter = () => {
	return (
		<Suspense fallback={<SuspenseComponent />}>
			<BrowserRouter>
				<Route path="/" exact component={HomePage} />
				<Route path="/sign-in" exact component={SignInPage} />
				<Route path="/sign-up" exact component={SignUpPage} />
				<Route path="/student" exact component={StudentHome} />
				<Route path="/student/tasks" exact component={StudentTasks} />
				<Route path="/student/settings" exact component={StudentSettingsPage} />
				<Route path="/student/grades" exact component={StudentGradesPage} />
				<Route path="/teacher" exact component={TeacherHomePage} />
				<Route path="/teacher/homework" exact component={TeacherHomeworkPage} />
			</BrowserRouter>
		</Suspense>
	)
}
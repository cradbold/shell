import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';

import { AuthLayout } from '../layouts/auth/AuthLayout';
import { HomeLayout } from '../layouts/home/HomeLayout';
import { ProtectedLayout } from '../layouts/protected/ProtectedLayout';
import { HomePage } from '../pages/home/Home';
import { LoginPage } from '../pages/login/Login';
import { RegisterPage } from '../pages/register/Register';
import { DashboardPage } from '../pages/dashboard/Dashboard';
import { ProfilePage } from '../pages/profile/Profile';
import { SettingsPage } from '../pages/settings/Settings';

// ideally this would be an API call to server to get logged in user data
const getUserData = () => {
  return new Promise((resolve) => {
    const user = window.localStorage.getItem('user');
    resolve(user);
  });
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />} loader={() => defer({ userPromise: getUserData() })}>
            <Route element={<HomeLayout />}>
                <Route path='/' element={(<HomePage />)} />
                <Route path='/login' element={(<LoginPage />)} />
                <Route path='/register' element={(<RegisterPage />)} />
            </Route>
            <Route path='/portal' element={(<ProtectedLayout />)}>
                <Route path='dashboard' element={(<DashboardPage />)} />
                <Route path='profile' element={(<ProfilePage />)} />
                <Route path='settings' element={(<SettingsPage />)} />
            </Route>
        </Route>
    )
);

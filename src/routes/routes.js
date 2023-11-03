import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';
import { AuthLayout } from '../components/layouts/auth/AuthLayout';
import { HomeLayout } from '../components/layouts/home/HomeLayout';
import { ProtectedLayout } from '../components/layouts/protected/ProtectedLayout';
import { HomePage } from '../pages/home/Home';
import { LoginPage } from '../pages/login/Login';
import { ProfilePage } from '../pages/profile/Profile';
import { DashboardPage } from '../pages/dashboard/Dashboard';

// ideally this would be an API call to server to get logged in user data
const getUserData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user');
      resolve(user);
    }, 1000)
  );
};
  
// for error
// const getUserData = () => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 1000)
//   );
// };

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />} loader={() => defer({ userPromise: getUserData() })}>
            <Route element={<HomeLayout />}>
                <Route path='/' element={(<HomePage />)} />
                <Route path='/login' element={(<LoginPage />)} />
            </Route>
            <Route path='/auth' element={(<ProtectedLayout />)}>
                <Route path='dashboard' element={(<DashboardPage />)} />
                <Route path='profile' element={(<ProfilePage />)} />
            </Route>
        </Route>
    )
);

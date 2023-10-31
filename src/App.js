import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { AuthLayout } from "./t_components/AuthLayout";
import { HomeLayout } from "./t_components/HomeLayout";
import { ProtectedLayout } from "./t_components/ProtectedLayout";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";

// ideally this would be an API call to server to get logged in user data
const getUserData = () => {
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 1000)
  );
};

// for error
// const getUserData = () => {
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );
// };

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} loader={() => defer({ userPromise: getUserData() })}>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Route>
  )
);
  
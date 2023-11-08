import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import FrontLayout from "./components/Layout/FrontLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AccountPage from "./pages/account/AccountPage";
import DashboardPage from "./pages/admin-client/dashboard";
import EducationPage from "./pages/admin-client/education";
import ExperiencesPage from "./pages/admin-client/experiences";
import SkillsPage from "./pages/admin-client/skills";
import PortfolioPage from "./pages/admin-client/portfolio";
import { Fragment } from "react";
import NotUsersPage from "./pages/admin-client/client-users";
import UsersPage from "./pages/admin-client/users";
import useAuth from "./zustand/auth";

const App = () => {
  const { isAuth, role } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="auth/login" element={<LoginPage />} />

        <Route path="auth/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        <Route
          element={
            (isAuth && role === "admin") || role === "client" ? (
              <AdminLayout />
            ) : (
              <Navigate
                to={`${isAuth && role === "client" ? "/clientDashboard" : "/"}`}
              />
            )
          }
        >
          <Route
            path={`${role === "admin" ? "admin" : "client"}/account`}
            element={<AccountPage />}
          />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          {role === "admin" ? (
            <Fragment>
              <Route path="users/notClientUsers" element={<NotUsersPage />} />
              <Route path="users" element={<UsersPage />} />
            </Fragment>
          ) : null}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

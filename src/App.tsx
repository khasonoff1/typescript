import { BrowserRouter, Route, Routes } from "react-router-dom";

import FrontLayout from "./components/Layout/FrontLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  // const { isAuth, role } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="auth/login" element={<LoginPage />} />

        <Route path="auth/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route
          path="/waitPage"
          element={isAuth && role === "user" ? <WaitPage /> : null}
        />

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
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

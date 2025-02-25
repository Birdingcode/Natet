import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/login/LoginPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;

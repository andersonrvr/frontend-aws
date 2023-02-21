import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/LoginRegisterPage";
import Profile from "../pages/Profile";
import SalesPage from "../pages/SalesPage";
import { useSale } from "../providers/sales";
import { useSeller } from "../providers/seller";

export const AppRoutes = () => {
  const { verifyUserLoggedIn } = useSeller();

  useEffect(() => {
    verifyUserLoggedIn();
  }, []);

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/sales" element={<SalesPage />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
};

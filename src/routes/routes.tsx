import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import Conta from "../pages/Conta";
// import ContaInfo from "../pages/ContaInfo";
import Home from "../pages/Home";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/conta"
        element={isLoggedIn ? <Conta /> : <Navigate to={"/"} />}
      />
      {/* <Route path="/infoconta" element={<ContaInfo />} /> */}
    </Routes>
  );
};

export default MainRoutes;

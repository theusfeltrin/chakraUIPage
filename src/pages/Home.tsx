import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  isLoggedIn && navigate("/infoconta");

  return <LoginForm />;
};

export default Home;

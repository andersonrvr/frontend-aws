import { useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { useSeller } from "../../providers/seller";
import { Container } from "./styles";

const Login = () => {
  const [register, setRegister] = useState(false);
  const { isLogged } = useSeller();
  if (isLogged) {
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <Container>
      <section className="formContainer">
        <div className="formSwitch">
          <button
            onClick={() => setRegister(false)}
            className={register ? "" : "buttonSellected"}
          >
            Entrar
          </button>
          <button
            onClick={() => setRegister(true)}
            className={register ? "buttonSellected" : ""}
          >
            Registrar
          </button>
        </div>
        {register ? (
          <RegisterForm setRegister={setRegister} className="buttonSellected" />
        ) : (
          <LoginForm />
        )}
      </section>
    </Container>
  );
};

export default Login;

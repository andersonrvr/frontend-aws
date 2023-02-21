import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { Container } from "./styles";
import * as yup from "yup";
import { useSeller } from "../../providers/seller";
import { useState } from "react";
import Loading from "../Loading";

const LoginForm = () => {
  const [typeInput, setTypeInput] = useState("password");
  const { Login, apiLoading } = useSeller();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Preencha o campo email")
      .email("Email inválido"),
    password: yup.string().required("Preencha o campo senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    Login(data);
  };
  const showPassword = () => {
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        register={register}
        name="email"
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        register={register}
        name="password"
        error={errors.password?.message}
        type={typeInput}
      />
      <div className="showPasswordContainer">
        <input
          type="checkbox"
          name="showPassword"
          onChange={() => {
            showPassword();
          }}
        />
        <label htmlFor="showPassword">Exibir senha</label>;
      </div>
      {apiLoading ? <Loading /> : <button type="submit">Entrar</button>}
    </Container>
  );
};

export default LoginForm;

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { Container } from "./styles";
import * as yup from "yup";
import { useSeller } from "../../providers/seller";

const ModalChangePassword = ({ setModalChangePassword }) => {
  const { updateUser } = useSeller();

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required("Preencha o campo senha")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Sua senha deve conter ao menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, um número e um caractere especial."
      ),
    confirm: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    updateUser(data);
    setModalChangePassword(false);
  };

  return (
    <Container>
      <div className="modalContainer">
        <span>
          <button
            className="exitModalPassword"
            onClick={() => {
              setModalChangePassword(false);
            }}
          >
            X
          </button>
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Senha"
            register={register}
            name="password"
            error={errors.password?.message}
            type="password"
          />
          <Input
            label="Confirmar senha"
            register={register}
            name="confirm"
            error={errors.confirm?.message}
            type="password"
          />

          <button type="submit">Atualizar</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalChangePassword;

import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { useSeller } from "../../providers/seller";
import Loading from "../Loading";
const RegisterForm = ({ setRegister }) => {
  const { registerUser, apiLoading } = useSeller();
  const onSubmit = async (data) => {
    const successRegister = await registerUser({ ...data, confirm: undefined });
    if (successRegister === true) {
      setRegister(false);
    }
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Preencha o campo nome")
      .max(128, "Seu nome não pode ter mais de 18 caractéres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
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
    city: yup
      .string()
      .required("Preencha o campo cidade")
      .max(128, "Sua cidade não pode ter mais de 128 caractéres"),
    country: yup
      .string()
      .required("Preencha o campo país")
      .max(128, "Seu país não pode ter mais de 128 caractéres"),
    avatar_url: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome *"
        register={register}
        name="name"
        error={errors.name?.message}
      />
      <Input
        label="Email *"
        register={register}
        name="email"
        error={errors.email?.message}
      />
      <Input
        label="Senha *"
        register={register}
        name="password"
        error={errors.password?.message}
        type="password"
      />
      <Input
        label="Confirmar senha *"
        register={register}
        name="confirm"
        error={errors.confirm?.message}
        type="password"
      />
      <Input
        label="Cidade *"
        register={register}
        name="city"
        error={errors.city?.message}
      />
      <Input
        label="País *"
        register={register}
        name="country"
        error={errors.country?.message}
      />
      <Input
        label="Avatar URL "
        register={register}
        name="avatar_url"
        error={errors.avatar_url?.message}
      />
      <p className="requiredField">* Campos obrigatórios</p>
      {apiLoading ? <Loading /> : <button type="submit">Cadastrar</button>}
    </Container>
  );
};

export default RegisterForm;

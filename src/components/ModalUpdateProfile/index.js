import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { Container } from "./styles";
import * as yup from "yup";
import { useSeller } from "../../providers/seller";
const ModalUpdateProfile = ({ setModalUpdateProfile }) => {
  const { updateUser } = useSeller();
  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== ""));
  }

  const onSubmit = async (data) => {
    const newData = removeEmpty(data);
    setModalUpdateProfile(false);
    updateUser(newData);
    return "a";
  };

  const formSchema = yup.object().shape({
    name: yup.string().max(128, "Seu nome não pode ter mais de 18 caractéres"),
    email: yup.string().email("Email inválido"),

    city: yup
      .string()

      .max(128, "Sua cidade não pode ter mais de 128 caractéres"),
    country: yup
      .string()
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
    <Container>
      <div className="modalContainer">
        <span>
          <button
            className="exitModalProfile"
            onClick={() => {
              setModalUpdateProfile(false);
            }}
          >
            X
          </button>
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            label="Email"
            register={register}
            name="email"
            error={errors.email?.message}
          />

          <Input
            label="Cidade"
            register={register}
            name="city"
            error={errors.city?.message}
          />
          <Input
            label="País"
            register={register}
            name="country"
            error={errors.country?.message}
          />
          <Input
            label="Avatar URL"
            register={register}
            name="avatar_url"
            error={errors.avatar_url?.message}
          />
          <button type="submit">Atualizar</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalUpdateProfile;

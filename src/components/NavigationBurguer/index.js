import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useSeller } from "../../providers/seller";
import { RxAvatar } from "react-icons/rx";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Stars from "../Stars";
import { useEffect } from "react";

const NavigationBurguer = ({ setOpenNavBurguer }) => {
  const { seller, Logout, getSeller, isLogged } = useSeller();
  const navigate = useNavigate();
  const redirectAndClose = (path) => {
    setOpenNavBurguer(false);
    navigate(path);
  };
  useEffect(() => {
    getSeller();
  }, []);

  return (
    <Container>
      <header>
        <AiOutlineClose onClick={() => setOpenNavBurguer(false)} />
      </header>
      <section className="navBurguerUser">
        <img
          src={
            seller.avatar_url
              ? seller.avatar_url
              : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
          }
          alt="Imagem de Usuário"
        />
        <p>{seller.name}</p>
        <Stars numberOfSales={seller.sales_count} />
      </section>
      <section className="navLinksContainer">
        <section className="navBurguerLinks">
          <p
            onClick={() => {
              redirectAndClose("/home");
            }}
          >
            <AiOutlineHome /> Home
          </p>
          <p onClick={() => redirectAndClose("/sales")}>
            <BsGraphUp /> Vendas
          </p>
          <p onClick={() => redirectAndClose("/profile")}>
            <RxAvatar /> Perfil
          </p>
          <p onClick={() => Logout()}>
            <BiLogOut /> Logout
          </p>
        </section>
      </section>
    </Container>
  );
};

export default NavigationBurguer;

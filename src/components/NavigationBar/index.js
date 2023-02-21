import { Container } from "./styles";
import { useSeller } from "../../providers/seller";
import { RxAvatar, RxHome } from "react-icons/rx";
import { BsGraphUp } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Stars from "../Stars";
import { useEffect } from "react";

const NavigationBar = () => {
  const { seller, Logout, getSeller, isLogged } = useSeller();
  const navigate = useNavigate();

  useEffect(() => {
    getSeller();
  }, []);

  return (
    <Container>
      <div className="sideBarFix">
        <section className="navBarUser">
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
        <section className="navBarLinksContainer">
          <section className="navBarLinks">
            <p
              onClick={() => {
                navigate("/home");
              }}
            >
              <RxHome /> Home
            </p>
            <p onClick={() => navigate("/sales")}>
              <BsGraphUp /> Vendas
            </p>
            <p onClick={() => navigate("/profile")}>
              <RxAvatar /> Perfil
            </p>
            <p onClick={() => Logout()}>
              <RiLogoutBoxLine /> Logout
            </p>
          </section>
        </section>
      </div>
    </Container>
  );
};

export default NavigationBar;

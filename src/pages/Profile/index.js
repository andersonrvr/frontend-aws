import { useEffect, useState } from "react";
import { useSeller } from "../../providers/seller";
import { Container } from "./styles";
import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { FaCity } from "react-icons/fa";
import { GiBrazil } from "react-icons/gi";
import ModalUpdateProfile from "../../components/ModalUpdateProfile";
import ModalChangePassword from "../../components/ModalChangePasword";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Profile = () => {
  const { seller, getSeller, token, isLogged, apiLoading } = useSeller();

  useEffect(() => {
    if (isLogged) {
      getSeller();
    }
  }, []);

  const [modalChangePassword, setModalChangePassword] = useState(false);
  const [modalUpdateProfile, setModalUpdateProfile] = useState(false);

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Container>
      <Header />
      <NavigationBar />
      <main>
        <section className="profileInfos">
          <img
            src={
              seller.avatar_url
                ? seller.avatar_url
                : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
            }
            alt="Imagem de Usuário"
          />

          <div className="userInfos">
            <HiOutlineUser />
            <div className="userInfoName">
              {" "}
              <p className="infoTag">Nome</p>
              <p>{seller.name}</p>
            </div>
          </div>
          <div className="userInfos">
            <HiOutlineMail />
            <div className="userInfoName">
              {" "}
              <p className="infoTag">Email</p>
              <p>{seller.email}</p>
            </div>
          </div>
          <div className="userInfos">
            <FaCity />
            <div className="userInfoName">
              {" "}
              <p className="infoTag">Cidade</p>
              <p>{seller.city}</p>
            </div>
          </div>
          <div className="userInfos">
            <GiBrazil />
            <div className="userInfoName">
              {" "}
              <p className="infoTag">País</p>
              <p>{seller.country}</p>
            </div>
          </div>
          {apiLoading ? (
            <Loading />
          ) : (
            <>
              <button onClick={() => setModalUpdateProfile(true)}>
                Atualizar perfil
              </button>
              <button onClick={() => setModalChangePassword(true)}>
                Atualizar senha
              </button>
            </>
          )}
        </section>
      </main>
      {modalChangePassword && (
        <ModalChangePassword setModalChangePassword={setModalChangePassword} />
      )}
      {modalUpdateProfile && (
        <ModalUpdateProfile setModalUpdateProfile={setModalUpdateProfile} />
      )}
    </Container>
  );
};

export default Profile;

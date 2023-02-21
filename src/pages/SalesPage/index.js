import { Container } from "./styles";
import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import Sales from "../../components/Sales";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";
import { useSeller } from "../../providers/seller";

const SalesPage = () => {
  const { token } = useSeller();
  if (!token) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Container>
      <Header />
      <NavigationBar />
      <main>
        <Sales />
      </main>
    </Container>
  );
};

export default SalesPage;

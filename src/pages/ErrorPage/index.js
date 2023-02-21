import { Container } from "./styles";

const ErrorPage = () => {
  return (
    <Container>
      <h1>404</h1>
      <h2>Page not found</h2>

      <p>Desculpe, ocorreu um erro e a página não foi encontrada.</p>

      <a href="https://tech-test-frontend.vercel.app/" target="_self">
        Página principal
      </a>
    </Container>
  );
};

export default ErrorPage;

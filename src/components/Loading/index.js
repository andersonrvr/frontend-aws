import { Container } from "./styles";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Container>
      <ReactLoading
        type={"spin"}
        color={"#3700b3"}
        height={"50px"}
        width={"50px"}
      />
    </Container>
  );
};

export default Loading;

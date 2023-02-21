import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from "./styles";

const Stars = ({ numberOfSales }) => {
  return (
    <Container>
      {numberOfSales >= 25 ? (
        <>
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
        </>
      ) : numberOfSales >= 20 && numberOfSales < 25 ? (
        <>
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiOutlineStar className="unfilledStar" />
        </>
      ) : numberOfSales >= 15 && numberOfSales < 20 ? (
        <>
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
        </>
      ) : numberOfSales >= 10 && numberOfSales < 15 ? (
        <>
          <AiFillStar className="filledStar" />
          <AiFillStar className="filledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
        </>
      ) : numberOfSales >= 5 && numberOfSales < 10 ? (
        <>
          <AiFillStar className="filledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
        </>
      ) : (
        <>
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
          <AiOutlineStar className="unfilledStar" />
        </>
      )}
    </Container>
  );
};

export default Stars;

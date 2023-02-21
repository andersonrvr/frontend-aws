import { useSeller } from "../../providers/seller";
import { Container } from "./styles";
import PaginatedItems from "../Paginate";
import Stars from "../Stars";
import { AiFillTrophy, AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect } from "react";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={item.id} className="rankingSellerContainer">
            <div className="rankingSellerInfo">
              <span>{index + 1}.</span>
              <img
                src={
                  item.avatar_url
                    ? item.avatar_url
                    : "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                }
                alt="Imagem de Usuário"
              />
              <div className="rankingSellerNameCity">
                <p className="rankingSellerName">{item.name}</p>
                <Stars numberOfSales={item.sales_count} />
                <p className="rankingSellerCity">{`${item.city}, ${item.country}`}</p>
              </div>
            </div>

            <p>{item.sales_count}</p>
          </div>
        ))}
    </>
  );
};

const Ranking = () => {
  const { allSellers, getAllSellers, isLogged } = useSeller();
  useEffect((e) => {
    getAllSellers();
  }, []);
  return (
    <Container>
      <h2>
        <AiFillTrophy /> Ranking
        <div className="tool">
          <AiOutlineInfoCircle />
          <span className="tooltext">
            <p>1 Estrela:5 vendas;</p>
            <p>2 Estrelas:10 vendas;</p>
            <p>3 Estrelas:15 vendas;</p>
            <p>4 Estrelas:20 vendas;</p>
            <p>5 Estrelas:25 vendas;</p>
          </span>
        </div>
      </h2>
      <div className="rankingContainer">
        <div className="rankingLabel">
          <p>Vendedor</p>
          <p>Vendas</p>
        </div>

        <PaginatedItems
          items={allSellers.sort((a, b) => b.sales_count - a.sales_count)}
          itemsPerPage={10}
          Items={Items}
        />
      </div>
    </Container>
  );
};

export default Ranking;

import { useEffect, useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";
import { useSale } from "../../providers/sales";
import PaginatedItems from "../Paginate";
import { Container } from "./styles";
import { HiOutlineRefresh } from "react-icons/hi";
const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Accordion key={index}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                Venda dia:{" "}
                {`${item.date.getDate()}/${
                  item.date.getMonth() + 1
                }/${item.date.getFullYear()}`}
              </Accordion.Header>
              <Accordion.Body>
                <p>{item.buyer_name}</p>
                <p>R${item.price}.00</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
    </>
  );
};

const Sales = ({ newSales }) => {
  const { allSales, getAllSales } = useSale();
  const [filteredSales, setFilteredSales] = useState([]);

  useEffect(() => {
    getAllSales();
  }, []);

  useEffect(() => {
    setFilteredSales(allSales.sort((a, b) => b.date - a.date));
  }, [allSales]);

  const filterDaySales = (date) => {
    let dateToFilter = new Date();
    if (date === "yesterday") {
      dateToFilter.setDate(dateToFilter.getDate() - 1);

      setFilteredSales(
        allSales.filter(
          (e) => e.date.toDateString() === dateToFilter.toDateString()
        )
      );
      return;
    }
    if (date === "today") {
      setFilteredSales(
        allSales.filter(
          (e) => e.date.toDateString() === dateToFilter.toDateString()
        )
      );
      return;
    }
    if (date === "month") {
      setFilteredSales(
        allSales.filter(
          (e) =>
            `${e.date.getMonth()} ${e.date.getFullYear()}` ===
            `${dateToFilter.getMonth()} ${dateToFilter.getFullYear()}`
        )
      );
      return;
    }
    if (date === "week") {
      dateToFilter.setDate(dateToFilter.getDate() - 7);
      setFilteredSales(allSales.filter((e) => e.date >= dateToFilter));
      return;
    }
    if (date === "year") {
      setFilteredSales(
        allSales.filter(
          (e) => e.date.getFullYear() === dateToFilter.getFullYear()
        )
      );
      return;
    } else {
      setFilteredSales(allSales.sort((a, b) => b.date - a.date));
    }
  };

  const handleChange = (e) => {
    filterDaySales(e.target.value);
  };

  return (
    <Container>
      <div className="salesHeader">
        <h2>
          <AiFillDollarCircle /> Admnistrativo
        </h2>
        <p>Acompanhe suas vendas</p>
      </div>
      {allSales.length !== 0 ? (
        <>
          <div className="filterAndUpdateContainer">
            <div className="updateSales" onClick={() => getAllSales()}>
              <HiOutlineRefresh />
            </div>
            <div className="custom-select">
              <select onChange={handleChange}>
                <option className="" value="">
                  Todas
                </option>
                <option value="today">Hoje</option>
                <option value="yesterday">Ontem</option>
                <option value="week">Esta Semana</option>
                <option value="month">Este mês</option>
                <option value="year">Este Ano</option>
              </select>
            </div>
          </div>
          {filteredSales && (
            <PaginatedItems
              items={filteredSales}
              itemsPerPage={10}
              Items={Items}
            />
          )}
        </>
      ) : (
        <h3>
          Você não possui nenhuma venda, compartilhe seu link de vendedor com
          mais pessoas!
        </h3>
      )}
    </Container>
  );
};

export default Sales;

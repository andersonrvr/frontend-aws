import { useEffect, useState } from "react";
import { Container } from "./styles";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSale } from "../../providers/sales";
import { AiOutlineBarChart } from "react-icons/ai";

const Chart = () => {
  const { allSales, getAllSales, isLogged } = useSale();
  const [chartSales, setChartSales] = useState([]);

  const salesByMonth = (sales) => {
    const monthsArray = [];
    const today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear() - 1;
    for (let i = 1; i <= 13; i++) {
      if (month + i > 12) {
        month = -11;
        year = today.getFullYear();
      }
      const auxObj = {};
      auxObj["x"] = `${month + i}/${year}`;
      auxObj["vendas"] = 0;
      monthsArray.push(auxObj);
    }
    for (let i = 0; i < sales.length; i++) {
      for (let j = 0; j < monthsArray.length; j++) {
        if (
          `${sales[i].date.getMonth() + 1}/${sales[i].date.getFullYear()}` ===
          monthsArray[j].x
        ) {
          monthsArray[j].vendas = monthsArray[j].vendas + 1;
        }
      }
    }

    setChartSales(monthsArray);
  };

  useEffect(() => {
    getAllSales();
  }, []);

  useEffect(() => {
    salesByMonth(allSales);
  }, [allSales]);

  return (
    <>
      {" "}
      <Container>
        <h2 className="chartsTitle">
          <span>
            <AiOutlineBarChart />
          </span>{" "}
          Acompanhe suas vendas nos últimos 12 meses
        </h2>{" "}
        <div className="chartsContainer">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chartSales}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="vendas" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};
export default Chart;

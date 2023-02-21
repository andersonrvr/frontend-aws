import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services";
import { useSeller } from "../seller";

export const SaleContext = createContext();

export const SaleProvider = ({ children }) => {
  const [allSales, setAllSales] = useState([]);

  const { token, verifyUserLoggedIn } = useSeller();

  const getAllSales = () => {
    verifyUserLoggedIn();
    api
      .get("/sales", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const sales = res.data.map((e) => {
          e.date = new Date(e.date);
          return e;
        });
        setAllSales(sales);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <SaleContext.Provider value={{ allSales, setAllSales, getAllSales }}>
      {children}
    </SaleContext.Provider>
  );
};

export const useSale = () => useContext(SaleContext);

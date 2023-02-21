import { useEffect, useState } from "react";
import { useSeller } from "../../providers/seller";
import { Container } from "./styles";

import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import SellerLink from "../../components/SellerLink";
import Ranking from "../../components/Rankings";
import Chart from "../../components/Chart";
import { Navigate } from "react-router";

const Home = () => {
  const { token } = useSeller();

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Container>
      <Header />
      <NavigationBar />
      <main>
        <SellerLink />
        <Chart />
        <Ranking />
      </main>
    </Container>
  );
};

export default Home;

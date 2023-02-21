import { useState } from "react";

import { Container } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import NavigationBurguer from "../../components/NavigationBurguer";
const Header = () => {
  const [openNavBurguer, setOpenNavBurguer] = useState(false);
  return (
    <Container>
      <GiHamburgerMenu onClick={() => setOpenNavBurguer(true)} />

      {openNavBurguer && (
        <NavigationBurguer setOpenNavBurguer={setOpenNavBurguer} />
      )}
    </Container>
  );
};

export default Header;

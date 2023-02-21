import { SaleProvider } from "./sales";
import { SellerProvider } from "./seller";

const Providers = ({ children }) => {
  return (
    <SellerProvider>
      <SaleProvider>{children}</SaleProvider>
    </SellerProvider>
  );
};

export default Providers;

import { useEffect } from "react";
import { AiOutlineLink, AiOutlinePaperClip } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useSeller } from "../../providers/seller";
import { Container } from "./styles";
import Loading from "../Loading";

const SellerLink = () => {
  const { seller, getSellerLink, apiLoading } = useSeller();
  const copyToClipboard = (content) => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(content);
      toast.success("Copied");
    } else {
      unsecuredCopyToClipboard(content);
    }
  };
  function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      window.scrollTo(0, 0);
      toast.success("Copied");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      toast.error("Não foi possível copiar.");
    }
    document.body.removeChild(textArea);
  }

  return (
    <Container>
      <h2>
        {" "}
        <AiOutlineLink /> Link de Vendas
      </h2>
      <div className="sellerLinkContainer">
        <div>
          {apiLoading ? (
            <Loading />
          ) : seller.seller_link ? (
            <div className="sellerLink">
              <div className="sellerLinkCopy">
                <p>
                  https://confirm-buy-app-tech-test.vercel.app/
                  {seller.seller_link}
                </p>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `https://confirm-buy-app-tech-test.vercel.app/${seller.seller_link}`
                    )
                  }
                >
                  {" "}
                  <AiOutlinePaperClip />
                </button>
              </div>
              <span>CLIQUE PARA COPIAR</span>
            </div>
          ) : seller.seller_link === null ? (
            <div className="sellerLinkButton">
              <button onClick={() => getSellerLink()}>Gerar Link</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SellerLink;

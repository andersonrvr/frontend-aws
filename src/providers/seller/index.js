import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services";

export const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const [seller, setSeller] = useState([]);
  const [allSellers, setAllSellers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [token, setToken] = useState(
    window.localStorage.getItem("techTestToken") || ""
  );

  const navigate = useNavigate();

  const verifyUserLoggedIn = async () => {
    if (token) {
      const validToken = await verifyToken();
      if (!validToken) {
        const customId = "custom-id-toast";
        toast.error("Sessão expirada", {
          toastId: customId,
        });
        return Logout();
      }
      setIsLogged(true);
    } else {
      navigate("/");
    }
  };

  const Login = (data) => {
    setApiLoading(true);
    api
      .post("/login", data)
      .then((res) => {
        window.localStorage.setItem("techTestToken", res.data.token);
        setToken(res.data.token);
        setApiLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        setApiLoading(false);
        toast.error("Email ou senha invalidos.");
      });
  };

  const registerUser = async (data) => {
    delete data.confirm;
    setApiLoading(true);
    const register = await api
      .post("/sellers", data)
      .then((res) => {
        setApiLoading(false);
        toast.success("Usuário criado com sucesso.");
        return true;
      })
      .catch((err) => {
        setApiLoading(false);
        if (err.response.data.message === "Email already exists") {
          toast.error("Email já cadastrado a um usuário.");
          return false;
        } else {
          toast.error(err.response.data.message);
          return false;
        }
      });

    if (register) {
      return true;
    }
  };

  const Logout = () => {
    window.localStorage.clear();
    navigate("/");
    setSeller("");
    setToken("");
    setIsLogged(false);
  };
  const getSeller = () => {
    api
      .get("/seller", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSeller(res.data))
      .catch((err) => console.log(err.response.data.message));
  };

  const getSellerLink = () => {
    setApiLoading(true);
    verifyUserLoggedIn();
    api
      .get("/link", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSeller(res.data);
        setApiLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setApiLoading(false);
      });
  };

  const getAllSellers = () => {
    api
      .get("/sellers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAllSellers(res.data))
      .catch((err) => console.log(err.response.data.message));
  };
  const updateUser = async (data) => {
    setApiLoading(true);
    verifyUserLoggedIn();
    if (data.confirm) {
      delete data.confirm;
    }
    api
      .patch(`/sellers`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setApiLoading(false);
        toast.success("Usuário atualizado com sucesso.");
        getSeller();
      })
      .catch((err) => {
        setApiLoading(false);
        if (err.response.data.message === "Email already exists") {
          toast.error("Email já cadastrado a um usuário.");
        }
      });
  };

  const verifyToken = async () => {
    const tokenVerify = window.localStorage.getItem("techTestToken") || "";
    let verify;
    await api
      .get("/seller", {
        headers: { Authorization: `Bearer ${tokenVerify}` },
      })
      .then((res) => {
        verify = true;
      })
      .catch((err) => {
        verify = false;
      });
    if (!verify) {
      setApiLoading(false);
      return false;
    }
    setApiLoading(false);
    return true;
  };

  return (
    <SellerContext.Provider
      value={{
        seller,
        setSeller,
        verifyUserLoggedIn,
        token,
        isLogged,
        Logout,
        getSeller,
        registerUser,
        Login,
        getSellerLink,
        getAllSellers,
        setAllSellers,
        allSellers,
        updateUser,
        apiLoading,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};

export const useSeller = () => useContext(SellerContext);

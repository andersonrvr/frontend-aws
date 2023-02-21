import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./globalStyle";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
      <Toaster />
      <ToastContainer />
    </div>
  );
}

export default App;

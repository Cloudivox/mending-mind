import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/css/index.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ToastContainer />
    <App />
  </>
);

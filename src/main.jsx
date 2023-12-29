import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

// // static import
import App from "./App.jsx";
import Store from "./store/index.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <App />
  </Provider>
);

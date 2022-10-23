import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "react-toastify/dist/ReactToastify.css";

import { store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "./router/browserHistory";
import { Provider as ReduxProvider } from "react-redux";
import { injectStore } from "./utils/http";

injectStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

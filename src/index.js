import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./components/ContextAPI";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.css'

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </Web3ReactProvider>
);

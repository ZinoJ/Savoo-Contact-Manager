import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./ContactContext";
import { AuthContextProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ContactProvider>
        <App />
      </ContactProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

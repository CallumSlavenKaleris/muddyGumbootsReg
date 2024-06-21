import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RegistrationSingle from "./pages/RegistrationSingle.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationGroup from "./pages/RegistrationGroup.tsx";
import RegistrationCorporate from "./pages/RegistrationCorporate.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/registerSingle" element={<RegistrationSingle />} />
        <Route path="/registerGroup" element={<RegistrationGroup />} />
        <Route path="/registerCoporate" element={<RegistrationCorporate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

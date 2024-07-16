import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RegistrationSingle from "./pages/RegistrationSingle.tsx";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationGroup from "./pages/RegistrationGroup.tsx";
import RegistrationCorporate from "./pages/RegistrationCorporate.tsx";
import { Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from "aws-amplify/auth"; //import "bootstrap/dist/css/bootstrap.min.css";

async function onSignOutClick() {
  await signOut()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="src/assets/muddyGumboot.jpg"
              width="400"
              height="100"
              className=".menu img"
              alt="Muddy Gumboots Registration"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => onSignOutClick()}>Sign Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/registerSingle" element={<RegistrationSingle />} />
        <Route path="/registerGroup" element={<RegistrationGroup />} />
        <Route path="/registerCoporate" element={<RegistrationCorporate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

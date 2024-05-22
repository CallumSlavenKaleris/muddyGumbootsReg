import React from "react";
import muddyGumbootLogo from "./assets/muddyGumboot.jpg";

const Register = () => {
  return (
    <div>
      <div>
        <a href="https://www.muddygumbootevents.com/" target="_blank">
          <img
            src={muddyGumbootLogo}
            className="logo"
            alt="Muddy Gumboots logo"
          />
        </a>
      </div>
      <h1>Muddy Gumboots</h1>
      <h2>Max is a cool</h2>
    </div>
  );
};

export default Register;

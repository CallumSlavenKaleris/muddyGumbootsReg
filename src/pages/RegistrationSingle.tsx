import muddyGumbootLogo from "../assets/muddyGumboot.jpg";
import React, { useState } from "react";

const RegistrationSingle = () => {
  interface SignUpFormState {
    firstname: string;
    lastname: string;
    email: string;
  }

  const [formData, setFormData] = useState<SignUpFormState>({
    firstname: "",
    lastname: "",
    email: "",
  });

  function Welcome() {
    console.log(formData.firstname);
    console.log(formData.lastname);
  }

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
      <div>
        <input
          type="text"
          value={formData.firstname}
          placeholder="Username"
          onChange={(e) =>
            setFormData({
              firstname: e.target.value,
              lastname: formData.lastname,
              email: formData.email,
            })
          }
        />
        <input
          type="text"
          value={formData.lastname}
          placeholder="lastname"
          onChange={(e) =>
            setFormData({
              firstname: formData.firstname,
              lastname: e.target.value,
              email: formData.email,
            })
          }
        />
        <input
          type="text"
          value={formData.email}
          placeholder="email"
          onChange={(e) =>
            setFormData({
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: e.target.value,
            })
          }
        />
        <button onClick={Welcome}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationSingle;

import { FormEvent, useState } from "react";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Form from "react-bootstrap/Form";

const client = generateClient();

const RegistrationSingle = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [medicalConditions, setMedCond] = useState("");
  const [nextOfKinName, setNOKName] = useState("");
  const [nextOfKinPhone, setNOKPhone] = useState("");
  const [category, setCat] = useState("");

  const genders = ["Male", "Female"];

  const categories = ["Junior", "Open", "Masters (35+)", "Masters ()"];

  async function createRegisterSingle(evt: FormEvent) {
    evt.preventDefault();
    if (!firstname || !lastname || !email) {
      alert("Please fill out all required fields");
      return;
    }
    if (!phoneNumber.match(/^\d{10}$/)) {
      alert("Please enter a valid phone number");
      return;
    }
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      alert("Please enter a valid email address");
      return;
    }

    const person = {
      name: firstname + " " + lastname,
      dateOfBirth: dob,
      gender: gender,
      email: email,
      phoneNumber: phoneNumber,
      medicalConditions: medicalConditions,
      nextOfKinName: nextOfKinName,
      nextOfKinPhone: nextOfKinPhone,
    };

    const singleReg = {
      user: person,
      category: category,
    };

    await client
      .graphql({
        query: mutations.createSoloRegistration,
        variables: { input: singleReg },
      })
      .then(
        function (res) {
          //if success show the response in the log

          console.log(res.data.createSoloRegistration);
        },
        function (error) {
          //if error show the error message in the log
          console.log("Error: " + error.statusText);
        }
      );
  }

  return (
    <div>
      <div className="regFormDiv">
        <input
          required
          className=""
          type="text"
          value={firstname}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          required
          className=""
          type="text"
          value={lastname}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          required
          className=""
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Combobox
          className="comboBox"
          placeholder="Gender"
          data={genders}
          dataKey="id"
          textField="name"
          onChange={(e) => setGender(e)}
        />
        <DatePicker
          className="comboBox"
          defaultValue={new Date()}
          valueFormat={{ dateStyle: "medium" }}
          onChange={(e) => setDob(e?.toDateString() as string)}
        />
        <input
          className="input"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className=""
          type="text"
          value={nextOfKinName}
          placeholder="Next of Kin Name"
          onChange={(e) => setNOKName(e.target.value)}
        />
        <input
          className=""
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={nextOfKinPhone}
          placeholder="Next of Kin Phone Number"
          onChange={(e) => setNOKPhone(e.target.value)}
        />
        <textarea
          value={medicalConditions}
          placeholder="Medical Conditions"
          onChange={(e) => setMedCond(e.target.value)}
        />
        <Combobox
          data={categories}
          dataKey="id"
          textField="name"
          className="comboBox"
          placeholder="Category"
          onChange={(e) => setCat(e)}
        />
        <button onClick={createRegisterSingle}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationSingle;

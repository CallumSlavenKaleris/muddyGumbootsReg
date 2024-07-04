import { useState } from "react";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import { PersonInput } from "../API";

const client = generateClient();

const RegistrationGroup = () => {
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

  const groupArray: Array<PersonInput> = [];

  function addPerson() {
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

    groupArray.push(person);
    console.log(groupArray);
  }

  async function createRegisterGroup() {
    const groupReg = {
      users: groupArray,
      category: category,
    };

    console.log(groupReg);

    client
      .graphql({
        query: mutations.createGroupRegistration,
        variables: { input: groupReg },
      })
      .then(
        function (res) {
          //if success show the response in the log
          console.log(res.data.createGroupRegistration);
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
        <button onClick={addPerson}>Add Person</button>
        <button onClick={createRegisterGroup}>Register Group</button>
      </div>
    </div>
  );
};

export default RegistrationGroup;

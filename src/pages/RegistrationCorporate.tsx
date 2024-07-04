import { useState } from "react";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import { PersonInput } from "../API";
import Form from "react-bootstrap/Form";
import { Accordion, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const client = generateClient();

const RegistrationCompany = () => {
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

  const [groupArray, setGroupArray] = useState<Array<PersonInput>>([]);

  function addPerson() {
    if (
      !(
        document.getElementById("firstName") as HTMLInputElement
      ).checkValidity()
    ) {
      (
        document.getElementById("firstName") as HTMLInputElement
      ).reportValidity();
      return;
    }

    if (
      !(document.getElementById("lastName") as HTMLInputElement).checkValidity()
    ) {
      (
        document.getElementById("lastName") as HTMLInputElement
      ).reportValidity();
      return;
    }

    if (
      !(document.getElementById("email") as HTMLInputElement).checkValidity()
    ) {
      (document.getElementById("email") as HTMLInputElement).reportValidity();
      return;
    }

    if (
      !(document.getElementById("email") as HTMLInputElement).checkValidity()
    ) {
      (document.getElementById("email") as HTMLInputElement).reportValidity();
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

    setGroupArray([...groupArray, person]);
    console.log(groupArray);
  }

  async function handleSubmit() {
    const groupReg = {
      users: groupArray,
      category: category,
    };

    console.log(groupReg);

    await client
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
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control
          required
          id="firstName"
          className=""
          type="text"
          value={firstname}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Control
          required
          id="lastName"
          className=""
          type="text"
          value={lastname}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Control
          required
          id="email"
          className=""
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Combobox
          id="gender"
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
        <Form.Control
          id="phoneNum"
          required
          className="input"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Form.Control
          required
          className=""
          type="text"
          value={nextOfKinName}
          placeholder="Next of Kin Name"
          onChange={(e) => setNOKName(e.target.value)}
        />
        <Form.Control
          required
          className=""
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={nextOfKinPhone}
          placeholder="Next of Kin Phone Number"
          onChange={(e) => setNOKPhone(e.target.value)}
        />
        <textarea
          required
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
      </FormGroup>
      <line></line>
      <Accordion defaultActiveKey="0">
        {groupArray.map((singlePerson, index) => (
          <Accordion.Item eventKey="0" key={index}>
            <Accordion.Header> {singlePerson.name}</Accordion.Header>
            <Accordion.Body>Email: {singlePerson.email}</Accordion.Body>
            <Accordion.Body>Phone: {singlePerson.phoneNumber}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Button onClick={addPerson}>Add Person</Button>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default RegistrationCompany;

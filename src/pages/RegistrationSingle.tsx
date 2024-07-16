import { FormEvent, useState } from "react";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
  const [raceNumber, setRaceNum] = useState("");

  function validateCatgeroy() {
    const birthday = new Date(dob);
    const month_diff = Date.now() - birthday.getTime();
    const age_dt = new Date(month_diff);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);

    switch (category) {
      case "Junior (U19)":
        if (age > 19) {
          alert("You can not enter this category with your current age!");
          return;
        }
        break;
      case "Open (19-35)":
        if (age < 19 || age > 35) {
          alert("You can not enter this category with your current age!");
          return;
        }
        break;
      case "Masters 1 (36-50)":
        if (age < 36 || age > 50) {
          alert("You can not enter this category with your current age!");
          return;
        }
        break;
      case "Masters 2 (51-65)":
        if (age < 51 || age > 65) {
          alert("You can not enter this category with your current age!");
          return;
        }
        break;
      case "Masters 3 (65+)":
        if (age < 65) {
          alert("You can not enter this category with your current age!");
          return;
        }
        break;
      case "E-BIKE":
    }
  }

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    validateCatgeroy();

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

    setRaceNum("1");

    const singleReg = {
      user: person,
      category: category,
      raceNumber: raceNumber,
    };

    /*
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
          alert("There was an error processing your registration, please try again and iof this issue persists please contact muddy gumboots staff");
        }
      );
      */
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control
          required
          width="50"
          id="firstName"
          className="classTest"
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
        <FormGroup className="dateGender">
          <Form.Select onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
          <Form.Control type="date" onChange={(e) => setDob(e.target.value)} />
        </FormGroup>
        <Form.Control
          id="phoneNum"
          required
          className="input"
          type="tel"
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
          value={nextOfKinPhone}
          placeholder="Next of Kin Phone Number"
          onChange={(e) => setNOKPhone(e.target.value)}
        />
        <Form.Control
          as="textarea"
          required
          value={medicalConditions}
          placeholder="Medical Conditions"
          onChange={(e) => setMedCond(e.target.value)}
        />
        <Form.Select onChange={(e) => setCat(e.target.value)}>
          <option>Junior (U19)</option>
          <option>Open (19-35)</option>
          <option>Masters 1 (36-50)</option>
          <option>Masters 2 (51-65)</option>
          <option>Masters 3 (65+)</option>
          <option>E-BIKE</option>
        </Form.Select>
      </FormGroup>
      <line></line>
      <Button type="submit">Submit Registration</Button>
    </Form>
  );
};

export default RegistrationSingle;

import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import { PersonInput } from "../API";
import Form from "react-bootstrap/Form";
import { Accordion, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
  const [validAge, setValidAge] = useState(false);

  function validateCatgeroy() {
    setValidAge(false);
    const birthday = new Date(dob);
    const month_diff = Date.now() - birthday.getTime();
    const age_dt = new Date(month_diff);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    console.log(age);

    console.log(category);
    console.log(validAge);
    if (category === "Junior (U19)" && age > 19) {
      setValidAge(false);
    } else if (category === "Open (19-35)" && !(age < 19 && age > 35)) {
      setValidAge(false);
    } else if (category === "Masters 1 (36-50)" && !(age < 19 && age > 35)) {
      setValidAge(false);
    } else if (category === "Masters 2 (51-65)" && !(age < 51 && age > 65)) {
      setValidAge(false);
    } else if (category === "Masters 3 (65+)" && !(age > 65)) {
      setValidAge(false);
    } else {
      setValidAge(true);
    }
  }

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
      !(document.getElementById("phoneNum") as HTMLInputElement).checkValidity()
    ) {
      (
        document.getElementById("phoneNum") as HTMLInputElement
      ).reportValidity();
      return;
    }

    validateCatgeroy();

    if (!validAge) {
      alert("You can not enter this category with your current age!");

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
  }

  function removePerson(index: number) {
    const array = [...groupArray];
    if (index !== -1) {
      array.splice(index, 1);
      setGroupArray(array);
    }
  }

  async function handleSubmit() {
    const groupReg = {
      users: groupArray,
      category: category,
      raceNumber: "1",
    };

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
          alert(
            "There was an error processing your registration, please try again and iof this issue persists please contact muddy gumboots staff"
          );
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
          className=".mt-0"
          type="text"
          value={firstname}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Control
          required
          id="lastName"
          className=".mt-0"
          type="text"
          value={lastname}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Control
          required
          id="email"
          className=".mt-0"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Select onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
        <Form.Control type="date" onChange={(e) => setDob(e.target.value)} />
        <Form.Control
          id="phoneNum"
          required
          type="tel"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Form.Control
          required
          type="text"
          value={nextOfKinName}
          placeholder="Next of Kin Name"
          onChange={(e) => setNOKName(e.target.value)}
        />
        <Form.Control
          required
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
      <Accordion>
        {groupArray.map((singlePerson, index) => (
          <Accordion.Item eventKey={index as unknown as string} key={index}>
            <Button size="sm" onClick={() => removePerson(index)}>
              Remove Person
            </Button>
            <Accordion.Header> {singlePerson.name}</Accordion.Header>
            <Accordion.Body>Email: {singlePerson.email}</Accordion.Body>
            <Accordion.Body>Phone: {singlePerson.phoneNumber}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Button onClick={addPerson}>Add Person</Button>
      <Button type="submit">Submit Registration</Button>
    </Form>
  );
};

export default RegistrationGroup;

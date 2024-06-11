import { useState } from "react";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

const RegistrationSingle = () => {
  interface SignUpFormState {
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    dob: string;
    phoneNumber: string;
    medicalConditions: string;
    nextOfKinName: string;
    nextOfKinPhone: string;
    nextOfKinRelationship: string;
    category: string;
  }

  const [formData, setFormData] = useState<SignUpFormState>({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    medicalConditions: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    nextOfKinRelationship: "",
    category: "",
  });

  function createRegisterSingle() {}

  const genders = ["Male", "Female", "Prefer not to say"];

  return (
    <div>
      <div className="regFormDiv">
        <input
          required
          className=""
          type="text"
          value={formData.firstname}
          placeholder="First Name"
          onChange={(e) =>
            setFormData({
              firstname: e.target.value,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <input
          required
          className=""
          type="text"
          value={formData.lastname}
          placeholder="Last Name"
          onChange={(e) =>
            setFormData({
              firstname: e.target.value,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <input
          required
          className=""
          type="email"
          value={formData.email}
          placeholder="Email"
          onChange={(e) =>
            setFormData({
              firstname: e.target.value,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <Combobox className="comboBox" data={genders} />
        <DatePicker
          className="comboBox"
          defaultValue={new Date()}
          valueFormat={{ dateStyle: "medium" }}
          onChange={(e) =>
            setFormData({
              firstname: formData.lastname,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: e?.toLocaleDateString() as string,
              phoneNumber: formData.phoneNumber,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <input
          className="input"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={formData.phoneNumber}
          placeholder="Phone Number"
          onChange={(e) =>
            setFormData({
              firstname: formData.lastname,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: e.target.value,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <input
          className=""
          type="text"
          value={formData.nextOfKinName}
          placeholder="Next of Kin Name"
          onChange={(e) =>
            setFormData({
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: e.target.value,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <input
          className=""
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={formData.nextOfKinPhone}
          placeholder="Next of Kin Phone Number"
          onChange={(e) =>
            setFormData({
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: formData.medicalConditions,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: e.target.value,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <textarea
          value={formData.medicalConditions}
          placeholder="Medical Conditions"
          onChange={(e) =>
            setFormData({
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: e.target.value,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: formData.category,
            })
          }
        />
        <textarea
          value={formData.medicalConditions}
          placeholder="Category"
          onChange={(e) =>
            setFormData({
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: formData.email,
              gender: formData.gender,
              dob: formData.dob,
              phoneNumber: formData.phoneNumber,
              medicalConditions: e.target.value,
              nextOfKinName: formData.nextOfKinName,
              nextOfKinPhone: formData.nextOfKinPhone,
              nextOfKinRelationship: formData.nextOfKinRelationship,
              category: e.target.value,
            })
          }
        />
        <button onClick={createRegisterSingle}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationSingle;

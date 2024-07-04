/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPerson } from "../graphql/mutations";
const client = generateClient();
export default function PersonCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phoneNumber: "",
    medicalConditions: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [medicalConditions, setMedicalConditions] = React.useState(
    initialValues.medicalConditions
  );
  const [nextOfKinName, setNextOfKinName] = React.useState(
    initialValues.nextOfKinName
  );
  const [nextOfKinPhone, setNextOfKinPhone] = React.useState(
    initialValues.nextOfKinPhone
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDateOfBirth(initialValues.dateOfBirth);
    setGender(initialValues.gender);
    setEmail(initialValues.email);
    setPhoneNumber(initialValues.phoneNumber);
    setMedicalConditions(initialValues.medicalConditions);
    setNextOfKinName(initialValues.nextOfKinName);
    setNextOfKinPhone(initialValues.nextOfKinPhone);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    dateOfBirth: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    email: [{ type: "Required" }],
    phoneNumber: [{ type: "Required" }],
    medicalConditions: [{ type: "Required" }],
    nextOfKinName: [{ type: "Required" }],
    nextOfKinPhone: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          dateOfBirth,
          gender,
          email,
          phoneNumber,
          medicalConditions,
          nextOfKinName,
          nextOfKinPhone,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createPerson.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              dateOfBirth,
              gender,
              email,
              phoneNumber,
              medicalConditions,
              nextOfKinName,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={true}
        isReadOnly={false}
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth: value,
              gender,
              email,
              phoneNumber,
              medicalConditions,
              nextOfKinName,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={true}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth,
              gender: value,
              email,
              phoneNumber,
              medicalConditions,
              nextOfKinName,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth,
              gender,
              email: value,
              phoneNumber,
              medicalConditions,
              nextOfKinName,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth,
              gender,
              email,
              phoneNumber: value,
              medicalConditions,
              nextOfKinName,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Medical conditions"
        isRequired={true}
        isReadOnly={false}
        value={medicalConditions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth,
              gender,
              email,
              phoneNumber,
              medicalConditions: value,
              nextOfKinName,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.medicalConditions ?? value;
          }
          if (errors.medicalConditions?.hasError) {
            runValidationTasks("medicalConditions", value);
          }
          setMedicalConditions(value);
        }}
        onBlur={() =>
          runValidationTasks("medicalConditions", medicalConditions)
        }
        errorMessage={errors.medicalConditions?.errorMessage}
        hasError={errors.medicalConditions?.hasError}
        {...getOverrideProps(overrides, "medicalConditions")}
      ></TextField>
      <TextField
        label="Next of kin name"
        isRequired={true}
        isReadOnly={false}
        value={nextOfKinName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth,
              gender,
              email,
              phoneNumber,
              medicalConditions,
              nextOfKinName: value,
              nextOfKinPhone,
            };
            const result = onChange(modelFields);
            value = result?.nextOfKinName ?? value;
          }
          if (errors.nextOfKinName?.hasError) {
            runValidationTasks("nextOfKinName", value);
          }
          setNextOfKinName(value);
        }}
        onBlur={() => runValidationTasks("nextOfKinName", nextOfKinName)}
        errorMessage={errors.nextOfKinName?.errorMessage}
        hasError={errors.nextOfKinName?.hasError}
        {...getOverrideProps(overrides, "nextOfKinName")}
      ></TextField>
      <TextField
        label="Next of kin phone"
        isRequired={true}
        isReadOnly={false}
        value={nextOfKinPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dateOfBirth,
              gender,
              email,
              phoneNumber,
              medicalConditions,
              nextOfKinName,
              nextOfKinPhone: value,
            };
            const result = onChange(modelFields);
            value = result?.nextOfKinPhone ?? value;
          }
          if (errors.nextOfKinPhone?.hasError) {
            runValidationTasks("nextOfKinPhone", value);
          }
          setNextOfKinPhone(value);
        }}
        onBlur={() => runValidationTasks("nextOfKinPhone", nextOfKinPhone)}
        errorMessage={errors.nextOfKinPhone?.errorMessage}
        hasError={errors.nextOfKinPhone?.hasError}
        {...getOverrideProps(overrides, "nextOfKinPhone")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

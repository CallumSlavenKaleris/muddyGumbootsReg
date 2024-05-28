/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCompanyRegistration } from "../graphql/queries";
import { updateCompanyRegistration } from "../graphql/mutations";
const client = generateClient();
export default function CompanyRegistrationUpdateForm(props) {
  const {
    id: idProp,
    companyRegistration: companyRegistrationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    description: "",
    workClass: "",
    category: "",
    subCat: "",
  };
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [workClass, setWorkClass] = React.useState(initialValues.workClass);
  const [category, setCategory] = React.useState(initialValues.category);
  const [subCat, setSubCat] = React.useState(initialValues.subCat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyRegistrationRecord
      ? { ...initialValues, ...companyRegistrationRecord }
      : initialValues;
    setDescription(cleanValues.description);
    setWorkClass(cleanValues.workClass);
    setCategory(cleanValues.category);
    setSubCat(cleanValues.subCat);
    setErrors({});
  };
  const [companyRegistrationRecord, setCompanyRegistrationRecord] =
    React.useState(companyRegistrationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCompanyRegistration.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCompanyRegistration
        : companyRegistrationModelProp;
      setCompanyRegistrationRecord(record);
    };
    queryData();
  }, [idProp, companyRegistrationModelProp]);
  React.useEffect(resetStateValues, [companyRegistrationRecord]);
  const validations = {
    description: [{ type: "Required" }],
    workClass: [{ type: "Required" }],
    category: [{ type: "Required" }],
    subCat: [],
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
          description,
          workClass,
          category,
          subCat: subCat ?? null,
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
            query: updateCompanyRegistration.replaceAll("__typename", ""),
            variables: {
              input: {
                id: companyRegistrationRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CompanyRegistrationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description: value,
              workClass,
              category,
              subCat,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Work class"
        isRequired={true}
        isReadOnly={false}
        value={workClass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              workClass: value,
              category,
              subCat,
            };
            const result = onChange(modelFields);
            value = result?.workClass ?? value;
          }
          if (errors.workClass?.hasError) {
            runValidationTasks("workClass", value);
          }
          setWorkClass(value);
        }}
        onBlur={() => runValidationTasks("workClass", workClass)}
        errorMessage={errors.workClass?.errorMessage}
        hasError={errors.workClass?.hasError}
        {...getOverrideProps(overrides, "workClass")}
      ></TextField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              workClass,
              category: value,
              subCat,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      >
        <option
          children="Junior"
          value="JUNIOR"
          {...getOverrideProps(overrides, "categoryoption0")}
        ></option>
        <option
          children="Open"
          value="OPEN"
          {...getOverrideProps(overrides, "categoryoption1")}
        ></option>
        <option
          children="Mastersa"
          value="MASTERSA"
          {...getOverrideProps(overrides, "categoryoption2")}
        ></option>
        <option
          children="Mastersb"
          value="MASTERSB"
          {...getOverrideProps(overrides, "categoryoption3")}
        ></option>
        <option
          children="Veteran"
          value="VETERAN"
          {...getOverrideProps(overrides, "categoryoption4")}
        ></option>
        <option
          children="Ebike"
          value="EBIKE"
          {...getOverrideProps(overrides, "categoryoption5")}
        ></option>
        <option
          children="Teamjunior"
          value="TEAMJUNIOR"
          {...getOverrideProps(overrides, "categoryoption6")}
        ></option>
        <option
          children="Wteamjunior"
          value="WTEAMJUNIOR"
          {...getOverrideProps(overrides, "categoryoption7")}
        ></option>
        <option
          children="Teamopen"
          value="TEAMOPEN"
          {...getOverrideProps(overrides, "categoryoption8")}
        ></option>
        <option
          children="Wteamopen"
          value="WTEAMOPEN"
          {...getOverrideProps(overrides, "categoryoption9")}
        ></option>
        <option
          children="Teammasters"
          value="TEAMMASTERS"
          {...getOverrideProps(overrides, "categoryoption10")}
        ></option>
        <option
          children="Wteammasters"
          value="WTEAMMASTERS"
          {...getOverrideProps(overrides, "categoryoption11")}
        ></option>
        <option
          children="Mixedopencompetitive"
          value="MIXEDOPENCOMPETITIVE"
          {...getOverrideProps(overrides, "categoryoption12")}
        ></option>
        <option
          children="Mixedebike"
          value="MIXEDEBIKE"
          {...getOverrideProps(overrides, "categoryoption13")}
        ></option>
        <option
          children="Mixedcoporate"
          value="MIXEDCOPORATE"
          {...getOverrideProps(overrides, "categoryoption14")}
        ></option>
      </SelectField>
      <SelectField
        label="Sub cat"
        placeholder="Please select an option"
        isDisabled={false}
        value={subCat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              workClass,
              category,
              subCat: value,
            };
            const result = onChange(modelFields);
            value = result?.subCat ?? value;
          }
          if (errors.subCat?.hasError) {
            runValidationTasks("subCat", value);
          }
          setSubCat(value);
        }}
        onBlur={() => runValidationTasks("subCat", subCat)}
        errorMessage={errors.subCat?.errorMessage}
        hasError={errors.subCat?.hasError}
        {...getOverrideProps(overrides, "subCat")}
      >
        <option
          children="Engineers"
          value="ENGINEERS"
          {...getOverrideProps(overrides, "subCatoption0")}
        ></option>
        <option
          children="Civil"
          value="CIVIL"
          {...getOverrideProps(overrides, "subCatoption1")}
        ></option>
        <option
          children="Banking"
          value="BANKING"
          {...getOverrideProps(overrides, "subCatoption2")}
        ></option>
        <option
          children="Profserv"
          value="PROFSERV"
          {...getOverrideProps(overrides, "subCatoption3")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "subCatoption4")}
        ></option>
        <option
          children="Nondrone"
          value="NONDRONE"
          {...getOverrideProps(overrides, "subCatoption5")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || companyRegistrationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || companyRegistrationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

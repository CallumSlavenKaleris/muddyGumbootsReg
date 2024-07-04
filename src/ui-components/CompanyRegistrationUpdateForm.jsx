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
    workClass: "",
    category: "",
    subCat: "",
  };
  const [workClass, setWorkClass] = React.useState(initialValues.workClass);
  const [category, setCategory] = React.useState(initialValues.category);
  const [subCat, setSubCat] = React.useState(initialValues.subCat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyRegistrationRecord
      ? { ...initialValues, ...companyRegistrationRecord }
      : initialValues;
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
        label="Work class"
        isRequired={true}
        isReadOnly={false}
        value={workClass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
      <TextField
        label="Category"
        isRequired={true}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
      ></TextField>
      <TextField
        label="Sub cat"
        isRequired={false}
        isReadOnly={false}
        value={subCat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
      ></TextField>
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

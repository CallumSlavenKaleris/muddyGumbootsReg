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
import { getGroupRegistration } from "../graphql/queries";
import { updateGroupRegistration } from "../graphql/mutations";
const client = generateClient();
export default function GroupRegistrationUpdateForm(props) {
  const {
    id: idProp,
    groupRegistration: groupRegistrationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    category: "",
    raceNumber: "",
  };
  const [category, setCategory] = React.useState(initialValues.category);
  const [raceNumber, setRaceNumber] = React.useState(initialValues.raceNumber);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = groupRegistrationRecord
      ? { ...initialValues, ...groupRegistrationRecord }
      : initialValues;
    setCategory(cleanValues.category);
    setRaceNumber(cleanValues.raceNumber);
    setErrors({});
  };
  const [groupRegistrationRecord, setGroupRegistrationRecord] = React.useState(
    groupRegistrationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGroupRegistration.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGroupRegistration
        : groupRegistrationModelProp;
      setGroupRegistrationRecord(record);
    };
    queryData();
  }, [idProp, groupRegistrationModelProp]);
  React.useEffect(resetStateValues, [groupRegistrationRecord]);
  const validations = {
    category: [{ type: "Required" }],
    raceNumber: [{ type: "Required" }],
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
          category,
          raceNumber,
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
            query: updateGroupRegistration.replaceAll("__typename", ""),
            variables: {
              input: {
                id: groupRegistrationRecord.id,
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
      {...getOverrideProps(overrides, "GroupRegistrationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Category"
        isRequired={true}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category: value,
              raceNumber,
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
        label="Race number"
        isRequired={true}
        isReadOnly={false}
        value={raceNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              raceNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.raceNumber ?? value;
          }
          if (errors.raceNumber?.hasError) {
            runValidationTasks("raceNumber", value);
          }
          setRaceNumber(value);
        }}
        onBlur={() => runValidationTasks("raceNumber", raceNumber)}
        errorMessage={errors.raceNumber?.errorMessage}
        hasError={errors.raceNumber?.hasError}
        {...getOverrideProps(overrides, "raceNumber")}
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
          isDisabled={!(idProp || groupRegistrationModelProp)}
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
              !(idProp || groupRegistrationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

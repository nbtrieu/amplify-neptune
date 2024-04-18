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
import { createOrganization } from "../graphql/mutations";
const client = generateClient();
export default function OrganizationCreateForm(props) {
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
    uid: "",
    name: "",
    mailing_address: "",
  };
  const [uid, setUid] = React.useState(initialValues.uid);
  const [name, setName] = React.useState(initialValues.name);
  const [mailing_address, setMailing_address] = React.useState(
    initialValues.mailing_address
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUid(initialValues.uid);
    setName(initialValues.name);
    setMailing_address(initialValues.mailing_address);
    setErrors({});
  };
  const validations = {
    uid: [{ type: "Required" }],
    name: [],
    mailing_address: [],
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
          uid,
          name,
          mailing_address,
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
            query: createOrganization.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "OrganizationCreateForm")}
      {...rest}
    >
      <TextField
        label="Uid"
        isRequired={true}
        isReadOnly={false}
        value={uid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid: value,
              name,
              mailing_address,
            };
            const result = onChange(modelFields);
            value = result?.uid ?? value;
          }
          if (errors.uid?.hasError) {
            runValidationTasks("uid", value);
          }
          setUid(value);
        }}
        onBlur={() => runValidationTasks("uid", uid)}
        errorMessage={errors.uid?.errorMessage}
        hasError={errors.uid?.hasError}
        {...getOverrideProps(overrides, "uid")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name: value,
              mailing_address,
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
        label="Mailing address"
        isRequired={false}
        isReadOnly={false}
        value={mailing_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              mailing_address: value,
            };
            const result = onChange(modelFields);
            value = result?.mailing_address ?? value;
          }
          if (errors.mailing_address?.hasError) {
            runValidationTasks("mailing_address", value);
          }
          setMailing_address(value);
        }}
        onBlur={() => runValidationTasks("mailing_address", mailing_address)}
        errorMessage={errors.mailing_address?.errorMessage}
        hasError={errors.mailing_address?.hasError}
        {...getOverrideProps(overrides, "mailing_address")}
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

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
import { getPerson } from "../graphql/queries";
import { updatePerson } from "../graphql/mutations";
const client = generateClient();
export default function PersonUpdateForm(props) {
  const {
    id: idProp,
    person: personModelProp,
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
    email: "",
    phone: "",
    title: "",
    mailing_address: "",
    interest_areas: "",
    lead_source: "",
    event_name: "",
  };
  const [uid, setUid] = React.useState(initialValues.uid);
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [title, setTitle] = React.useState(initialValues.title);
  const [mailing_address, setMailing_address] = React.useState(
    initialValues.mailing_address
  );
  const [interest_areas, setInterest_areas] = React.useState(
    initialValues.interest_areas
  );
  const [lead_source, setLead_source] = React.useState(
    initialValues.lead_source
  );
  const [event_name, setEvent_name] = React.useState(initialValues.event_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personRecord
      ? { ...initialValues, ...personRecord }
      : initialValues;
    setUid(cleanValues.uid);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setTitle(cleanValues.title);
    setMailing_address(cleanValues.mailing_address);
    setInterest_areas(cleanValues.interest_areas);
    setLead_source(cleanValues.lead_source);
    setEvent_name(cleanValues.event_name);
    setErrors({});
  };
  const [personRecord, setPersonRecord] = React.useState(personModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPerson.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPerson
        : personModelProp;
      setPersonRecord(record);
    };
    queryData();
  }, [idProp, personModelProp]);
  React.useEffect(resetStateValues, [personRecord]);
  const validations = {
    uid: [{ type: "Required" }],
    name: [],
    email: [],
    phone: [],
    title: [],
    mailing_address: [],
    interest_areas: [],
    lead_source: [],
    event_name: [],
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
          name: name ?? null,
          email: email ?? null,
          phone: phone ?? null,
          title: title ?? null,
          mailing_address: mailing_address ?? null,
          interest_areas: interest_areas ?? null,
          lead_source: lead_source ?? null,
          event_name: event_name ?? null,
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
            query: updatePerson.replaceAll("__typename", ""),
            variables: {
              input: {
                id: personRecord.id,
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
      {...getOverrideProps(overrides, "PersonUpdateForm")}
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
              email,
              phone,
              title,
              mailing_address,
              interest_areas,
              lead_source,
              event_name,
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
              email,
              phone,
              title,
              mailing_address,
              interest_areas,
              lead_source,
              event_name,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              email: value,
              phone,
              title,
              mailing_address,
              interest_areas,
              lead_source,
              event_name,
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
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              email,
              phone: value,
              title,
              mailing_address,
              interest_areas,
              lead_source,
              event_name,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              email,
              phone,
              title: value,
              mailing_address,
              interest_areas,
              lead_source,
              event_name,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
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
              email,
              phone,
              title,
              mailing_address: value,
              interest_areas,
              lead_source,
              event_name,
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
      <TextField
        label="Interest areas"
        isRequired={false}
        isReadOnly={false}
        value={interest_areas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              email,
              phone,
              title,
              mailing_address,
              interest_areas: value,
              lead_source,
              event_name,
            };
            const result = onChange(modelFields);
            value = result?.interest_areas ?? value;
          }
          if (errors.interest_areas?.hasError) {
            runValidationTasks("interest_areas", value);
          }
          setInterest_areas(value);
        }}
        onBlur={() => runValidationTasks("interest_areas", interest_areas)}
        errorMessage={errors.interest_areas?.errorMessage}
        hasError={errors.interest_areas?.hasError}
        {...getOverrideProps(overrides, "interest_areas")}
      ></TextField>
      <TextField
        label="Lead source"
        isRequired={false}
        isReadOnly={false}
        value={lead_source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              email,
              phone,
              title,
              mailing_address,
              interest_areas,
              lead_source: value,
              event_name,
            };
            const result = onChange(modelFields);
            value = result?.lead_source ?? value;
          }
          if (errors.lead_source?.hasError) {
            runValidationTasks("lead_source", value);
          }
          setLead_source(value);
        }}
        onBlur={() => runValidationTasks("lead_source", lead_source)}
        errorMessage={errors.lead_source?.errorMessage}
        hasError={errors.lead_source?.hasError}
        {...getOverrideProps(overrides, "lead_source")}
      ></TextField>
      <TextField
        label="Event name"
        isRequired={false}
        isReadOnly={false}
        value={event_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uid,
              name,
              email,
              phone,
              title,
              mailing_address,
              interest_areas,
              lead_source,
              event_name: value,
            };
            const result = onChange(modelFields);
            value = result?.event_name ?? value;
          }
          if (errors.event_name?.hasError) {
            runValidationTasks("event_name", value);
          }
          setEvent_name(value);
        }}
        onBlur={() => runValidationTasks("event_name", event_name)}
        errorMessage={errors.event_name?.errorMessage}
        hasError={errors.event_name?.hasError}
        {...getOverrideProps(overrides, "event_name")}
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
          isDisabled={!(idProp || personModelProp)}
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
              !(idProp || personModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

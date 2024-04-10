/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { School } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function SchoolCreateForm(props) {
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
    type: "",
    stage: "",
    medium: [],
    approved: false,
    address: "",
    address1: "",
    address2: "",
    zone: "",
    city: "",
    state: "",
    postal_code: "",
    primaryContact: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [stage, setStage] = React.useState(initialValues.stage);
  const [medium, setMedium] = React.useState(initialValues.medium);
  const [approved, setApproved] = React.useState(initialValues.approved);
  const [address, setAddress] = React.useState(initialValues.address);
  const [address1, setAddress1] = React.useState(initialValues.address1);
  const [address2, setAddress2] = React.useState(initialValues.address2);
  const [zone, setZone] = React.useState(initialValues.zone);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [postal_code, setPostal_code] = React.useState(
    initialValues.postal_code
  );
  const [primaryContact, setPrimaryContact] = React.useState(
    initialValues.primaryContact
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setType(initialValues.type);
    setStage(initialValues.stage);
    setMedium(initialValues.medium);
    setCurrentMediumValue("");
    setApproved(initialValues.approved);
    setAddress(initialValues.address);
    setAddress1(initialValues.address1);
    setAddress2(initialValues.address2);
    setZone(initialValues.zone);
    setCity(initialValues.city);
    setState(initialValues.state);
    setPostal_code(initialValues.postal_code);
    setPrimaryContact(initialValues.primaryContact);
    setErrors({});
  };
  const [currentMediumValue, setCurrentMediumValue] = React.useState("");
  const mediumRef = React.createRef();
  const getDisplayValue = {
    medium: (r) => {
      const enumDisplayValueMap = {
        ENGLISH: "English",
        HINDI: "Hindi",
        MARATHI: "Marathi",
        KANNADA: "Kannada",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    name: [{ type: "Required" }],
    type: [],
    stage: [],
    medium: [],
    approved: [],
    address: [{ type: "JSON" }],
    address1: [],
    address2: [],
    zone: [],
    city: [],
    state: [],
    postal_code: [],
    primaryContact: [{ type: "JSON" }],
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
          type,
          stage,
          medium,
          approved,
          address,
          address1,
          address2,
          zone,
          city,
          state,
          postal_code,
          primaryContact,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new School(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SchoolCreateForm")}
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
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
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
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Public"
          value="PUBLIC"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Stage"
        placeholder="Please select an option"
        isDisabled={false}
        value={stage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage: value,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.stage ?? value;
          }
          if (errors.stage?.hasError) {
            runValidationTasks("stage", value);
          }
          setStage(value);
        }}
        onBlur={() => runValidationTasks("stage", stage)}
        errorMessage={errors.stage?.errorMessage}
        hasError={errors.stage?.hasError}
        {...getOverrideProps(overrides, "stage")}
      >
        <option
          children="Primary"
          value="PRIMARY"
          {...getOverrideProps(overrides, "stageoption0")}
        ></option>
        <option
          children="Secondary"
          value="SECONDARY"
          {...getOverrideProps(overrides, "stageoption1")}
        ></option>
        <option
          children="Senior secondary"
          value="SENIOR_SECONDARY"
          {...getOverrideProps(overrides, "stageoption2")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium: values,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            values = result?.medium ?? values;
          }
          setMedium(values);
          setCurrentMediumValue("");
        }}
        currentFieldValue={currentMediumValue}
        label={"Medium"}
        items={medium}
        hasError={errors?.medium?.hasError}
        errorMessage={errors?.medium?.errorMessage}
        getBadgeText={getDisplayValue.medium}
        setFieldValue={setCurrentMediumValue}
        inputFieldRef={mediumRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Medium"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentMediumValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.medium?.hasError) {
              runValidationTasks("medium", value);
            }
            setCurrentMediumValue(value);
          }}
          onBlur={() => runValidationTasks("medium", currentMediumValue)}
          errorMessage={errors.medium?.errorMessage}
          hasError={errors.medium?.hasError}
          ref={mediumRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "medium")}
        >
          <option
            children="English"
            value="ENGLISH"
            {...getOverrideProps(overrides, "mediumoption0")}
          ></option>
          <option
            children="Hindi"
            value="HINDI"
            {...getOverrideProps(overrides, "mediumoption1")}
          ></option>
          <option
            children="Marathi"
            value="MARATHI"
            {...getOverrideProps(overrides, "mediumoption2")}
          ></option>
          <option
            children="Kannada"
            value="KANNADA"
            {...getOverrideProps(overrides, "mediumoption3")}
          ></option>
        </SelectField>
      </ArrayField>
      <SwitchField
        label="Approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={approved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved: value,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.approved ?? value;
          }
          if (errors.approved?.hasError) {
            runValidationTasks("approved", value);
          }
          setApproved(value);
        }}
        onBlur={() => runValidationTasks("approved", approved)}
        errorMessage={errors.approved?.errorMessage}
        hasError={errors.approved?.hasError}
        {...getOverrideProps(overrides, "approved")}
      ></SwitchField>
      <TextAreaField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address: value,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextAreaField>
      <TextField
        label="Address1"
        isRequired={false}
        isReadOnly={false}
        value={address1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1: value,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.address1 ?? value;
          }
          if (errors.address1?.hasError) {
            runValidationTasks("address1", value);
          }
          setAddress1(value);
        }}
        onBlur={() => runValidationTasks("address1", address1)}
        errorMessage={errors.address1?.errorMessage}
        hasError={errors.address1?.hasError}
        {...getOverrideProps(overrides, "address1")}
      ></TextField>
      <TextField
        label="Address2"
        isRequired={false}
        isReadOnly={false}
        value={address2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2: value,
              zone,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.address2 ?? value;
          }
          if (errors.address2?.hasError) {
            runValidationTasks("address2", value);
          }
          setAddress2(value);
        }}
        onBlur={() => runValidationTasks("address2", address2)}
        errorMessage={errors.address2?.errorMessage}
        hasError={errors.address2?.hasError}
        {...getOverrideProps(overrides, "address2")}
      ></TextField>
      <TextField
        label="Zone"
        isRequired={false}
        isReadOnly={false}
        value={zone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone: value,
              city,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.zone ?? value;
          }
          if (errors.zone?.hasError) {
            runValidationTasks("zone", value);
          }
          setZone(value);
        }}
        onBlur={() => runValidationTasks("zone", zone)}
        errorMessage={errors.zone?.errorMessage}
        hasError={errors.zone?.hasError}
        {...getOverrideProps(overrides, "zone")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city: value,
              state,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state: value,
              postal_code,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postal_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code: value,
              primaryContact,
            };
            const result = onChange(modelFields);
            value = result?.postal_code ?? value;
          }
          if (errors.postal_code?.hasError) {
            runValidationTasks("postal_code", value);
          }
          setPostal_code(value);
        }}
        onBlur={() => runValidationTasks("postal_code", postal_code)}
        errorMessage={errors.postal_code?.errorMessage}
        hasError={errors.postal_code?.hasError}
        {...getOverrideProps(overrides, "postal_code")}
      ></TextField>
      <TextAreaField
        label="Primary contact"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              stage,
              medium,
              approved,
              address,
              address1,
              address2,
              zone,
              city,
              state,
              postal_code,
              primaryContact: value,
            };
            const result = onChange(modelFields);
            value = result?.primaryContact ?? value;
          }
          if (errors.primaryContact?.hasError) {
            runValidationTasks("primaryContact", value);
          }
          setPrimaryContact(value);
        }}
        onBlur={() => runValidationTasks("primaryContact", primaryContact)}
        errorMessage={errors.primaryContact?.errorMessage}
        hasError={errors.primaryContact?.hasError}
        {...getOverrideProps(overrides, "primaryContact")}
      ></TextAreaField>
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

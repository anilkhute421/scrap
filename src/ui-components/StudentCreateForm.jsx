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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Student } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StudentCreateForm(props) {
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
    firstName: "",
    lastName: "",
    grade: "",
    hasGroup: false,
    deleted: false,
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [grade, setGrade] = React.useState(initialValues.grade);
  const [hasGroup, setHasGroup] = React.useState(initialValues.hasGroup);
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setGrade(initialValues.grade);
    setHasGroup(initialValues.hasGroup);
    setDeleted(initialValues.deleted);
    setErrors({});
  };
  const validations = {
    firstName: [],
    lastName: [],
    grade: [],
    hasGroup: [],
    deleted: [],
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
          firstName,
          lastName,
          grade,
          hasGroup,
          deleted,
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
          await DataStore.save(new Student(modelFields));
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
      {...getOverrideProps(overrides, "StudentCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              grade,
              hasGroup,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              grade,
              hasGroup,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SelectField
        label="Grade"
        placeholder="Please select an option"
        isDisabled={false}
        value={grade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              grade: value,
              hasGroup,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.grade ?? value;
          }
          if (errors.grade?.hasError) {
            runValidationTasks("grade", value);
          }
          setGrade(value);
        }}
        onBlur={() => runValidationTasks("grade", grade)}
        errorMessage={errors.grade?.errorMessage}
        hasError={errors.grade?.hasError}
        {...getOverrideProps(overrides, "grade")}
      >
        <option
          children="I"
          value="I"
          {...getOverrideProps(overrides, "gradeoption0")}
        ></option>
        <option
          children="Ii"
          value="II"
          {...getOverrideProps(overrides, "gradeoption1")}
        ></option>
        <option
          children="Iii"
          value="III"
          {...getOverrideProps(overrides, "gradeoption2")}
        ></option>
        <option
          children="Iv"
          value="IV"
          {...getOverrideProps(overrides, "gradeoption3")}
        ></option>
        <option
          children="V"
          value="V"
          {...getOverrideProps(overrides, "gradeoption4")}
        ></option>
        <option
          children="Vi"
          value="VI"
          {...getOverrideProps(overrides, "gradeoption5")}
        ></option>
        <option
          children="Vii"
          value="VII"
          {...getOverrideProps(overrides, "gradeoption6")}
        ></option>
        <option
          children="Viii"
          value="VIII"
          {...getOverrideProps(overrides, "gradeoption7")}
        ></option>
        <option
          children="Ix"
          value="IX"
          {...getOverrideProps(overrides, "gradeoption8")}
        ></option>
        <option
          children="X"
          value="X"
          {...getOverrideProps(overrides, "gradeoption9")}
        ></option>
        <option
          children="Xi"
          value="XI"
          {...getOverrideProps(overrides, "gradeoption10")}
        ></option>
        <option
          children="Xii"
          value="XII"
          {...getOverrideProps(overrides, "gradeoption11")}
        ></option>
      </SelectField>
      <SwitchField
        label="Has group"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasGroup}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              grade,
              hasGroup: value,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.hasGroup ?? value;
          }
          if (errors.hasGroup?.hasError) {
            runValidationTasks("hasGroup", value);
          }
          setHasGroup(value);
        }}
        onBlur={() => runValidationTasks("hasGroup", hasGroup)}
        errorMessage={errors.hasGroup?.errorMessage}
        hasError={errors.hasGroup?.hasError}
        {...getOverrideProps(overrides, "hasGroup")}
      ></SwitchField>
      <SwitchField
        label="Deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={deleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              grade,
              hasGroup,
              deleted: value,
            };
            const result = onChange(modelFields);
            value = result?.deleted ?? value;
          }
          if (errors.deleted?.hasError) {
            runValidationTasks("deleted", value);
          }
          setDeleted(value);
        }}
        onBlur={() => runValidationTasks("deleted", deleted)}
        errorMessage={errors.deleted?.errorMessage}
        hasError={errors.deleted?.hasError}
        {...getOverrideProps(overrides, "deleted")}
      ></SwitchField>
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

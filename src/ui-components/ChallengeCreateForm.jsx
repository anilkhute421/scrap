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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Challenge } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChallengeCreateForm(props) {
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
    description: "",
    research: "",
    design: "",
    build: "",
    report: "",
    point: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [research, setResearch] = React.useState(initialValues.research);
  const [design, setDesign] = React.useState(initialValues.design);
  const [build, setBuild] = React.useState(initialValues.build);
  const [report, setReport] = React.useState(initialValues.report);
  const [point, setPoint] = React.useState(initialValues.point);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setResearch(initialValues.research);
    setDesign(initialValues.design);
    setBuild(initialValues.build);
    setReport(initialValues.report);
    setPoint(initialValues.point);
    setErrors({});
  };
  const validations = {
    name: [{ type: "JSON" }],
    description: [{ type: "JSON" }],
    research: [{ type: "JSON" }],
    design: [{ type: "JSON" }],
    build: [{ type: "JSON" }],
    report: [{ type: "JSON" }],
    point: [],
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
          description,
          research,
          design,
          build,
          report,
          point,
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
          await DataStore.save(new Challenge(modelFields));
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
      {...getOverrideProps(overrides, "ChallengeCreateForm")}
      {...rest}
    >
      <TextAreaField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              research,
              design,
              build,
              report,
              point,
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
      ></TextAreaField>
      <TextAreaField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              research,
              design,
              build,
              report,
              point,
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
      ></TextAreaField>
      <TextAreaField
        label="Research"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              research: value,
              design,
              build,
              report,
              point,
            };
            const result = onChange(modelFields);
            value = result?.research ?? value;
          }
          if (errors.research?.hasError) {
            runValidationTasks("research", value);
          }
          setResearch(value);
        }}
        onBlur={() => runValidationTasks("research", research)}
        errorMessage={errors.research?.errorMessage}
        hasError={errors.research?.hasError}
        {...getOverrideProps(overrides, "research")}
      ></TextAreaField>
      <TextAreaField
        label="Design"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              research,
              design: value,
              build,
              report,
              point,
            };
            const result = onChange(modelFields);
            value = result?.design ?? value;
          }
          if (errors.design?.hasError) {
            runValidationTasks("design", value);
          }
          setDesign(value);
        }}
        onBlur={() => runValidationTasks("design", design)}
        errorMessage={errors.design?.errorMessage}
        hasError={errors.design?.hasError}
        {...getOverrideProps(overrides, "design")}
      ></TextAreaField>
      <TextAreaField
        label="Build"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              research,
              design,
              build: value,
              report,
              point,
            };
            const result = onChange(modelFields);
            value = result?.build ?? value;
          }
          if (errors.build?.hasError) {
            runValidationTasks("build", value);
          }
          setBuild(value);
        }}
        onBlur={() => runValidationTasks("build", build)}
        errorMessage={errors.build?.errorMessage}
        hasError={errors.build?.hasError}
        {...getOverrideProps(overrides, "build")}
      ></TextAreaField>
      <TextAreaField
        label="Report"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              research,
              design,
              build,
              report: value,
              point,
            };
            const result = onChange(modelFields);
            value = result?.report ?? value;
          }
          if (errors.report?.hasError) {
            runValidationTasks("report", value);
          }
          setReport(value);
        }}
        onBlur={() => runValidationTasks("report", report)}
        errorMessage={errors.report?.errorMessage}
        hasError={errors.report?.hasError}
        {...getOverrideProps(overrides, "report")}
      ></TextAreaField>
      <TextField
        label="Point"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={point}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              research,
              design,
              build,
              report,
              point: value,
            };
            const result = onChange(modelFields);
            value = result?.point ?? value;
          }
          if (errors.point?.hasError) {
            runValidationTasks("point", value);
          }
          setPoint(value);
        }}
        onBlur={() => runValidationTasks("point", point)}
        errorMessage={errors.point?.errorMessage}
        hasError={errors.point?.hasError}
        {...getOverrideProps(overrides, "point")}
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

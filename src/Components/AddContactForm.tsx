import { Form, FormikProps } from "formik";
import TextInput from "./TextInput/TextInput";
import { InitialValues } from "../interfaces/interfaces";
import React from "react";
import { Grid } from "@material-ui/core";
import RadioGroupInput from "./RadioGroupInput/RadioGroupInput";
import Checkboxes from "./Checkboxes/Checkboxes";
import SelectInput from "./SelectInput/SelectInput";
import DoubleSliderWithInputs from "./DoubleSliderWithInputs/DoubleSliderWithInputs";

const AddContactForm: React.FC<FormikProps<InitialValues>> = ({
  getFieldProps,
  getFieldMeta,
}: FormikProps<InitialValues>) => {
  const inputNames = {
    firstName: "firstName",
    email: "email",
    phoneNumber: "phoneNumber",
    birthDay: "birthDay",
    address: "address",
    country: "country",
    zip: "zip",
    workType: "workType",
    position: {
      developer: {},
      manager: {},
    },
    workHours: "workHours",
    subscription: "subscription",
  };
  return (
    <Form>
      <Grid
        container
        direction="column"
        sm={4}
        spacing={2}
        justify="space-between"
        alignContent="center"
      >
        <TextInput
          label="First Name"
          name={inputNames.firstName}
          placeholder="Jane"
          field={getFieldProps(inputNames.firstName)}
          meta={getFieldMeta(inputNames.firstName)}
        />
        <RadioGroupInput
          label="Work Type"
          name="workType"
          options={["Office", "Remote", "Freelance"]}
          field={getFieldProps(inputNames.workType)}
          meta={getFieldMeta(inputNames.workType)}
        />

        <Checkboxes
          label="Checkboxes"
          name="checked"
          options={["Office", "Remote", "Freelance"]}
          field={getFieldProps("checked")}
          meta={getFieldMeta("checked")}
        />
        <SelectInput
          name="Select"
          label="Select"
          options={["1", "2"]}
          field={getFieldProps("Select")}
          meta={getFieldMeta("Select")}
        />
        <DoubleSliderWithInputs
          name="doubleSlider"
          label="doubleSlider"
          options={{ min: 10, max: 120 }}
          field={getFieldProps("doubleSlider")}
          meta={getFieldMeta("doubleSlider")}
        />
        <button type="submit">Submit</button>
      </Grid>
    </Form>
  );
};

export default AddContactForm;

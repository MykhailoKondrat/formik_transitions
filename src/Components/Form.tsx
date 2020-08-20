import { Form, FormikProps } from "formik";
import TextInput from "./TextInput/TextInput";
import Select from "./Select/Select";
import { InitialValues } from "../interfaces/interfaces";
import React from "react";
import { Grid } from "@material-ui/core";

const MyForm: React.FC<FormikProps<InitialValues>> = ({
  isValid,
  dirty,
  errors,
  touched,
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
    subscribtion: "subscribtion",
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

        {!errors.firstName && touched.firstName && (
          <Select name="mySelect" label="My Select">
            <option value="">select</option>
            <option value="test11">11</option>
            <option value="test12">12</option>
          </Select>
        )}
        <button
          type="submit"
          disabled={!(isValid && dirty && touched.mySelect)}
        >
          Submit
        </button>
      </Grid>
    </Form>
  );
};

export default MyForm;

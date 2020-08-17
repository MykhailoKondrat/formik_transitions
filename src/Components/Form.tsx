import { Form, FormikProps } from "formik";
import MyTextInput from "./MyTextInput";
import { InitialValues } from "../interfaces/interfaces";
import MySelectInput from "./MySelect";
import React from "react";

const MyForm: React.FC<FormikProps<InitialValues>> = ({
  isValid,
  dirty,
  errors,
  touched,
}: FormikProps<InitialValues>) => {
  return (
    <Form>
      <MyTextInput label="First Name" name="firstName" placeholder="Jane" />
      {!errors.firstName && touched.firstName && (
        <MySelectInput name="mySelect" label="My Select">
          <option value="">select</option>
          <option value="test11">11</option>
          <option value="test12">12</option>
        </MySelectInput>
      )}
      <button type="submit" disabled={!(isValid && dirty && touched.mySelect)}>
        Submit
      </button>
    </Form>
  );
};

export default MyForm;

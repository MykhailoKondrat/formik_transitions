import { InitialValues } from "../../interfaces/interfaces";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import MyForm from "../../Components/Form";
import React from "react";
import { Grid } from "@material-ui/core";

const AddContactForm: React.FC = () => {
  const initialValues: InitialValues = {
    firstName: "",
    mySelect: "",
  };
  return (
    <Grid container={true} direction="column">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(5, "Must be 5 characters or more")
            .required("Required"),
          mySelect: Yup.string().required("Required"),
        })}
        onSubmit={(values: FormikValues) => {
          alert(JSON.stringify(values, null, 2));
        }}
        component={MyForm}
      />
    </Grid>
  );
};

export default AddContactForm;

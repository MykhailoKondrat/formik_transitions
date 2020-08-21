import { InitialValues } from "../../interfaces/interfaces";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import React from "react";
import { Grid } from "@material-ui/core";
import AddContactForm from "../../Components/AddContactForm";

const AddContact: React.FC = () => {
  const initialValues: InitialValues = {
    firstName: "",
    workType: "",
    checked: [],
  };
  return (
    <Grid container={true} direction="column">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(5, "Must be 5 characters or more")
            .required("Required"),
          workType: Yup.string().required("Required"),
          checked: Yup.array().required("asd"),
        })}
        onSubmit={(values: FormikValues) => {
          alert(JSON.stringify(values, null, 2));
        }}
        component={AddContactForm}
      />
    </Grid>
  );
};

export default AddContact;

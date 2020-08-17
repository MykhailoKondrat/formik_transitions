import React from "react";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import MyForm from "./Components/Form";
import { InitialValues } from "./interfaces/interfaces";

const SignUpForm = () => {
  const initialValues: InitialValues = {
    firstName: "",
    mySelect: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(5, "Must be 5 characters or more")
          .required("Required"),
      })}
      onSubmit={(values: FormikValues) => {
        alert(JSON.stringify(values, null, 2));
      }}
      component={MyForm}
    />

    // <form onSubmit={formik.handleSubmit}>
    //   <label htmlFor="firstName">Name</label>
    //   <input
    //     id="firstName"
    //     type="text"
    //     {...formik.getFieldProps("firstName")}
    //   />
    //   {formik.errors.firstName && formik.touched.firstName ? (
    //     <div>{formik.errors.firstName}</div>
    //   ) : null}
    //   <label htmlFor="lastName">Last Name</label>
    //   <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
    //   {formik.errors.lastName && formik.touched.lastName ? (
    //     <div>{formik.errors.lastName}</div>
    //   ) : null}
    //   <label htmlFor="email">Email Address</label>
    //   <input id="email" type="email" {...formik.getFieldProps("email")} />
    //   {formik.errors.email && formik.touched.email ? (
    //     <div>{formik.errors.email}</div>
    //   ) : null}
    //   <button type="submit">Submit</button>
    // </form>
  );
};

const App: React.FC = () => {
  return <SignUpForm />;
};

export default App;

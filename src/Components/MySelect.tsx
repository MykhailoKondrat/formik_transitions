import { useField } from "formik";
import React from "react";
import { MySelect } from "../interfaces/interfaces";

const MySelectInput: React.FC<MySelect> = ({ label, ...props }: MySelect) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
export default MySelectInput;

import { useField } from "formik";
import React from "react";
import { MyInput } from "../interfaces/interfaces";
const MyTextInput: React.FC<MyInput> = ({ label, ...props }: MyInput) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default MyTextInput;

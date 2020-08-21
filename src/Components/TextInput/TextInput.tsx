import React from "react";
import TextField from "@material-ui/core/TextField";
import { MyInput } from "../../interfaces/interfaces";

const TextInput: React.FC<MyInput> = React.memo(
  ({ label, field, meta, ...props }: MyInput) => {
    return (
      <>
        <TextField
          label={label}
          type="text"
          {...field}
          {...props}
          error={meta?.touched && meta?.error ? true : undefined}
          helperText={meta?.touched ? meta?.error : undefined}
        />
      </>
    );
  }
);

export default TextInput;

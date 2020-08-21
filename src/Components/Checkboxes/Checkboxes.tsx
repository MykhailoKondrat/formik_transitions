import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import React from "react";
import { ICheckboxes } from "../../interfaces/interfaces";
import { CheckBox } from "@material-ui/icons";

const Checkboxes: React.FC<ICheckboxes> = ({
  label,
  name,
  options,
  field,
  meta,
  ...props
}: ICheckboxes & { children?: React.ReactNode }) => {
  console.log(field?.value);
  return (
    // <FormControl error={meta?.touched && meta.error ? true : undefined}>
    //   <FormLabel component="legend">{label}</FormLabel>
    //   <div role="group">
    //     {options.map((checkbox) => {
    //       return (
    //         <FormControlLabel
    //           key={checkbox}
    //           control={<CheckBox name={name} color="primary" />}
    //           value={checkbox}
    //           label={checkbox}
    //           {...field}
    //         />
    //       );
    //     })}
    //   </div>
    //
    //   <FormHelperText>{meta?.touched ? meta?.error : undefined}</FormHelperText>
    // </FormControl>
    <>
      <label htmlFor="123" {...field}>
        Test
        <input id={"123"} type="checkbox" name={name} value="1" />
      </label>
      <label htmlFor="asad" {...field}>
        Test
        <input id={"asad"} type="checkbox" name={name} value="2" />
      </label>
    </>
  );
};

export default Checkboxes;
export {};

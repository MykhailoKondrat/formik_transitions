import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Checkbox,
} from "@material-ui/core";
import { ICheckboxes } from "../../interfaces/interfaces";

const Checkboxes: React.FC<ICheckboxes> = ({
  label,
  name,
  options,
  field,
  meta,
}: ICheckboxes & { children?: React.ReactNode }) => {
  return (
    <FormControl error={meta?.touched && meta.error ? true : undefined}>
      <FormLabel component="legend">{label}</FormLabel>
      <div role="group">
        {options.map((checkbox) => {
          return (
            <FormControlLabel
              key={checkbox}
              control={
                <Checkbox name={name} color="primary" value={checkbox} />
              }
              label={checkbox}
              {...field}
            />
          );
        })}
      </div>
      <FormHelperText>{meta?.touched ? meta?.error : undefined}</FormHelperText>
    </FormControl>
  );
};

export default Checkboxes;
export {};

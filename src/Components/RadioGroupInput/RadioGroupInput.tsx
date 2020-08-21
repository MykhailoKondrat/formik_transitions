import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import React from "react";
import { IRadioGroupInput } from "../../interfaces/interfaces";
const RadioGroupInput: React.FC<IRadioGroupInput> = ({
  label,
  name,
  options,
  field,
  meta,
  ...props
}: IRadioGroupInput & { children?: React.ReactNode }) => {
  return (
    <FormControl error={meta?.touched && meta.error ? true : undefined}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup name={name} {...field}>
        {options.map((radioItem) => {
          return (
            <FormControlLabel
              key={radioItem}
              value={radioItem}
              control={<Radio />}
              label={radioItem}
            />
          );
        })}
      </RadioGroup>
      <FormHelperText>{meta?.touched ? meta?.error : undefined}</FormHelperText>
    </FormControl>
  );
};

export default RadioGroupInput;
export {};

import React from "react";
import { MySelect } from "../../interfaces/interfaces";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
const SelectInput: React.FC<MySelect> = ({
  label,
  name,
  options,
  field,
  meta,
}: MySelect) => {
  return (
    <>
      <FormControl error={meta?.touched && meta.error ? true : undefined}>
        <FormLabel component="legend">{label}</FormLabel>
        <Select name={name} {...field}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          {meta?.touched ? meta?.error : undefined}
        </FormHelperText>
      </FormControl>
    </>
  );
};
export default SelectInput;

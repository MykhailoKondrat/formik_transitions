import React from "react";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Slider,
} from "@material-ui/core";
import { DoubleSlider } from "../../interfaces/interfaces";
import { useFormikContext } from "formik";

const DoubleSliderWithInputs: React.FC<DoubleSlider> = ({
  label,
  name,
  options,
  field,
  meta,
}: DoubleSlider) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FormControl error={meta?.touched && meta.error ? true : undefined}>
      <FormLabel component="legend">{label}</FormLabel>
      <Slider
        name={name}
        value={field?.value}
        min={options.min}
        max={options.max}
        valueLabelDisplay="auto"
        onChange={(event, value: number | number[]) =>
          setFieldValue(name, value)
        }
      />

      <FormHelperText>{meta?.touched ? meta?.error : undefined}</FormHelperText>
    </FormControl>
  );
};

export default DoubleSliderWithInputs;

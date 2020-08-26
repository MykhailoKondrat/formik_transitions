import { FieldInputProps, FieldMetaProps } from "formik";
import React from "react";

interface InputMeta {
  field?: FieldInputProps<string | undefined>;
  meta?: FieldMetaProps<string | undefined>;
}
interface SliderMeta {
  field?: FieldInputProps<number | number[] | undefined>;
  meta?: FieldMetaProps<string | undefined>;
}

export interface TwoOrMoreArray<T> extends Array<T> {
  0: T;
  1: T;
}

export interface MinimumRequiredInputProps {
  name: string;
  label: string;
}
export interface MyInput extends InputMeta, MinimumRequiredInputProps {
  id?: string;
  placeholder: string;
}
export interface IRadioGroupInput extends InputMeta, MinimumRequiredInputProps {
  options: TwoOrMoreArray<string>;
}
export interface ICheckboxes extends InputMeta, MinimumRequiredInputProps {
  options: Array<string>;
}
export interface MySelect extends InputMeta, MinimumRequiredInputProps {
  children?: React.ReactNode;
  options: TwoOrMoreArray<string>;
}

export interface DoubleSlider extends SliderMeta, MinimumRequiredInputProps {
  options: {
    min: number;
    max: number;
  };
}

export interface InitialValues {
  firstName: string | undefined;
  workType: string | undefined;
  checked: Array<string>;
  select: string | number;
  doubleSlider: number[];
}

import { FieldInputProps, FieldMetaProps } from "formik";

interface InputMeta {
  field?: FieldInputProps<string | undefined>;
  meta?: FieldMetaProps<string | undefined>;
}
export interface MyInput extends InputMeta {
  id?: string;
  placeholder: string;
  name: string;
  label: string;
}
export interface MySelect {
  id?: string;
  name: string;
  label: string;
  children?: React.ReactNode;
}

export interface InitialValues {
  firstName: string | undefined;
  mySelect: string | undefined;
}

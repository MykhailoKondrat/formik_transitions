export interface MyInput {
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

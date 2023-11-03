export type CustomButtonProps = {
  title: string;
  customStyles?: {};
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined
};

export type CustomAutoCompleteProps = {
  options?: any;
  placeholder: string;
  label?: string;
  customStyles?: {};
  customLabelStyles?: {};
  value?: {} | null;
  onChange?: (e: string | any, n:string | any) => void | {};
  onFocus?: () => any;
  touched?: any;
  error?: any;
};

export type CustomInputProps = {
  label?: string;
  placeholder?: string;
  width?: string;
  widthCon?: string;
  customLabelStyles?: {};
  customInputStyles?: {};
  type?: string;
  value?: string;
  onChange?: (e: string | any) => void;
  onFocus?: () => any;
  touched?: any;
  error?: any;
  endIcon?: any;
  inputbgStyles?: {};
};

export type SingleCandidatesProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: {label: string, value: string} | null;
  status: {label: string, value: string} | null;
};

export type AddUserProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: {label: string, value: string} | null;
  status: {label: string, value: string} | null;
};

export type searchByProps = {
  label: string,
  value: string
}

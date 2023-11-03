import React, { createContext, useContext } from "react";
import { number } from "yup";

export const Context = createContext({
  search: "",
  handleChange: (e: any) => {},
  searchBy: { label: "firstName", value: "firstName" },
  handleChangeBy: (e: any) => {},
  filterByRole: {
    label: "",
    value: "",
  },
  handleFilterByRole: (e: any) => {},
  filterByStatus: {
    label: "",
    value: "",
  },
  handleFilterByStatus: (e: any) => {},
  editUser: null,
  handleSetEditUser: (e: any) => {}
});

export function useStoreContext() {
  const context = useContext(Context);

  return {
    ...context,
  };
}

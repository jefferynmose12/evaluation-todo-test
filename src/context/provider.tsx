import { useState } from "react";
import { Context } from "./context";
import { searchByProps } from "../type";

export default function StoreManager({ children }: any) {
  const [search, setSearch] = useState<string>("");
  const [searchBy, setSearchBy] = useState<searchByProps>({
    label: "First Name",
    value: "firstName",
  });
  const [filterByRole, setfilterByRole] = useState<any>();
  const [filterByStatus, setfilterByStatus] = useState<any>();
  const [editUser, setEditUser] = useState<null>(null);

  const handleChange = (e: any) => {
    if (searchBy) {
      setSearch(e.target.value);
    }
  };

  const handleChangeBy = (sel: any) => {
    setSearchBy(sel);
  };

  const handleFilterByRole = (sel: any) => {
    setfilterByRole(sel);
  };

  const handleFilterByStatus = (sel: any) => {
    setfilterByStatus(sel);
  };

  const handleSetEditUser = (id: any) => {
    setEditUser(id);
  };

  return (
    <Context.Provider
      value={{
        search,
        searchBy,
        filterByRole,
        filterByStatus,
        editUser,
        handleChange,
        handleChangeBy,
        handleFilterByRole,
        handleFilterByStatus,
        handleSetEditUser
      }}
    >
      {children}
    </Context.Provider>
  );
}

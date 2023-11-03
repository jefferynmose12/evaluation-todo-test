import { useState } from "react";
import { userArray } from "../assets/UserArray";
import { AddUserProps } from "../type";
import { useStoreContext } from "../context/context";

const useUserHandle = () => {
  const [users, setUsers] = useState(userArray);
  const {editUser, handleSetEditUser} = useStoreContext()

  const usersData: any = localStorage.getItem("users");
  const allUsersLocal = JSON.parse(usersData);

  const dataUsers = allUsersLocal?.length > 0 ? allUsersLocal : users;

  const addUser = (input: AddUserProps) => {
    const allUsers: any = [
      ...dataUsers,
      {
        id: dataUsers.length + 1,
        firstName: input?.firstName,
        lastName: input.lastName,
        email: input?.email,
        role: input?.role,
        status: input?.status,
      },
    ];
    setUsers(allUsers);
    localStorage.setItem("users", JSON.stringify(allUsers));
  };

  const deleteUser = (userId: number) => {
    const updatedUsers = dataUsers.filter((user: any) => user.id !== userId)
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers)
  }

  const editUserHandle = (input: AddUserProps) => {
    const editedUser = {
      id: editUser,
      firstName: input?.firstName,
      lastName: input?.lastName,
      email: input?.email,
      role: input?.role,
      status: input?.status
    };

    const newUsers = [...dataUsers];

    const index = dataUsers.findIndex((user: any) => user.id === editUser);

    newUsers[index] = editedUser;

    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return {
    addUser,
    users: dataUsers,
    setEditUser: handleSetEditUser,
    editUserHandle,
    deleteUser
  };
};

export default useUserHandle;

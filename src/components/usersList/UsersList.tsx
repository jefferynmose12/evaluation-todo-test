import React from "react";
import "./UsersList.css";
import SingleCandidates from "../singleCandidates/SingleCandidates";
import { SingleCandidatesProps } from "../../type";
import useUserHandle from "../../hooks/useUserHandle";
import { useStoreContext } from "../../context/context";

const UsersList = () => {
  const { users } = useUserHandle();
  const { search, searchBy, filterByRole, filterByStatus } = useStoreContext();
  const { value } = searchBy;
  const roleValue = filterByRole?.value ? filterByRole?.value : ''
  const statusValue = filterByStatus?.value ? filterByStatus?.value : ''
  const role = 'role'
  const status = 'status'

  return (
    <div className="users-list-bg">
      <div className="candidates">
        <div className="candidates-headings">
          <span>First Name</span>
          <span>Last Name</span>
          <span className="email">Email</span>
          <span>Role</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        <div className="candidates-box">
          {users
            .filter((user: any) => user[value].toLowerCase().includes(search))
            .filter((user: any) => user[role]['value'].includes(roleValue))
            .filter((user: any) => user[status]['value'].includes(statusValue))
            .map(
              ({
                id,
                firstName,
                lastName,
                email,
                role,
                status,
              }: SingleCandidatesProps) => {
                return (
                  <SingleCandidates
                    key={id}
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    role={role}
                    status={status}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;

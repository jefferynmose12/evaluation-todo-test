import React, { useCallback } from "react";
import UsersList from "../../components/usersList/UsersList";
import CustomButton from "../../components/customButton/CustomButton";
import "./Users.css";
import CustomInput from "../../components/customInput/CustomInput";
import CustomAutoComplete from "../../components/customAutoComplete/CustomAutoComplete";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../context/context";
import { nameOptions, roleOptions, statusOptions } from "../../assets/Options";

const Users = () => {
  const navigate = useNavigate();

  const {
    search,
    searchBy,
    filterByRole,
    filterByStatus,
    handleChange,
    handleChangeBy,
    handleFilterByRole,
    handleFilterByStatus,
  } = useStoreContext();

  const searchPlaceholder =
    searchBy?.value === "firstName"
      ? "Search by First Name"
      : "Search by Last Name";

  const handleToForm = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  return (
    <div className="user-container">
      <div className="users-header">
        <CustomButton title="Create a user" onClick={handleToForm} />

        <div className="users-header-inputs">
          <div className="each-input">
            <CustomInput
              placeholder={searchPlaceholder}
              endIcon={<BiSearch />}
              value={search}
              type="text"
              onChange={(e) => handleChange(e)}
              inputbgStyles={{
                height: "38px",
                marginTop: "3px",
              }}
            />
          </div>
          <div className="each-input">
            <CustomAutoComplete
              placeholder="Search by name type"
              value={searchBy}
              onChange={(sel) => handleChangeBy(sel)}
              options={nameOptions}
            />
          </div>
        </div>
      </div>

      <div className="users-filters-bg">
        <div className="each-filter">
          <CustomAutoComplete
            placeholder="Filter by role"
            value={filterByRole}
            onChange={(sel) => handleFilterByRole(sel)}
            options={roleOptions}
          />
        </div>
        <div className="each-filter">
          <CustomAutoComplete
            placeholder="Filter by status"
            value={filterByStatus}
            onChange={(sel) => handleFilterByStatus(sel)}
            options={statusOptions}
          />
        </div>
      </div>

      <div className="users-list">
        <UsersList />
      </div>
    </div>
  );
};

export default Users;

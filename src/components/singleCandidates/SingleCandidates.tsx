import { useState } from "react";
import { SingleCandidatesProps } from "../../type";
import "./SingleCandidates.css";
import { AiOutlineCopy } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiTwotoneSave } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import CustomInput from "../customInput/CustomInput";
import CustomAutoComplete from "../customAutoComplete/CustomAutoComplete";
import { useFormik } from "formik";
import { roleOptions, statusOptions } from "../../assets/Options";
import useUserHandle from "../../hooks/useUserHandle";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";

const SingleCandidates = ({
  id,
  firstName,
  lastName,
  email,
  role,
  status,
}: SingleCandidatesProps) => {
  const navigate = useNavigate();
  const [toggleEditUser, setToggleEditUser] = useState(false);
  const [copy, setCopy] = useState(false);

  const { setEditUser, editUserHandle, deleteUser } = useUserHandle();

  const onClickEdit = (id: number) => {
    setToggleEditUser(true);
    setEditUser(id);
  };

  const copyText = firstName + " " + lastName + " " + email;

  const { values, handleChange, handleSubmit, setFieldTouched, setFieldValue } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        role: null,
        status: null,
      },
      onSubmit: (values: any) => {
        editUserHandle(values);
        setToggleEditUser(false);
        setEditUser(null);
      },
    });

  const handleDeleteUser = (id: any) => {
    deleteUser(id);
    setEditUser(null);
    navigate("/");
  };

  return (
    <div className="single-candidate">
      <div className="single-candidate-right">
        <div className="edit-input-box-bg flex-group">
          <h4 className="mobile">First Name</h4>
          {toggleEditUser ? (
            <div className="edit-input-box">
              <CustomInput
                width="100%"
                placeholder="Edit first name"
                customInputStyles={{ textAlign: "center" }}
                value={values.firstName}
                type="text"
                onChange={handleChange("firstName")}
                onFocus={() => setFieldTouched("firstName")}
              />
            </div>
          ) : (
            <span>{firstName}</span>
          )}
        </div>

        <div className="edit-input-box-bg flex-group">
          <h4 className="mobile">Last Name</h4>

          {toggleEditUser ? (
            <div className="edit-input-box">
              <CustomInput
                width="100%"
                placeholder="Edit last name"
                customInputStyles={{ textAlign: "center" }}
                value={values.lastName}
                type="text"
                onChange={handleChange("lastName")}
                onFocus={() => setFieldTouched("lastName")}
              />
            </div>
          ) : (
            <span>{lastName}</span>
          )}
        </div>

        <div className="email-bg flex-group">
          <h4 className="mobile">Email</h4>
          {toggleEditUser ? (
            <div className="email">
              <CustomInput
                width="100%"
                placeholder="Edit email"
                customInputStyles={{ textAlign: "center" }}
                value={values.email}
                type="email"
                onChange={handleChange("email")}
                onFocus={() => setFieldTouched("email")}
              />
            </div>
          ) : (
            <span className="email">{email}</span>
          )}
        </div>

        <div className="edit-input-box-bg flex-group">
          <h4 className="mobile">Role</h4>
          {toggleEditUser ? (
            <div className="edit-input-box">
              <CustomAutoComplete
                placeholder="Role"
                value={values.role}
                onChange={(sel) => setFieldValue("role", sel)}
                onFocus={() => setFieldTouched("role")}
                options={roleOptions}
              />
            </div>
          ) : (
            <span>{role?.value}</span>
          )}
        </div>

        <div className="edit-input-box-bg flex-group">
          <h4 className="mobile">Status</h4>

          {toggleEditUser ? (
            <div className="edit-input-box">
              <CustomAutoComplete
                placeholder="Status"
                value={values.status}
                onChange={(sel) => setFieldValue("status", sel)}
                onFocus={() => setFieldTouched("status")}
                options={statusOptions}
              />
            </div>
          ) : (
            <div className="status-con-back">
              <div
                style={
                  status?.value === "ONLINE"
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "grey" }
                }
                className="status-bg"
              />
              <span>{status?.value}</span>
            </div>
          )}
        </div>

        <div className="edit-input-box-bg flex-group">
          <h4 className="mobile">Actions</h4>
          {toggleEditUser ? (
            <div className="action">
              <div className="icon-btn" onClick={() => handleSubmit()}>
                <AiTwotoneSave />
              </div>
              <div
                className="icon-btn"
                onClick={() => setToggleEditUser(false)}
              >
                <FcCancel />
              </div>
            </div>
          ) : (
            <div className="action">
              <CopyToClipboard text={copyText}>
                <button className="icon-btn" onClick={() => setCopy(true)}>
                  {copy ? <ImCheckmark color="green" /> : <AiOutlineCopy />}
                </button>
              </CopyToClipboard>

              <div className="icon-btn edit-icon" onClick={() => onClickEdit(id)}>
                <CiEdit />
              </div>
              <div className="icon-btn delete-icon" onClick={() => handleDeleteUser(id)}>
                <RiDeleteBin6Line />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCandidates;

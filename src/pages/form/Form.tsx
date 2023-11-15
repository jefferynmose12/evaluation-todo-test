import "./Form.css";
import CustomButton from "../../components/customButton/CustomButton";
import CustomInput from "../../components/customInput/CustomInput";
import CustomAutoComplete from "../../components/customAutoComplete/CustomAutoComplete";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useUserHandle from "../../hooks/useUserHandle";
import { roleOptions, statusOptions } from "../../assets/Options";
import { useCallback } from "react";

const Form = () => {
  const navigate = useNavigate();
  const { addUser } = useUserHandle();

  const handleBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: null,
      status: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "First name must have a minimum of 3 letters")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Last name must have a minimum of 3 letters")
        .required("Required"),
      email: Yup.string().email("Enter a vaild email").required("Required"),
      role: Yup.object().required("Required"),
      status: Yup.object().required("Required"),
    }),
    onSubmit: (values: any) => {
      addUser(values);
      navigate("/");
    },
  });

  return (
    <div>
      <CustomButton
        title="< Back"
        customStyles={{
          backgroundColor: "transparent",
          color: " #245293",
          border: "1px solid #245293",
        }}
        onClick={handleBack}
      />
      <div className="form-container">
        <div className="form-inner">
          <div className="form-group-input">
            <div className="half-form-input">
              <CustomInput
                label="First Name"
                width="100%"
                placeholder="Enter first name"
                value={values.firstName}
                type="text"
                onChange={handleChange("firstName")}
                onFocus={() => setFieldTouched("firstName")}
                touched={touched.firstName}
                error={errors.firstName}
              />
            </div>

            <div className="half-form-input">
              <CustomInput
                label="Last Name"
                width="100%"
                placeholder="Enter last name"
                value={values.lastName}
                type="text"
                onChange={handleChange("lastName")}
                onFocus={() => setFieldTouched("lastName")}
                touched={touched.lastName}
                error={errors.lastName}
              />
            </div>
          </div>

          <div className="full-form-input">
            <CustomInput
              label="Email"
              width="100%"
              placeholder="Enter email"
              value={values.email}
              type="email"
              onChange={handleChange("email")}
              onFocus={() => setFieldTouched("email")}
              touched={touched.email}
              error={errors.email}
            />
          </div>

          <div className="form-group-input">
            <div className="half-form-input">
              <CustomAutoComplete
                label="Role"
                placeholder="Select Role"
                value={values.role}
                onChange={(sel) => setFieldValue("role", sel)}
                onFocus={() => setFieldTouched("role")}
                touched={touched.role}
                error={errors.role}
                options={roleOptions}
              />
            </div>

            <div className="half-form-input">
              <CustomAutoComplete
                label="Status"
                placeholder="Select Status"
                value={values.status}
                onChange={(sel) => setFieldValue("status", sel)}
                onFocus={() => setFieldTouched("status")}
                touched={touched.status}
                error={errors.status}
                options={statusOptions}
              />
            </div>
          </div>

          <div className="form-btn">
            <CustomButton
              title="ADD USER"
              type="button"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { memo } from "react";
import Select from "react-select";
import getOr from "lodash/fp/getOr";
import CustomOptionValue from "./components/customOptionValue/CustomOptionValue";
import "./CustomAutoComplete.css";
import { CustomAutoCompleteProps } from "../../type";

const CustomAutoComplete = memo(
  ({
    options,
    placeholder,
    label,
    customStyles,
    customLabelStyles,
    value,
    onChange,
    touched,
    error,
  }: CustomAutoCompleteProps) => {
    const getBoxShadow = ({ state }: any) => {
      const { isFocused } = state;
      if (isFocused) return "0 0 0 1px #efefef";
      return "0 0 0 1px #efefef";
    };

    const styles = {
      control: (defaultStyles: any, state: any) => {
        return {
          ...defaultStyles,
          border: "none",
          "&:hover": {
            border: "none",
          },
          width: "100%",
          borderRadius: "5px",
          boxShadow: getBoxShadow({ state }),
          transition: "box-shadow ease 0.25s",
          paddingLeft: "3px",
          margin: 0,
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getOr({}, "control", customStyles),
        };
      },
      valueContainer: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          paddingLeft: 14,
          fontSize: "14px",
          margin: 0,
          ...getOr({}, "valueContainer", customStyles),
        };
      },
      menu: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          minWidth: 220,
          zIndex: 2,
        };
      },
      placeholder: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          fontFamily: "Noto Sans HK, sans-serif",
          fontSize: "14px",
          ...getOr({}, "placeholder", customStyles),
        };
      },
      noOptionsMessage: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          fontFamily: "Noto Sans HK, sans-serif",
          fontSize: 14,
          ...getOr({}, "noOptionsMessage", customStyles),
        };
      },
      loadingMessage: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          fontFamily: "Noto Sans HK, sans-serif",
          fontSize: 14,
          ...getOr({}, "loadingMessage", customStyles),
        };
      },
      singleValue: (defaultStyles: any) => {
        return {
          ...defaultStyles,
          fontFamily: "Noto Sans HK, sans-serif",
          fontSize: 14,
          ...getOr({}, "singleValue", customStyles),
        };
      },
      option: (provided: any, state: any) => {
        let selectedStyles = {};
        if (state.isSelected) {
          selectedStyles = {
            backgroundColor: "white",
            color: "blue",
          };
        }

        return {
          ...provided,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          fontFamily: "Noto Sans HK, sans-serif",
          fontSize: 14,
          color: "#000",
          ...getOr({}, "option", customStyles),
          ...selectedStyles,
        };
      },
    };

    return (
      <div className="customautocomplete">
        {label && (
          <label
            style={{
              color: "#777",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              ...customLabelStyles,
            }}
          >
            {label}
          </label>
        )}
        <Select
          value={value}
          options={options}
          onChange={onChange}
          loadingMessage={() => "loading"}
          noOptionsMessage={() => "no_options"}
          isClearable={false}
          isSearchable={true}
          placeholder={placeholder}
          components={{
            IndicatorSeparator: null,
            Option: CustomOptionValue,
          }}
          styles={styles}
        />
      </div>
    );
  },
  (prevProps: CustomAutoCompleteProps, nextProps: CustomAutoCompleteProps) => {
    return prevProps?.value === nextProps?.value;
  }
);

export default CustomAutoComplete;

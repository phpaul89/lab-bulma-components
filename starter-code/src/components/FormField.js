import React from "react";

export const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placehoder}
        />
      </div>
    </div>
  );
};

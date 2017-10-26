import React from "react";

export const FormBtn = props =>
  <button {...props} className="btn btn-default" id = "submitButton">
    {props.children}
  </button>;
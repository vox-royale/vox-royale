import React from "react";
import "./Input.css";

export const Input = props =>
  <div className="form-group">
    <input className="form-control" autocomplete="off" {...props} />
  </div>;

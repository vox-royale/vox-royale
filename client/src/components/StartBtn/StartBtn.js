import React from "react";
import "./StartBtn.css";
// import { Link } from "react-router-dom";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const StartBtn = props =>
  <button {...props} className="btn btn-default" >
    {props.children}
  </button>
;

export default StartBtn;
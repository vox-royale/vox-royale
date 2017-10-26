import React from "react";
import "./StartBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const StartBtn = props =>
  <button {...props} className="btn btn-default" id = "startButton">
    {props.children}
  </button>
;

export default StartBtn;
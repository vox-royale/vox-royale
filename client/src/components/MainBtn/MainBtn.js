import React from "react";
import "./MainBtn.css";

const MainBtn = props =>
  <button {...props} className="btn btn-default btn-block" id = "main-button">
    {props.children}
  </button>
;

export default MainBtn;
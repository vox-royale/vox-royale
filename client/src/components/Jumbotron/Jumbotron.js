import React from "react";
import "./Jumbotron.css"

const Jumbotron = (props) =>
  <div className="jumbotron" id={props.id}>
    <p></p>
    {props.children}
  </div>;

export default Jumbotron;
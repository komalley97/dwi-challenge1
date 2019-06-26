import React from "react";
import Event from "../Event";
import logo from "./GithubLogo.svg"

import './index.css';

export default function (props) {
  return (
    
    <Event {...props} image={logo}>
      <h3 className="GithubEvent-message">
        {props.message}
      </h3>
      {props.children}
    </Event>
  )
}
import React, { Component } from "react";
import { ReactComponent as Arrow } from "./images/left-arrow.svg";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="relative">
        {/* <Arrow height="50" height="50"/> */}
        <div className="triangle"></div>
        <div className="min-value"> 0</div>
        <div className="average-value">2 50</div>
        <div className="semi-circle">
          <div className="top"></div>
        </div>
        <div className="max-value"></div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Week from "./Components/Week";

import "bootstrap/dist/css/bootstrap.css";

const toranim = ["אביב", "יפתח", "יצחיאק", "סיקורל", "תומאס"];

const animatedComponents = makeAnimated();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday",
  "Yachvatz"
];

class App extends Component {
  state = {
    date: new Date().getDay(),
    toran_daily: ""
  };

  render() {
    return (
      <div>
        <div>
          <Week />
        </div>
      </div>
    );
  }
}

export default App;

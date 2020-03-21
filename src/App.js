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

class App extends Component {
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

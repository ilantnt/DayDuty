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

  handleChange = target_toran => {
    console.log(target_toran);
    this.setState({ toran_daily: target_toran["label"] });
  };

  generateTable = () => {
    let res = [];
    res.push(<tr>{this.setForEachDay()}</tr>);

    return res;
  };

  setForEachDay = () => {
    let week_items = [];
    week_items.push(<th>Toran</th>);
    for (var i = 0; i < days.length; i++) {
      week_items.push(
        <td>
          <Select
            id={i}
            defaultValue="-1"
            onChange={this.handleChange}
            onClick={this.handlePrint()}
            options={this.addOptions()}
            components={animatedComponents}
          ></Select>
        </td>
      );
    }

    return week_items;
  };
  handlePrint = () => {
    console.log("what!");
  };
  addOptions = () => {
    let items = [];

    for (var i = 0; i < toranim.length; i++) {
      items.push({
        label: toranim[i],
        value: i,
        key: i
      });
    }
    console.log(items);
    return items;
  };

  generateHeader = () => {
    console.log("damn");
    let header_days = [];
    header_days.push(<th></th>);
    for (var i = 0; i < days.length; i++) {
      header_days.push(
        <th class="toran_days" id={days[i]}>
          {days[i]}
        </th>
      );
    }
    return header_days;
  };

  render() {
    return (
      <div>
        <div>
          <Week />
        </div>
        <table class="table table-border cell-border">
          <thead>
            <tr>{this.generateHeader()}</tr>
          </thead>
          <tbody>{this.generateTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;

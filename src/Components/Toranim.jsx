import React, { Component } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import moment from "moment";
const toranim = ["A", "B", "C", "D", "E"];

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

class Toranim extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = { start_date: date, toran_daily: null };
  }
  componentWillMount() {
    this.state.start_date.setDate(
      this.state.start_date.getDate() - (this.state.start_date.getDay() % 7)
    );
  }
  handleChange = target_toran => {
    console.log(target_toran);
    this.setState({ toran_daily: target_toran["label"] });
  };

  generateTable = () => {
    let res = [];
    res.push(<tr key="date_header">{this.setForEachDay()}</tr>);

    return res;
  };

  setForEachDay = () => {
    let week_items = [];
    week_items.push(<th key="empty">Toran</th>);
    for (var i = 0; i < days.length; i++) {
      week_items.push(
        <td key={days[i]}>
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
  handlePrint = () => {};
  addOptions = () => {
    let items = [];

    for (var i = 0; i < toranim.length; i++) {
      items.push({
        label: toranim[i],
        value: i,
        key: i
      });
    }
    return items;
  };

  generateHeader = cur_date => {
    let tmp_date = this.state.start_date;
    let header_days = [];
    header_days.push(<th key="empty"></th>);
    for (var i = 0; i < cur_date.length + 1; i++) {
      if (i != cur_date.length) {
        header_days.push(
          <th className="toran_days" key={days[i]}>
            {cur_date[i]}
          </th>
        );
      } else {
        header_days.push(
          <th className="toran_days" key={days[i]}>
            Yachvatz
          </th>
        );
      }
    }
    return header_days;
  };
  stam = x => {
    console.log("pppppp");
    console.log(x);
  };
  render() {
    var cur_date = this.props.date;
    return (
      <div>
        <div>
          <table className="table table-border cell-border">
            <thead>
              <tr>{this.generateHeader(cur_date)}</tr>
            </thead>
            <tbody>{this.generateTable()}</tbody>
          </table>
        </div>
        <div>{this.stam(this.props.date)}</div>
      </div>
    );
  }
}

export default Toranim;

import React, { Component } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import moment from "moment";

const toranim = ["A", "B", "C", "D", "E"];
const animatedComponents = makeAnimated();
const week_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday"
];
class Toranim extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = { dates: props.date, toran_daily: null };
  }
  componentWillMount() {
    console.log("ytre");
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
    let dates = this.state.dates;
    let week_items = [];
    week_items.push(<th key="empty">Toran</th>);
    // to include Yachtaz you must to add +1 to days
    for (var i = 0; i < dates.length; i++) {
      week_items.push(
        <td key={dates[i]}>
          <Select
            id={dates[i]}
            defaultValue="-1"
            onChange={this.handleChange}
            onClick={this.handlePrint()}
            options={this.addOptions(dates[i])}
            components={animatedComponents}
          ></Select>
        </td>
      );
    }
    week_items.push(
      <td key="Yashvatz">
        <Select
          id="Yashvatz"
          defaultValue="-1"
          onChange={this.handleChange}
          onClick={this.handlePrint()}
          options={this.addOptions()}
          components={animatedComponents}
        ></Select>
      </td>
    );

    return week_items;
  };
  handlePrint = () => {};
  addOptions = date => {
    let items = [];

    for (var i = 0; i < toranim.length; i++) {
      items.push({
        label: toranim[i],
        value: date,
        key: i
      });
    }
    return items;
  };

  generateHeader = cur_date => {
    let header_days = [];
    header_days.push(<th key="empty"></th>);
    for (var i = 0; i < cur_date.length + 1; i++) {
      if (i != cur_date.length) {
        header_days.push(
          <th className="toran_days" key={cur_date[i]}>
            {week_days[i] + "\n" + cur_date[i]}
          </th>
        );
      } else {
        header_days.push(
          <th className="toran_days" key="Yashvtaz">
            Weekly Yachvatz
          </th>
        );
      }
    }
    return header_days;
  };

  render() {
    var cur_date = this.props.date;
    return (
      <div>
        <div>
          <table id="Toranim" className="table table-border cell-border">
            <thead>
              <tr>{this.generateHeader(this.props.date)}</tr>
            </thead>
            <tbody>{this.generateTable()}</tbody>
          </table>
          {console.log("444444")}
          {console.log(this.props.date)}
        </div>
      </div>
    );
  }
}

export default Toranim;

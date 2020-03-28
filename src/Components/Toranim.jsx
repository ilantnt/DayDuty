import React, { Component } from "react";
import Select, { components } from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Button";
import "../CSS/Toranim.css";
// import { Select } from "antd";

const toranim = ["A", "B", "C", "D", "E"];
// const animatedComponents = makeAnimated();
const week_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday"
];
const { Option } = Select;

const addOptions = (date, day) => {
  let items = [];

  for (var i = 0; i < toranim.length; i++) {
    // items.push({ label: toranim[i], value: date, key: i, day: day });
    items.push(
      <option label={toranim[i]} value={date} key={i} day={day}>
        {toranim[i]}
      </option>
    );
  }

  return items;
};

class Toranim extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      dates: props.date,
      toran_daily: ["", "", "", "", "", "", "", ""]
    };
  }

  componentWillMount() {
    console.log("ytred");
  }
  handleChange = target_toran => {
    console.log(target_toran);
    // var url = "http://localhost:5000/set_toran";

    // let tmp_toranim = this.state.toran_daily;
    // tmp_toranim[target_toran["day"]] = target_toran["label"];

    // console.log(tmp_toranim);
    // this.setState({
    //   toran_daily: tmp_toranim
    // });

    // fetch(url, {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },

    //   body: JSON.stringify(target_toran)
    // }).then(res => {
    //   console.log(res.data);
    // });
  };

  generateTable = () => {
    let res = [];
    res.push(<tr key="date_header">{this.setForEachDay()}</tr>);
    return res;
  };

  getToranimCurrentWeek(dates) {
    console.log(dates);

    var url = new URL("http://localhost:5000/get_toranim");

    var params = { dates: dates };
    url.search = new URLSearchParams(params).toString();

    fetch(url).then(res => {
      console.log(res.data);
    });
  }

  setForEachDay = () => {
    let dates = this.props.date;
    let week_items = [];

    var toranim_cur_week = this.getToranimCurrentWeek(dates);
    console.log("rendered again");
    week_items.push(<th key="empty">Toran</th>);
    for (var i = 0; i < dates.length; i++) {
      week_items.push(
        <td key={dates[i]}>
          {/* <Select onChange={this.handleChange}>
              {addOptions(dates[i], i)}
            </Select> */}

          {/* <select onChange={this.handleChange}>
              {addOptions(dates[i], i)}
            </select> */}
          <select class="form-control">
            <option value="0" selected disabled>
              Open this select menu
            </option>
            {addOptions(dates[i], i)}
          </select>
          {/* <Select
            className="mt-4 col-md-12 col-offset-8"
            align="center"
            id={dates[i]}
            value={this.state.toran_daily["day"]}
            onChange={this.handleChange}
            options={addOptions(dates[i], i)}
          ></Select> */}
        </td>
      );
    }
    week_items.push(
      <td key="Yashvatz">
        <Select
          id="Yashvatz"
          defaultValue="-1"
          onChange={this.handleChange}
          options={addOptions(
            "yashvatz-" + dates[0] + "-" + dates[dates.length - 1],
            7
          )}
        ></Select>
      </td>
    );

    return week_items;
  };

  generateHeader = cur_date => {
    let header_days = [];
    header_days.push(<th key="empty"></th>);
    for (var i = 0; i < cur_date.length + 1; i++) {
      if (i != cur_date.length) {
        header_days.push(
          <th align="center" className="toran_days" key={cur_date[i]}>
            {week_days[i] + "\n" + cur_date[i]}
          </th>
        );
      } else {
        header_days.push(
          <th align="center" className="toran_days" key="Yashvtaz">
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
          {console.log("444444")}
          {console.log(this.props.date)}
          <Table disabled striped bordered variant="grey" id="Toranim">
            <thead>
              <tr>{this.generateHeader(this.props.date)}</tr>
            </thead>
            <tbody>{this.generateTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Toranim;

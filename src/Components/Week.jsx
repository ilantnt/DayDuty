import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../CSS/Week.css";
import Toranim from "./Toranim";
import moment from "moment";

class Week extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      dates: date
    };
  }
  componentWillMount() {
    this.getCurrentWeek();
  }
  componentDidMount() {
    console.log("www");
  }
  componentDidUpdate() {
    console.log("hhh");
  }

  getCurrentWeek = () => {
    var currentDate = moment();

    var weekStart = currentDate.clone().startOf("week");

    var days = [];

    for (var i = 0; i <= 6; i++) {
      days.push(
        moment(weekStart)
          .add(i, "days")
          .format("D.MM")
      );
    }
    console.log(days);

    this.setState({
      dates: days
    });
    console.log("ttttt");
    console.log(this.state.dates);
  };

  setWeekBack = () => {
    let week_ago_momnet = moment()
      .subtract(1, "weeks")
      .startOf("week");
    var days = [];

    for (var i = 0; i <= 6; i++) {
      days.push(
        moment(week_ago_momnet)
          .add(i, "days")
          .format("D.MM")
      );
    }
    // console.log(days);
    this.setState({
      date: days
    });
  };

  render() {
    return (
      <div>
        <h1>Shotef</h1>
        <h4 className="headerDate">
          {this.state.dates[0]}
          {"-"} {this.state.dates[this.state.dates.length - 1]}
        </h4>
        <div>
          <Button
            className="lefty"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={this.WeekBack}
          >
            Back
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="righty"
            endIcon={<ArrowForwardIosIcon />}
            onClick={this.WeekBack}
          >
            s
          </Button>
        </div>
        <div>
          <Toranim date={this.state.dates} />
        </div>
      </div>
    );
  }
}

export default Week;

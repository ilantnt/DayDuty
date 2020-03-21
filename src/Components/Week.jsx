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
      dates: date,
      week_count: 0
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
    console.log(this.state.week_count);
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
    this.setState({
      dates: days
    });
  };

  setWeek = sign => {
    if (sign == "sub") this.state.week_count--;
    else this.state.week_count++;

    let week_ago_momnet = moment()
      .add(this.state.week_count, "weeks")
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
      dates: days
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
            onClick={() => this.setWeek("sub")}
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
            onClick={() => this.setWeek("add")}
          >
            Next
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

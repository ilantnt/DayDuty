import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../CSS/Week.css";
import Toranim from "./Toranim";
import TableTroanim from "./HookTest";
import moment from "moment";

class Week extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      dates: this.getCurrentWeek(),
      week_count: 0,
    };
  }

  getCurrentWeek = () => {
    let days = [];
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf("week");
    for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, "days").format("D.MM"));
    }
    return days;
  };

  setWeek = (sign) => {
    let days = [];
    if (sign == "sub") this.state.week_count--;
    else this.state.week_count++;

    let week_momnet = moment()
      .add(this.state.week_count, "weeks")
      .startOf("week");

    for (var i = 0; i <= 6; i++) {
      days.push(moment(week_momnet).add(i, "days").format("D.MM"));
    }
    // console.log(days);
    this.setState({
      dates: days,
    });
  };

  render() {
    return (
      <div>
        <h1 align="center">Shotef</h1>
        <h4 align="center" className="headerDate">
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
            endIcon={<ArrowBackIosIcon />}
            onClick={() => this.setWeek("add")}
          >
            Next
          </Button>{" "}
          {/* <button
            onClick={() => this.setWeek("add")}
            type="button"
            className="btn btn-primary shadow-none"
          >
            <span className="oi oi-arrow-left"></span>Primary
          </button>
        </div>
        <div>
        
        {/* <Toranim date={this.state.dates} /> */}
          <div>
            <Toranim date={this.state.dates} />
            {/* <TableTroanim date={this.state.dates} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Week;

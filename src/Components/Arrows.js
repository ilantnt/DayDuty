import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default class Arrows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    };
  }
  WeekBack = () => {
    console.log("clicked!");
  };
  stam = week_click => {
    console.log(week_click);
  };
  render() {
    return (
      <div>
        {this.stam(this.props.clicks)}
        <div>
          <Button
            className="lefty"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={this.WeekBack}
          ></Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="righty"
            endIcon={<ArrowForwardIosIcon />}
            onClick={this.WeekBack}
          ></Button>
        </div>
      </div>
    );
  }
}

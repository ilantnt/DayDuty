import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../CSS/Week.css";

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  WeekDates = () => {};
  render() {
    return (
      <div>
        {this.WeekDates}
        <div>
          <Button
            class="lefty"
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
            class="righty"
            endIcon={<ArrowForwardIosIcon />}
            onClick={this.WeekBack}
          ></Button>
        </div>
      </div>
    );
  }
}

export default Week;

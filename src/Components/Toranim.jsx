import React, { Component, useEffect } from "react";
import Select, { components } from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Button";
import "../CSS/Toranim.css";
import fetch_toranim from "./DataFetch";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

// const toranim = ["A", "B", "C", "D", "E"];
// // const animatedComponents = makeAnimated();

// const { Option } = Select;

// const addOptions = (date, day) => {
//   let items = [];

//   for (var i = 0; i < toranim.length; i++) {
//     // items.push({ label: toranim[i], value: date, key: i, day: day });
//     items.push(
//       <option label={toranim[i]} value={date} key={i} day={day}>
//         {toranim[i]}
//       </option>
//     );
//   }

//   return items;
// };

const toranim = ["A", "B", "C", "D", "E"];
// const animatedComponents = makeAnimated();
const week_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday",
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

const handleChange = (target_toran) => {
  console.log("hettt");
  const { name, valueof } = target_toran.target;
  console.log(name, valueof);
  let index = target_toran.nativeEvent.target.selectedIndex;
  let label = target_toran.nativeEvent.target[index].text;
  let value = target_toran.target.value;
  console.log(label, value);
  var url = "http://localhost:5000/set_toran";
  let toran_json_data = { label: label, value: value };
  fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(toran_json_data),
  }).then((res) => {
    console.log(res);
  });
};

const generateTable = (dates) => {
  let toran_select = [];
  let result_toranim_cur_week;
  let res, res_js;

  // res = await fetch_toranim(dates);
  // res_js = await res.json();
  // console.log(res);
  // Promise.all([fetch_toranim(dates)]).then((values) => {
  //   console.log(values[0]);
  //   toran_select.push(
  //     <tr key="date_header">{setForEachDay(values[0], dates)}</tr>
  //   );
  // });
  // return toran_select;
  // setForEachDay(values[0], dates)

  // fetch_toranim(dates).then((res) => {
  //   console.log(res);
  //   console.log(toran_select);
  // });
  console.log("hhhhhhhhhhhhhhhhhhhh");
};

const setForEachDay = (toranim_this_week, dates_of_week) => {
  let week_items = [];
  let dates = dates_of_week;
  console.log("rendered again");
  week_items.push(<th key="empty">Toran</th>);
  for (var i = 0; i < dates.length; i++) {
    {
      console.log(toranim_this_week, dates[i]);
    }
    week_items.push(
      <td key={dates[i]}>
        {console.log(
          Object.keys(toranim_this_week).includes(dates[i])
            ? toranim_this_week[dates[i]]
            : "DEFAULT"
        )}
        <select
          value={
            Object.keys(toranim_this_week).includes(dates[i])
              ? toranim_this_week[dates[i]]
              : "DEFAULT"
          }
          onChange={handleChange}
          className="form-control"
        >
          <option value="DEFAULT" disabled>
            Select Toran...{" "}
          </option>
          {addOptions(dates[i], i)}
        </select>
      </td>
    );
  }
  week_items.push(
    <td key="Yashvatz">
      <select onChange={handleChange} className="form-control">
        <option selected disabled>
          Select Toran...{" "}
        </option>
        {addOptions("yashvatz-" + dates[0] + "-" + dates[dates.length - 1], 7)}{" "}
      </select>
    </td>
  );
  console.log((week_items.__html: modal.summary));
  return week_items;
};

const generateHeader = (props) => {
  let cur_date = props;
  console.log(cur_date);
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
      console.log("added yashcvatz");
    }
  }
  return header_days;
};

class Toranim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_ok_backend: true,
      is_loading: true,
      toranim_in_week: null,
      week: null,
    };
  }
  generateTable = async (dates) => {
    let toran_select = [];
    let result_toranim_cur_week;
    let res, res_js;

    res = await fetch_toranim(dates);
    res_js = await res.json();
    console.log(res);
    // Promise.all([fetch_toranim(dates)]).then((values) => {
    //   console.log(values[0]);
    //   toran_select.push(
    //     <tr key="date_header">{setForEachDay(values[0], dates)}</tr>
    //   );
    // });
    // return toran_select;
    // setForEachDay(values[0], dates)

    // fetch_toranim(dates).then((res) => {
    //   console.log(res);
    //   console.log(toran_select);
    // });
    console.log("hhhhhhhhhhhhhhhhhhhh");
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state);

    console.log("the props are ", nextProps, this.props);
    if (this.props.date === nextProps.date) return false;
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    let response, data;
    // console.log(
    //   prevProps,
    //   prevState.toranim_in_week,
    //   this.state.toranim_in_week,
    //   this.state
    // );
    fetch_toranim(this.props.date).then((toranim_in_week) => {
      this.setState({
        week: this.props.date,
        is_loading: false,
        toranim_in_week: toranim_in_week,
      });
    });

    // response = await fetch_toranim(this.props.date);
    // if (prevState.toranim_in_week != this.state.toranim_in_week)
    //   fetch_toranim(this.props.date).then((toranim_in_week) => {
    //     console.log(toranim_in_week);
    //     this.setState({ is_loading: true, toranim_in_week: toranim_in_week });
    // });
  }
  componentDidMount() {
    console.log("lopezz");
    console.log(this.state);
    fetch_toranim(this.props.date).then((toranim_in_week) => {
      console.log("jojo");
      this.setState({
        week: this.props.date,
        is_loading: false,
        toranim_in_week: toranim_in_week,
      });
    });
    console.log(this.state);
  }
  render() {
    var cur_date = this.props.date;
    console.log(cur_date);
    console.log(!this.state.is_ok_backend);
    console.log(this.state.is_loading);

    if (!this.state.is_ok_backend) return <div>Error in Backend!</div>;
    else if (this.state.is_loading) return <div>Loading...</div>;
    else
      return (
        <div>
          {console.log("fuckkkkkk")}
          <MDBTable striped bordered>
            <MDBTableHead color="primary-color">
              <tr>{generateHeader(this.props.date)}</tr>
            </MDBTableHead>
            <MDBTableBody>{generateTable(this.props.date)}</MDBTableBody>
          </MDBTable>
        </div>
      );
  }
}

export default Toranim;

import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import fetch_toranim from "./DataFetch";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

function TableTroanim(props) {
  const [Week, setWeek] = useState(props.date);
  const [IsLoading, setIsLoading] = useState(true);
  const [IsOKBackend, setIsOKBackend] = useState(true);
  const [ToranimWeek, setToranimWeek] = useState(null);
  console.log(props, "hey");

  useEffect(() => {
    console.log("born thie way!");
    setIsLoading(true);
    fetch_toranim(Week).then((toranim_in_week) => {
      setToranimWeek(toranim_in_week);
      console.log(props.date);
      setWeek(props.date);
      setIsLoading(false);
      console.log(toranim_in_week);
      //     this.setState({
      //     week: this.props.date,
      //     is_loading: false,
      //     toranim_in_week: toranim_in_week,
      //   });
    });
  });
  const generateHeader = () => {
    let cur_date = Week;
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

  const generateTable = () => {
    let toran_select = [];
    toran_select.push(<tr key="date_header">{setForEachDay()}</tr>);
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

  const setForEachDay = () => {
    let week_items = [];
    let dates = Week;
    console.log("rendered again");
    week_items.push(<th key="empty">Toran</th>);
    for (var i = 0; i < dates.length; i++) {
      {
        console.log(ToranimWeek, dates[i]);
      }
      week_items.push(
        <td key={dates[i]}>
          {console.log(
            Object.keys(ToranimWeek).includes(dates[i])
              ? ToranimWeek[dates[i]]
              : "DEFAULT"
          )}
          <select
            value={
              Object.keys(ToranimWeek).includes(dates[i])
                ? ToranimWeek[dates[i]]
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
          {addOptions(
            "yashvatz-" + dates[0] + "-" + dates[dates.length - 1],
            7
          )}{" "}
        </select>
      </td>
    );
    return week_items;
  };
  console.log(!IsOKBackend, IsLoading);
  if (!IsOKBackend) return <div>Error in Backend!</div>;
  else if (IsLoading) return <div>Loading...</div>;
  else {
    return (
      <div>
        {console.log("fuckkkkkk")}
        <MDBTable striped bordered>
          <MDBTableHead color="primary-color">
            <tr>{generateHeader()}</tr>
          </MDBTableHead>
          <MDBTableBody>{generateTable()}</MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

export default TableTroanim;

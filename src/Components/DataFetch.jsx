import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const fetch_toranim = (dates) => {
  // let dates = this.state.dates;
  var url = new URL("http://localhost:5000/get_toranim");
  var params = { dates: dates };

  url.search = new URLSearchParams(params).toString();

  return fetch(url).then((res) => res.json());
};

export default fetch_toranim;

import React, { Component } from "react";
import "./App.css";
import Week from "./Components/Week";

const toranim = ["אביב", "יפתח", "יצחיאק", "סיקורל", "תומאס"];

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Week />
        </div>
      </div>
    );
  }
}

export default App;

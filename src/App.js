import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import "./Assets/Styles/App.css";

function App() {

  return (
    <div>
      <Fragment>
        <Navbar title="Slecu App"></Navbar>
        <Body></Body>
      </Fragment>
    </div>
  );
}

export default App;

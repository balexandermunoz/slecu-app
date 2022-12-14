import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import conf from "../Scripts/plotsConfig";
import utils from "../Scripts/utils";
import "../Assets/Styles/Plots.css";

const Plots = (props) => {
  const [topStudentsActivities, setTopStudentsActivities] = useState([]);
  const [topStudentsValues, setTopStudentsValues] = useState([]);
  const [avgValue, setAvgValue] = useState(null);

  useEffect(() => {
    utils.getData(`${process.env.REACT_APP_API_URL}/stats/`, setTopStudentsActivities);
    utils.getData(`${process.env.REACT_APP_API_URL}/stats/value`, setTopStudentsValues);
    utils.getData(`${process.env.REACT_APP_API_URL}/stats/avg`, setAvgValue);
  }, [props.listUpdated, props.indexActivity]);

  const topStudentsDataAct = [
    {
      x: topStudentsActivities.map((student) => "Student " + student.studentid),
      y: topStudentsActivities.map((student) => student.count),
      type: "bar",
    },
  ];

  const topStudentsDataAvg = [
    {
      x: topStudentsValues.map((student) => "Student " + student.studentid),
      y: topStudentsValues.map((student) => student.avg),
      type: "bar",
    },
  ];

  return (
    <div className="plots">
      <h1>Stats</h1>
      {avgValue && (
        <h3>
          Average score in this course:{" "}
          {Math.round(avgValue[0].avg * 100) / 100}
        </h3>
      )}
      {!props.isOpen && (
        <div className="plots__container">
          <Plot
            data={topStudentsDataAct}
            layout={conf.layoutTopStudensAct(topStudentsActivities)}
            config={conf.config}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          ></Plot>
          <Plot
            data={topStudentsDataAvg}
            layout={conf.layoutTopStudensAvg(topStudentsValues)}
            config={conf.config}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          ></Plot>
        </div>
      )}
    </div>
  );
};

export default Plots;

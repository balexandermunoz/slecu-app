import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "../Assets/Styles/Plots.css";

const Plots = (props) => {
  const [topStudentsActivities, setTopStudentsActivities] = useState([]);
  const [topStudentsValues, setTopStudentsValues] = useState([]);
  const [avgValue, setAvgValue] = useState(null);
  useEffect(() => {
    const getTopStudentsActivities = async () => {
      const response = await fetch(`http://localhost:9000/stats/`);
      const body = await response.json();
      setTopStudentsActivities(body);
      return body;
    };
    const getTopStudentsValues = async () => {
      const response = await fetch(`http://localhost:9000/stats/value`);
      const body = await response.json();
      setTopStudentsValues(body);
      return body;
    };
    const getAvgValue = async () => {
      const response = await fetch(`http://localhost:9000/stats/avg`);
      const body = await response.json();
      setAvgValue(body[0].avg);
      return body;
    };

    getTopStudentsActivities();
    getTopStudentsValues();
    getAvgValue();
  }, [props.listUpdated, props.indexActivity]);

  const topStudentsData = [
    {
      x: topStudentsActivities.map((student) => "Student " + student.studentid),
      y: topStudentsActivities.map((student) => student.count),
      type: "bar",
    },
  ];
  const layoutTopStudens = {
    responsive: true,
    title: {
      text: "Top students by activities solved",
    },
    xaxis: {
      tickmode: "array",
      tickvals: topStudentsActivities.map(
        (student) => "Student " + student.studentid
      ),
      title: {
        text: "Student ID",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
      },
    },
    yaxis: {
      title: {
        text: "Activities solved",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
      },
    },
  };
  const topStudentsData2 = [
    {
      x: topStudentsValues.map((student) => "Student " + student.studentid),
      y: topStudentsValues.map((student) => student.avg),
      type: "bar",
    },
  ];
  const layoutTopStudens2 = {
    responsive: true,
    title: {
      text: "Top students by average score",
    },
    xaxis: {
      tickmode: "array",
      tickvals: topStudentsValues.map(
        (student) => "Student " + student.studentid
      ),
      title: {
        text: "Student ID",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
      },
    },
    yaxis: {
      title: {
        text: "Activities solved",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
      },
    },
  };
  const config = {
    displayModeBar: false,
  };
  return (
    <div className="plots">
      <h1>Stats</h1>
      {avgValue && (
        <h3>
          Average score in this course: {Math.round(avgValue * 100) / 100}
        </h3>
      )}
      {!props.isOpen && (
        <div>
          <Plot
            data={topStudentsData}
            layout={layoutTopStudens}
            config={config}
          ></Plot>
          <Plot
            data={topStudentsData2}
            layout={layoutTopStudens2}
            config={config}
          ></Plot>
        </div>
      )}
    </div>
  );
};

export default Plots;

// Configuration for top students by activities
const layoutTopStudensAct = (topStudentsActivities) => {
  return {
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
};

// Configuration for top students by avg value
const layoutTopStudensAvg = (topStudentsValues) => {
  return {
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
};

// General configurations
const config = {
  displayModeBar: false,
};

const conf = { layoutTopStudensAct, layoutTopStudensAvg, config };

export default conf;

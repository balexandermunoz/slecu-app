import React, { useState, useEffect } from "react";
import utils from "../Scripts/utils";
import Modal from "./Modal";
import Form from "./Form";
import Table from "./Table";
import Plots from "./Plots";
import "../Assets/Styles/Body.css";

const Body = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [listUpdated, setListUpdated] = useState(false);
  const [index, setIndex] = useState(null);
  const [indexActivity, setIndexActivity] = useState(null);
  const [student, setStudent] = useState({});
  const [students, setStudents] = useState(null);
  const [activities, setActivities] = useState(null);
  const [formType, setFormType] = useState("students");
  const setFns = {
    setFormType,
    setIsOpen,
    setTitle,
    setIndex,
    setListUpdated,
    setStudent,
    setIndexActivity,
  };

  useEffect(() => {
    utils.getData(`44.203.170.143:9000/students`, setStudents);
    utils.getData(
      `44.203.170.143:9000/activities/${indexActivity}`,
      setActivities
    );
    setListUpdated(false);
  }, [listUpdated, indexActivity]);

  return (
    <div className="body">
      <h1>Students</h1>
      {students && (
        <Table
          data={students}
          type="students"
          handleDelete={utils.handleDelete}
          handleUpdate={utils.handleUpdate}
          handleShowActivities={utils.handleShowActivities}
          setListUpdated={setListUpdated}
          setFns={setFns}
        ></Table>
      )}
      <div className="button-container">
        <button
          className="button-container__button"
          onClick={() => utils.handleAddButton("students", index, setFns)}
        >
          Add Student
        </button>
      </div>
      {!index && <h4>click on a student to see their activities</h4>}
      {index && <h1>Activities of student {index}</h1>}
      {activities && (
        <Table
          data={activities}
          type="activities"
          handleDelete={utils.handleDelete}
          handleUpdate={utils.handleUpdate}
          handleShowActivities={utils.handleShowActivities}
          setListUpdated={setListUpdated}
          setFns={setFns}
        ></Table>
      )}

      <div className="button-container">
        <button
          className="button-container__button"
          onClick={() => utils.handleAddButton("activities", index, setFns)}
        >
          Add Activity
        </button>
      </div>
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form
          index={index}
          student={student}
          setStudent={setStudent}
          type={formType}
        ></Form>
      </Modal>
      <Plots isOpen={isOpen}></Plots>
    </div>
  );
};

export default Body;

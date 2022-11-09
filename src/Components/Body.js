import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Form from "./Form";
import Table from "./Table";
import "../Assets/Styles/Table.css";

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

  useEffect(() => {
    const getStudents = async () => {
      const response = await fetch(`http://localhost:9000/students`);
      const body = await response.json();
      setStudents(body);
      return body;
    };
    const getActivities = async (id) => {
      const response = await fetch(`http://localhost:9000/activities/${id}`);
      const body = await response.json();
      setActivities(body);
      return body;
    };

    getStudents();
    getActivities(indexActivity);
    setListUpdated(false);
  }, [listUpdated, indexActivity]);

  const handleAddStudentButton = () => {
    console.log(student);
    setFormType("students");
    setIsOpen(true);
    setTitle("Add Student");
    setIndex(null);
  };

  const handleAddActivityButton = () => {
    console.log(student);
    setFormType("activities");
    setIsOpen(true);
    setTitle("Add Activity");
    setIndex(null);
  };

  const handleDeleteStudent = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(`http://localhost:9000/students/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
    setListUpdated(true);
  };

  const handleDeleteActivity = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(`http://localhost:9000/activities/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
    setListUpdated(true);
  };

  const handleUpdateStudent = (id) => {
    let currStudent = students.find((el) => el.id === id);
    setFormType("students");
    setIsOpen(true);
    setTitle("Update Student");
    setIndex(id);
    setListUpdated(true);
    setStudent(currStudent);
  };

  const handleUpdateActivity = (id) => {
    setFormType("activities");
    setIsOpen(true);
    setTitle("Update Activity");
    setIndex(id);
    setListUpdated(true);
  };

  const handleActivities = (id) => {
    setIndexActivity(id);
    setListUpdated(true);
    setActivities(activities);
  };

  return (
    <div>
      {students && (
        <Table
          students={students}
          type="students"
          handleDelete={handleDeleteStudent}
          handleUpdate={handleUpdateStudent}
          handleActivities={handleActivities}
        ></Table>
      )}
      <div className="button-container">
        <button
          className="button-container__button"
          onClick={handleAddStudentButton}
        >
          Add Student
        </button>
      </div>
      {activities && (
        <div>
          <Table
            students={activities}
            type="activities"
            handleDelete={handleDeleteActivity}
            handleUpdate={handleUpdateActivity}
            handleActivities={handleActivities}
          ></Table>

          <div className="button-container">
            <button
              className="button-container__button"
              onClick={handleAddActivityButton}
            >
              Add Activity
            </button>
          </div>
        </div>
      )}
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form
          index={index}
          student={student}
          setStudent={setStudent}
          type={formType}
        ></Form>
      </Modal>
    </div>
  );
};

export default Body;

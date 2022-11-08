import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import StudentsList from './Components/StudentsList';
import Form from './Components/Form';
import Modal from './Components/Modal';
import Plots from './Components/Plots';
import './Assets/Styles/App.css';

function App() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    year: '',
    age: '',
    gender: ''
  })
  const [students, setStudents] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(null)
  const [title, setTitle] = useState('')

  useEffect(() => {
    const getStudents = () => {
      fetch('http://localhost:9000/students')
        .then(res => res.json())
        .then(res => setStudents(res))
    }
    getStudents()
    setListUpdated(false)
  }, [listUpdated])

  const handleAddButton = () => {
    setIsOpen(true)
    setTitle("Add Student")
    setIndex(null)
  }

  return (
    <div>
      <Fragment>
        <Navbar title="Slecu App"></Navbar>
        <div className='body'>
          <h2 style={{ textAlign: 'center' }}>Students</h2>
          <StudentsList setIndex={setIndex} setTitle={setTitle} setIsOpen={setIsOpen} setStudent={setStudent} students={students} setListUpdated={setListUpdated}></StudentsList>
        </div>
        <div className='button-container'>
          <button className='button-container__button' onClick={handleAddButton}>Add Student</button>
        </div>
        <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form index={index} student={student} setStudent={setStudent}></Form>
        </Modal>
        <div className='plots'>
          <h2 style={{ textAlign: 'center' }}>Plots</h2>
          <Plots></Plots>
        </div>
      </Fragment>
    </div>
  );
}

export default App;

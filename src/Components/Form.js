import React from "react";
import validateData from '../Scripts/validateData';
import '../Assets/Styles/Form.css';

const Form = ({ index, student, setStudent, type }) => {
    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        // Validation
        if (type === "students"){
            if (!validateData.validateStudentData(student)) return
        } else{
            if (!validateData.validateActivityData(student)) return
        }

        if (index) {
            // Query for UPDATE
            const requestInit = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student)
            }
            fetch(`http://localhost:9000/${type}/${index}`, requestInit)
                .then(res => res.text())
                .then(res => console.log(res))
        }
        else {
            // Query for POST
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student)
            }
            fetch(`http://localhost:9000/${type}`, requestInit)
                .then(res => res.text())
                .then(res => console.log(res))
        }
    }

    if (type === "students"){
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__block">
                    <label htmlFor="name" className="form__block__label">Name</label>
                    <input name="name" value={student.name} onChange={handleChange} type="text" id="name" placeholder="Firstname lastname" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="email" className="form__block__label">Email</label>
                    <input name="email" value={student.email} onChange={handleChange} type="text" id="email" placeholder="example@gmail.com" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="year" className="form__block__label">Year</label>
                    <input name="year" value={student.year} onChange={handleChange} type="number" id="year" placeholder="2022" min="1980" max="2023" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="age" className="form__block__label">Age</label>
                    <input name="age" value={student.age} onChange={handleChange} type="number" id="age" placeholder="20" min="0" max="90" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="gender" className="form__block__label">gender</label>
                    <input name="gender" value={student.gender} onChange={handleChange} type="text" id="gender" placeholder="M" className="form__block__control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
    else{
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__block">
                    <label htmlFor="studentid" className="form__block__label">Student ID</label>
                    <input name="studentid" value={student.studentid} onChange={handleChange} type="number" id="studentid" placeholder="1" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="activity" className="form__block__label">Activity</label>
                    <input name="activity" value={student.activity} onChange={handleChange} type="text" id="activity" placeholder="Activity 1" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="value" className="form__block__label">value</label>
                    <input name="value" value={student.value} onChange={handleChange} type="number" id="value" placeholder="10" min="0" max="10" className="form__block__control" />
                </div>
                <div className="form__block">
                    <label htmlFor="date" className="form__block__label">date</label>
                    <input name="date" value={student.date} onChange={handleChange} type="date" id="date" placeholder="2022" min="1980" max="2023" className="form__block__control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }

}

export default Form;
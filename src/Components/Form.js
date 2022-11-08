import React from "react";
import validateData from '../Scripts/validateData';
import '../Assets/Styles/Form.css';

const Form = ({ index, student, setStudent }) => {
    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        // Validation
        if (!validateData(student)) return

        if (index) {
            // Query for UPDATE
            const requestInit = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student)
            }
            fetch(`http://localhost:9000/students/${index}`, requestInit)
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
            fetch('http://localhost:9000/students', requestInit)
                .then(res => res.text())
                .then(res => console.log(res))
        }
    }


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

export default Form;
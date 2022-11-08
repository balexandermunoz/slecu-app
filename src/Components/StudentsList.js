import '../Assets/Styles/StudentsList.css';

const StudentsList = ({ setIndex, setTitle , setIsOpen, setStudent, students, setListUpdated }) => {

    const handleDelete = (id) => {
        // Query
        const requestInit = {
            method: 'DELETE'
        }
        fetch(`http://localhost:9000/students/${id}`, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true)
    }

    const handleUpdate = (id) => {
        let currStudent = students.find(el => el.id === id);

        setIsOpen(true)
        setTitle("Update Student")
        setIndex(id)
        setListUpdated(true)
        setStudent(currStudent)
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Year</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.year}</td>
                        <td>{student.age}</td>
                        <td>{student.gender}</td>
                        <td>
                            <div className="table__button">
                                <button onClick={() => handleDelete(student.id)} className="table__button-button">Delete</button>
                            </div>
                            <div className="table__button">
                                <button onClick={() => handleUpdate(student.id)} className="table__button-button">Update</button>
                            </div>
                        </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    );
}

export default StudentsList;
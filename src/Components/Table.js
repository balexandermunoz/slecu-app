import deleteLogo from "../Assets/Images/delete.png";
import editLogo from "../Assets/Images/edit.png";

const Table = (props) => {
  const students = props.students;
  const type = props.type;
  const handleDelete = props.handleDelete;
  const handleUpdate = props.handleUpdate;
  const handleActivities = props.handleActivities;
  const cols =
    type === "students"
      ? ["ID", "Name", "Email", "Year", "Age", "Gender", ""]
      : ["ID", "Activity", "Value", "Date", ""];

  if (type === "students") {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {cols.map((col) => (
                <th>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="table__dinamic">
                <td onClick={() => handleActivities(student.id)}>
                  {student.id}
                </td>
                <td onClick={() => handleActivities(student.id)}>
                  {student.name}
                </td>
                <td onClick={() => handleActivities(student.id)}>
                  {student.email}
                </td>
                <td onClick={() => handleActivities(student.id)}>
                  {student.year}
                </td>
                <td onClick={() => handleActivities(student.id)}>
                  {student.age}
                </td>
                <td onClick={() => handleActivities(student.id)}>
                  {student.gender}
                </td>
                <td>
                  <div className="table__buttons">
                    <img
                      src={deleteLogo}
                      onClick={() => handleDelete(student.id)}
                      className="table__buttons__logo"
                      alt="delete logo"
                    />
                    <img
                      src={editLogo}
                      onClick={() => handleUpdate(student.id)}
                      className="table__buttons__logo"
                      alt="edit logo"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <table className="table__static">
        <thead>
          <tr>
            {cols.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.activity}</td>
              <td>{student.value}</td>
              <td>{student.date}</td>
              <td>
                <div className="table__buttons">
                  <img
                    src={deleteLogo}
                    onClick={() => handleDelete(student.id)}
                    className="table__buttons__logo"
                    alt="delete logo"
                  />
                  <img
                    src={editLogo}
                    onClick={() => handleUpdate(student.id)}
                    className="table__buttons__logo"
                    alt="edit logo"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

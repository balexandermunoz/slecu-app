import "../Assets/Styles/Table.css";
import deleteLogo from "../Assets/Images/delete.png";
import editLogo from "../Assets/Images/edit.png";

const Table = (props) => {
  const data = props.data;
  const type = props.type;
  const handleDelete = props.handleDelete;
  const handleUpdate = props.handleUpdate;
  const handleShowActivities = props.handleShowActivities;
  const setListUpdated = props.setListUpdated;
  const setFns = props.setFns;

  const cols =
    type === "students"
      ? ["ID", "Name", "Email", "Year", "Age", "Gender", ""]
      : ["ID", "Activity", "Value", "Date", ""];

  if (type === "students") {
    return (
      <table className="table">
        <thead>
          <tr>
            {cols.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id} className="table__dinamic">
              <td onClick={() => handleShowActivities(student.id, setFns)}>
                {student.id}
              </td>
              <td onClick={() => handleShowActivities(student.id, setFns)}>
                {student.name}
              </td>
              <td onClick={() => handleShowActivities(student.id, setFns)}>
                {student.email}
              </td>
              <td onClick={() => handleShowActivities(student.id, setFns)}>
                {student.year}
              </td>
              <td onClick={() => handleShowActivities(student.id, setFns)}>
                {student.age}
              </td>
              <td onClick={() => handleShowActivities(student.id, setFns)}>
                {student.gender}
              </td>
              <td>
                <div className="table__buttons">
                  <img
                    src={deleteLogo}
                    onClick={() =>
                      handleDelete(
                        `44.203.170.143:9000/students/${student.id}`,
                        setListUpdated
                      )
                    }
                    className="table__buttons__logo"
                    alt="delete logo"
                  />
                  <img
                    src={editLogo}
                    onClick={() => handleUpdate(type, student.id, data, setFns)}
                    className="table__buttons__logo"
                    alt="edit logo"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <table className="table__static">
      <thead>
        <tr>
          {cols.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.activity}</td>
            <td>{student.value}</td>
            <td>{student.date}</td>
            <td>
              <div className="table__buttons">
                <img
                  src={deleteLogo}
                  onClick={() =>
                    handleDelete(
                      `44.203.170.143:9000/activities/${student.id}`,
                      setListUpdated
                    )
                  }
                  className="table__buttons__logo"
                  alt="delete logo"
                />
                <img
                  src={editLogo}
                  onClick={() => handleUpdate(type, student.id, data, setFns)}
                  className="table__buttons__logo"
                  alt="edit logo"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

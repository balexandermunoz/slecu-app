const getData = async (link, setFn) => {
  const response = await fetch(link);
  const body = await response.json();
  setFn(body);
  return body;
};

const handleAddButton = (type = "students", index, setFns) => {
  setFns.setStudent({});
  setFns.setFormType(type);
  setFns.setIsOpen(true);
  setFns.setTitle(`Add ${type}`);
  if (type === "activities" && index) setFns.setStudent({ studentid: index });
  setFns.setIndex(null);
};

const handleUpdate = (type, id, data, setFns) => {
  let currData = data.find((el) => el.id === id);
  setFns.setFormType(type);
  setFns.setIsOpen(true);
  setFns.setTitle(`Update ${type}`);
  setFns.setIndex(id);
  setFns.setListUpdated(true);
  setFns.setStudent(currData);
};

const handleDelete = (link, setListFn) => {
  const requestInit = {
    method: "DELETE",
  };
  fetch(link, requestInit)
    .then((res) => res.text())
    .catch((error) => alert("Delete activities first!"));
  setListFn(true);
};

const handleShowActivities = (id, setFns) => {
  setFns.setIndexActivity(id);
  setFns.setIndex(id);
  setFns.setListUpdated(true);
};

const utils = {
  getData,
  handleAddButton,
  handleUpdate,
  handleDelete,
  handleShowActivities,
};

export default utils;

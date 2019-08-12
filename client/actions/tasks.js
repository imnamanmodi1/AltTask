import axios from "axios";

const user = localStorage.user ? localStorage.user : "";
const updatedUser = user ? localStorage.parse(user) : ""
const id = updatedUser._id;
const token = localStorage.token;
console.log(token, "in add t action")
const url = `http://localhost:3000/api/v1/users/tasks/create/`;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
};

export function addTask(data) {
  console.log(updatedUser._id);
  return dispatch => {
    axios
      .post(url, data, {
        headers: headers
      })
      .then(addedTask => {
        console.log(addedTask, "in task action");
        dispatch({ type: "ADD_TASK" });
      });
  };
}

export function getTasks() {
  return dispatch => {
    axios
      .get(`https://alttask.xyz/api/v1/users/tasks/${id}`, {
        headers: headers
      })
      .then(allTasks => {
        console.log(allTasks, "in task get action");
      });
  };
}

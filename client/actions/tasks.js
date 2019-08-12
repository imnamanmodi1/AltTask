import axios from "axios";

const user = localStorage.user ? localStorage.user : "";
// const updatedUser = JSON.parse(user);
const id = user._id;
const token = localStorage.token;
const url = `https://alttask.xyz/api/v1/users/tasks/create/${id}`;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.token}`
};

export function addTask(data) {
  console.log(user._id);
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

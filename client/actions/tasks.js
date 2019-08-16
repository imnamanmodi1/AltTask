import axios from "axios";

const user = localStorage.user ? localStorage.user : "";
const updatedUser = user ? JSON.parse(user) : ""
const id = updatedUser._id;
const token = localStorage.token;
const url = `http://localhost:3000/api/v1/users/tasks/create/${id}`;
const headers = {
  "Content-Type": "application/json",
  authorization: `Bearer ${token}`
};

export function addTask(data) {
  console.log(updatedUser._id);
  console.log(token, "in add t action")

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
      .get(`http://localhost:3000/api/v1/users/tasks/${id}`, {
        headers: headers
      })
      .then(allTasks => {
        console.log(allTasks, "in task get action");
        dispatch({type:"GET_TASKS", payload: allTasks.data.tasks})
      });
  };
}

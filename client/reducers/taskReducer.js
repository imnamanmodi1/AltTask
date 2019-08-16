const initialState = {
  task: [],
  isadded: false
};

export default function task(state = initialState, action) {
  console.log(action, state, "in reducer")
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: action.task,
        isadded: true
      };
    case "GET_TASKS":
      return {
        ...state,
        task: action.payload
      };
    default:
      return state;
  }
}

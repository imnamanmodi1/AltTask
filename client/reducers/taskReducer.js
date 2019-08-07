const initialState = {
  task: [],
  isadded: false
};

export default function task(state = initialState, action) {
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
        task: action.task
      };
    default:
      return state;
  }
}

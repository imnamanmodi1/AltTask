const initialState = {
  user: null
};

export default function userGet(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      console.log(action.value, "in get user");
      return {
        ...state,
        user: { ...action.value }
      };
    default:
      return state;
  }
}

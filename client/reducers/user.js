const initialState = {
  user: null,
  isLoggedIn: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      console.log(action, "in user reducer");
      return {
        ...state,
        user: { ...action.value, token: action.token },
        isLoggedIn: true
      };
    case "USER_LOGOUT":
      return { ...state, user: null, isLoggedIn: false };
    case "GET_USER":
      return {
        ...state,
        user: { ...action.value }
      };
    default:
      return state;
  }
}

const initialState = {
  user: null,
  isLoggedIn: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      console.log(action.value);
      return {
        ...state,
        user: { ...action.value, token: action.token },
        isLoggedIn: true
      };
    case "USER_LOGOUT":
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
}

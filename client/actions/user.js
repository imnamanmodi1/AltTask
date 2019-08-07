import axios from "axios";

const url = "http://localhost:3000/user/login";

export const userLogin = data => {
  return dispatch => {
    axios
      .post(url, data)
      .then(userInfo => {
        console.log(userInfo, "in sign in");
        const { data } = userInfo;
        dispatch({ type: "USER_LOGIN", value: data.userData, token: data.key });
        localStorage.setItem("token", userInfo.data.key);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

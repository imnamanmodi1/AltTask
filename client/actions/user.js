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
        localStorage.setItem("user", JSON.stringify(userInfo.data.userData));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

// export const userLogout = () =>{
//   return dispatch =>{

//   }
// }

export const getUser = () => {
  return dispatch => {
    axios
      .get("/api/v1/users/verify-token", {
        headers: {
          authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        console.log(res, "in action aaa");
        const { data } = res;
        dispatch({ type: "GET_USER", value: data.user });
      });
  };
};

export const userLogout = () => {};

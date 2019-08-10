import axios from "axios";

const url = "http://alttask.xyz/user/login";

export const userLogin = (data, cb) => {
  return dispatch => {
    axios
      .post(url, data)
      .then(userInfo => {
        if (userInfo.data.status === 200) {
          const { data } = userInfo;
          localStorage.setItem("token", userInfo.data.key);
          localStorage.setItem("user", JSON.stringify(userInfo.data.userData));
          dispatch({
            type: "USER_LOGIN",
            value: data.userData,
            token: data.key
          });
          cb(true);
        } else {
          cb(false);
        }
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

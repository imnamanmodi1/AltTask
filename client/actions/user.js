export function userLogin(userInfo) {
  const { data } = userInfo;
  return { type: "USER_LOGIN", value: data.userData, token: data.key };
}

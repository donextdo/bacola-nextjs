export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  sessionStorage.removeItem("user");
  //   location.reload();
};

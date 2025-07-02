export const isAdminAuthenticated = () => {
  return localStorage.getItem("adminToken") === "loggedin";
};

export const loginAdmin = (username, password) => {
  if (username === "admin" && password === "password") {
    localStorage.setItem("adminToken", "loggedin");
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem("adminToken");
};

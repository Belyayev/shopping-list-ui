import axios from "axios";

const API_URL = "https://free-shopping-list-api.vercel.app/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Confirm user registration
const confirmUser = async ({ id }) => {
  const response = await axios.put(API_URL + `confirm/${id}`);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Request a password reset
const passwordResetRequest = async (payload) => {
  const response = await axios.put(API_URL + "passwordresetrequest", payload);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Execute password reset
const passwordResetExecution = async (payload) => {
  const response = await axios.put(API_URL + "passwordresetexecution", payload);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  confirmUser,
  passwordResetRequest,
  passwordResetExecution,
  logout,
  login,
};

export default authService;

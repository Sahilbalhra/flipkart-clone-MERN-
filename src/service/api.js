import axios from "axios";

const URL = "http://localhost:5000";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${URL}/signup`, user);
  } catch (error) {
    console.log("Error while calling signup api", error.message);
  }
};
export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${URL}/login`, user);
  } catch (error) {
    console.log("Error while calling login api", error.message);
    return error.response;
  }
};

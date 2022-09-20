//this file is for calls API
import axios from "axios";

//connection user, POST Request to API with username and password user
export const loginUser = async (user, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email: user, password: password }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

//one time user connect, he can access to his data with this method : control with token in header of Request
export const recupDataUserConnect = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      { headers: { Authorization: "Bearer" + token } }
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

//change information user, PUT Request
export const changeUsername = async (token, firstName, lastName) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { firstName: firstName, lastName: lastName },
      { headers: { Authorization: "Bearer" + token } }
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

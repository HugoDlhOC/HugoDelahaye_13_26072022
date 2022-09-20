import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connect: false,
  firstName: null,
  lastName: null,
  token: null,
};

export const userSlice = createSlice({
  //CreateSlice make a fusion between action and reducers
  name: "user",
  initialState,

  reducers: {
    //Action : Connection user
    setLogin: (state, action) => {
      const { connect, token } = action.payload;
      state.connect = connect;
      state.token = token;
    },
    //Action : User connected received data
    setAccessDataUsers: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    //Action : Disconnection user
    setLogout: (state) => {
      state.connect = false;
      state.firstName = null;
      state.lastName = null;
      state.token = null;
    },
    //Action : User change name
    setChangeNameUser: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export default userSlice.reducer;
export const { setLogin, setAccessDataUsers, setLogout, setChangeNameUser } =
  userSlice.actions;

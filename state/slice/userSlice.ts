import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  role: "",
  userId: "",
};

export const logInUserSlice = createSlice({
  name: "logInUser",
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.email = action.payload;
    },

    getName: (state, action) => {
      state.name = action.payload;
    },
    getRole: (state, action) => {
      state.role = action.payload;
    },

    getUserId: (state, action) => {
      state.userId = action.payload;
    },

    logout: (state) => {
      state.email = "";
      state.name = "";
      state.role = "";
      state.userId = "";
      localStorage.clear();
    },
  },
});

export const { getEmail, getName, getRole, getUserId, logout } =
  logInUserSlice.actions;

export default logInUserSlice.reducer;

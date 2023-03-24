import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: "",
  password: "",
  name: "",
  role: "",
}

export const logInUserSlice = createSlice({
  name: "logInUser",
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.email = action.payload
    },
    getPassword: (state, action) => {
      state.password = action.payload
    },
    getName: (state, action) => {
      state.name = action.payload
    },
    getRole: (state, action) => {
      state.role = action.payload
    },
  },
})

export const { getEmail, getPassword, getName, getRole } =
  logInUserSlice.actions

export default logInUserSlice.reducer

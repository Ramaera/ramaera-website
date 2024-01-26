import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: "",
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

    getName: (state, action) => {
      state.name = action.payload
    },
    getRole: (state, action) => {
      state.role = action.payload
    },
    logout: (state: any) => {
      state.data = null
      localStorage.clear()
    },
  },
})

export const { getEmail, getName, getRole, logout } = logInUserSlice.actions

export default logInUserSlice.reducer

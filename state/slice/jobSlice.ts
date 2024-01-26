import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  jobApplication: [],
  department: "",
  jobDescription: "",
  jobLocation: "",
  jobTitle: "",
  jobType: "",
  jobStatus: "",
}

export const jobSlice = createSlice({
  name: "jobApplication",
  initialState,
  reducers: {
    changeJobApplication: (state, action) => {
        state.jobApplication = action.payload
      },
    changeDepartment: (state, action) => {
      state.department = action.payload
    },
    changeJobDescription: (state, action) => {
      state.jobDescription = action.payload
    },
    changeJobLocation: (state, action) => {
      state.jobLocation = action.payload
    },
    changeJobTitle: (state, action) => {
      state.jobTitle = action.payload
    },
    changeJobType: (state, action) => {
      state.jobType = action.payload
    },
    changeJobStatus: (state, action) => {
        state.jobStatus = action.payload
      },
  },
})

export const {
    changeDepartment,
    changeJobDescription,
    changeJobLocation,
    changeJobTitle,
    changeJobType,
    changeJobStatus
} = jobSlice.actions

export default jobSlice.reducer

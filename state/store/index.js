import { configureStore } from "@reduxjs/toolkit"
import applicationReducer from "../slice/applicationSlice"
import logInUserReducer from "../slice/userSlice"
import projectReducer from "../slice/projectSlice"
import applicationDataReducer from "../slice/applicantDataSlice"
import accessTokenReducer from "../slice/accessTokenSlice"
import jobReducer from "../slice/jobSlice"
import visitingInfoReducer from "../slice/visitingInfoSlice"

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    logInUser: logInUserReducer,
    project: projectReducer,
    applicationData: applicationDataReducer,
    accessToken: accessTokenReducer,
    visitingInfo: visitingInfoReducer,
    jobApplication:jobReducer,
  },
})

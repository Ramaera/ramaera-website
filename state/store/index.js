import { configureStore } from "@reduxjs/toolkit"
import applicationReducer from "../slice/applicationSlice"
import logInUserReducer from "../slice/userSlice"
import projectReducer from "../slice/projectSlice"
import applicationDataReducer from "../slice/applicantDataSlice"
import accessTokenReducer from "../slice/accessTokenSlice"
import jobReducer from "../slice/jobSlice"
import visitingInfoReducer from "../slice/visitingInfoSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
  key: "root",
  storage,
}
const applicationPersistedReducer = persistReducer(
  persistConfig,
  applicationReducer
)
const logiInUserPersistedReducer = persistReducer(
  persistConfig,
  logInUserReducer
)
const projectPersistedReducer = persistReducer(persistConfig, projectReducer)
const applicationDataPersistedReducer = persistReducer(
  persistConfig,
  applicationDataReducer
)
const accessTokenPersistedReducer = persistReducer(
  persistConfig,
  accessTokenReducer
)
const visitingInfoPersistedReducer = persistReducer(
  persistConfig,
  visitingInfoReducer
)
const jobPersistedReducer = persistReducer(persistConfig, jobReducer)

export const store = configureStore({
  reducer: {
    application: applicationPersistedReducer,
    logInUser: logiInUserPersistedReducer,
    project: projectPersistedReducer,
    applicationData: applicationDataPersistedReducer,
    accessToken: accessTokenPersistedReducer,
    visitingInfo: visitingInfoPersistedReducer,
    jobApplication: jobPersistedReducer,
  },
  middleware: [thunk],
})
export const persistor = persistStore(store)

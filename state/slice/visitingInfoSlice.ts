import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  visitingInfo: [],
  date: "",
  email: "",
  mobileNumber: "",
  name: "",
  numberOfPeople: "",
  plantName: "",
  pwId: "",
  reason: "",
  typeOfVisit: "",
}

export const visitingInfoSlice = createSlice({
  name: "visitingInfo",
  initialState,
  reducers: {
    changeVisitingInfo: (state, action) => {
      state.visitingInfo = action.payload
    },
    changedate: (state, action) => {
      state.date = action.payload
    },
    changeemail: (state, action) => {
      state.email = action.payload
    },
    changemobileNumber: (state, action) => {
      state.mobileNumber = action.payload
    },
    changename: (state, action) => {
      state.name = action.payload
    },
    changenumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload
    },
    changeplantName: (state, action) => {
      state.plantName = action.payload
    },
    changepwId: (state, action) => {
      state.pwId = action.payload
    },
    changereason: (state, action) => {
      state.reason = action.payload
    },
    changetypeOfVisit: (state, action) => {
      state.typeOfVisit = action.payload
    },
  },
})

export const {
  changeVisitingInfo,
  changedate,
  changeemail,
  changemobileNumber,
  changename,
  changenumberOfPeople,
  changeplantName,
  changepwId,
  changereason,
  changetypeOfVisit,
} = visitingInfoSlice.actions

export default visitingInfoSlice.reducer

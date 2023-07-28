import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitingInfo: [],
  fromDate: "",
  toDate: "",
  email: "",
  mobileNumber: "",
  name: "",
  numberOfPeople: "",
  plantName: "",
  pwId: "",
  reason: "",
  typeOfVisit: "",
  address: "",
  namemore: "",
};

export const visitingInfoSlice = createSlice({
  name: "visitingInfo",
  initialState,
  reducers: {
    changeVisitingInfo: (state, action) => {
      state.visitingInfo = action.payload;
    },
    changetoDate: (state, action) => {
      state.toDate = action.payload;
    },
    changefromDate: (state, action) => {
      state.fromDate = action.payload;
    },
    changeemail: (state, action) => {
      state.email = action.payload;
    },
    changemobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    changename: (state, action) => {
      state.name = action.payload;
    },
    changenumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
    changeplantName: (state, action) => {
      state.plantName = action.payload;
    },
    changepwId: (state, action) => {
      state.pwId = action.payload;
    },
    changereason: (state, action) => {
      state.reason = action.payload;
    },
    changetypeOfVisit: (state, action) => {
      state.typeOfVisit = action.payload;
    },
    changeaddress: (state, action) => {
      state.address = action.payload;
    },
    changenamemore: (state, action) => {
      state.namemore = action.payload;
    },
  },
});

export const {
  changeaddress,
  changeVisitingInfo,
  changefromDate,
  changetoDate,
  changeemail,
  changemobileNumber,
  changename,
  changenumberOfPeople,
  changeplantName,
  changepwId,
  changereason,
  changetypeOfVisit,
  changenamemore,
} = visitingInfoSlice.actions;

export default visitingInfoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appData: [],
  projectData: [],
  contactUsData: [],
  visitUsData: [],
  salesEnquiryData: [],
  posdEnquiryData: [],
};

export const applicantDataSlice = createSlice({
  name: "applicantData",
  initialState,
  reducers: {
    changeAppData: (state, action) => {
      state.appData = action.payload;
    },
    changeProjectData: (state, action) => {
      state.projectData = action.payload;
    },
    changeContactData: (state, action) => {
      state.contactUsData = action.payload;
    },
    changeVisitUsData: (state, action) => {
      state.visitUsData = action.payload;
    },
    changeSalesEnquiryData: (state, action) => {
      state.salesEnquiryData = action.payload;
    },
    changePosdEnquiryData: (state, action) => {
      state.posdEnquiryData = action.payload;
    },
  },
});

export const {
  changeAppData,
  changeProjectData,
  changeContactData,
  changeVisitUsData,
  changeSalesEnquiryData,
  changePosdEnquiryData,
} = applicantDataSlice.actions;

export default applicantDataSlice.reducer;

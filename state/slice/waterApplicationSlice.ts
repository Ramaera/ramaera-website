import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // address: "",
  // appliedFor: "",
  // district: "",
  // email: "",
  // mobile: "",
  // name: "",
  // pwID: "",
  // state: "",

  name: "",
  email: "",
  mobile: "",
  altMobile: "",
  dob: "",
  aadhaar: "",
  state: "",
  district: "",
  pincode: "",
  address: "",
  pwid: "",
  firmName: "",
  firmRegistration: "",
  gst: "",
  bankName: "",
  bankAccount: "",
  bankIfsc: "",
  appliedFor: "",
  distributorArea: "",
};

export const waterApplicationSlice = createSlice({
  name: "waterApplication",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeMobile: (state, action) => {
      state.mobile = action.payload;
    },
    changeAltMobile: (state, action) => {
      state.altMobile = action.payload;
    },
    changeDOB: (state, action) => {
      state.dob = action.payload;
    },
    changeAadhaar: (state, action) => {
      state.aadhaar = action.payload;
    },
    changeState: (state, action) => {
      state.state = action.payload;
    },
    changeDistrict: (state, action) => {
      state.district = action.payload;
    },
    changePincode: (state, action) => {
      state.pincode = action.payload;
    },
    changeAddress: (state, action) => {
      state.address = action.payload;
    },
    changePWID: (state, action) => {
      state.pwid = action.payload;
    },
    changeFirmName: (state, action) => {
      state.firmName = action.payload;
    },
    changeFirmRegistration: (state, action) => {
      state.firmRegistration = action.payload;
    },
    changeGst: (state, action) => {
      state.gst = action.payload;
    },
    changeBankName: (state, action) => {
      state.bankName = action.payload;
    },
    changeBankAccount: (state, action) => {
      state.bankAccount = action.payload;
    },
    changeBankIfsc: (state, action) => {
      state.bankIfsc = action.payload;
    },
    changeAppliedFor: (state, action) => {
      state.appliedFor = action.payload;
    },
    changeDistributorArea: (state, action) => {
      state.distributorArea = action.payload;
    },
  },
});

export const {
  changeName,
  changeEmail,
  changeMobile,
  changeAltMobile,
  changeDOB,
  changeAadhaar,
  changeState,
  changeDistrict,
  changePincode,
  changeAddress,
  changePWID,
  changeFirmName,
  changeFirmRegistration,
  changeGst,
  changeBankName,
  changeBankAccount,
  changeBankIfsc,
  changeAppliedFor,
  changeDistributorArea,
} = waterApplicationSlice.actions;

export default waterApplicationSlice.reducer;

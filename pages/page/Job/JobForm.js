import { FormWrapper } from "./FormWrapper"
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import {
//   changeName,
//   changeApplicantType,
//   changeApplicantAddress,
//   changeEmail,
//   changeFirmName,
//   changeMobileNumber,
//   changeDistrict,
//   changeState,
//   changeExtraInfo
// } from "../../../state/slice/applicationSlice"

export function JobForm({}) {
  // const [partner, setPartner] = useState("")
  // const [stateIndia, setStateIndia] = useState("")
  // const [isFirm, setIsFirm] = useState(false)
  // const [district, setDistrict] = useState("")
  // const [location, setLocation] = useState([])
  // const [locationStock, setLocationStock] = useState([])
  // const dispatch = useDispatch()

  // const changeHandler = (val) => {
  //   setPartner(val)
  //   setDistrict("")
  // }
  // const changeStateIndia = (val) => {
  //   setStateIndia(val)
  //   setDistrict("")
  // }
  // const changeDistricts = async (val) => {
  //   setDistrict(val)
  // }
    
  return (
    <FormWrapper title="JOB POST">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}>
          Job Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />

      <div style={{ width: "500px" }}>
        <label>Job Type</label>
        <br />
        <select
          required
          // onChange={(e) => {
          //   changeHandler(e.target.value)
          //   dispatch(changeApplicantType(e.target.value))
          // }}
        >
          <option value={""} disabled selected>
            Select Job Type
          </option>
          <option value={""}>Marketing</option>
          <option value={""}>Development</option>
          <option value={""}>Product</option>
        </select>
      </div>

      <div style={{ width: "450px" }}>
        <label>Job Title</label>
        <br />
        <input
          required
          type="text"
          // onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type Job Title"
        />
      </div>
      
      <div style={{ width: "500px" }}>
        <label>Job location</label>
        <br />
        <select
          required
          // onChange={(e) => {
          //   changeHandler(e.target.value)
          //   dispatch(changeApplicantType(e.target.value))
          // }}
        >
          <option value={""} disabled selected>
            Select Job location
          </option>
          <option value={""}>Noida,IN</option>
          <option value={""}>Remote</option>
        </select>
      </div>

      <div style={{ width: "450px" }}>
        <label>Job Time Period</label>
        <br />
        <select
          required
          // onChange={(e) => {
          //   changeHandler(e.target.value)
          //   dispatch(changeApplicantType(e.target.value))
          // }}
        >
          <option value={""} disabled selected>
            Select Job Time Period
          </option>
          <option value={""}>Full Time</option>
          <option value={""}>Internship</option>
        </select>
      </div>

      <div style={{ width: "500px" }}>
        <label>Job Description</label>
        <br />
        <textarea
          required
          rows={5}
          cols={80}
          type="text"
          // onChange={(e) => dispatch(changeExtraInfo(e.target.value))}
          placeholder="Type Job Description"
        />
      </div>     
  
    </FormWrapper>
  )
}

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
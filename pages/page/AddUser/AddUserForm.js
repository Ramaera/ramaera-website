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

export function AddUserForm({}) {
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
    <FormWrapper title="ADD NEW USER">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}>
          Add New User Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />

      <div style={{ width: "500px" }}>
        <label>Role Type</label>
        <br />
        <select
          required
          // onChange={(e) => {
          //   changeHandler(e.target.value)
          //   dispatch(changeApplicantType(e.target.value))
          // }}
        >
          <option value={""} disabled selected>
            Select Role Type
          </option>
          <option value={""}>ADMIN</option>
          <option value={""}>EXECUTIVE</option>
          <option value={""}>HR</option>
          <option value={""}>SALES</option>
        </select>
      </div>

      <div style={{ width: "450px" }}>
        <label>Name</label>
        <br />
        <input
          required
          type="text"
          // onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type User Name"
        />
      </div>
      
      <div style={{ width: "500px" }}>
        <label>Email</label>
        <br />
        <input
          required
          type="email"
          // onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type User Email Id"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Password</label>
        <br />
        <input
          required
          type="password"
          // onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type User Password"
        />
      </div>
  
    </FormWrapper>
  )
}

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
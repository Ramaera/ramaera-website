import { FormWrapper } from "./FormWrapper"
import { useDispatch } from "react-redux"
import {
  changeemail,
  changemobileNumber,
  changename,
  changepwId,
  changefromDate,
  changetoDate,
  changeaddress,
} from "state/slice/visitingInfoSlice"
import { PwId } from "@/pages/VisitUs/pw_id"
import { useState } from "react"

export function VisitForm({}) {
  const [isDateChecked, setDateChecked] = useState(false)
  const dispatch = useDispatch()
  const checkPwId = (id) => {
    let UpperId = id.toUpperCase()
    UpperId = UpperId.split(/ /)[0].replace(/[^\d]/g, "")
    const check = PwId.includes(UpperId)
    if (check) {
      dispatch(changepwId("Board Member's Pw_Id : " + id))
    } else {
      dispatch(changepwId(""))
    }
  }
  return (
    <FormWrapper title="FIRST ANNUAL GENERAL MEET RAMAERA INDUSTRIES LIMITED">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label
          style={{
            fontSize: "1.3rem",
            opacity: ".9",
            fontWeight: "600",
            color: "#5a5a5a",
          }}
        >
          Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />
      <div style={{ width: "500px" }}>
        <label>Name</label>
        <br />
        <input
          placeholder="Name"
          required
          text
          onChange={(e) => {
            dispatch(changename("Board Member : " + e.target.value))
          }}
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Email</label>
        <br />
        <input
          required
          placeholder="Email"
          type="email"
          onChange={(e) => {
            dispatch(changeemail(e.target.value))
          }}
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Phone Number</label>
        <br />
        <input
          placeholder="Phone Number"
          required
          type="number"
          onChange={(e) => {
            dispatch(changemobileNumber(e.target.value))
          }}
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>PW ID</label>
        <br />
        <input
          required
          placeholder="PW ID"
          type="text"
          onChange={(e) => {
            checkPwId(e.target.value)
            // dispatch(changepwId(e.target.value))
          }}
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Coming From</label>
        <br />
        <textarea
          required
          rows={7}
          cols={80}
          type="text"
          onChange={(e) => {
            dispatch(changeaddress(e.target.value))
          }}
          placeholder="Coming From"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Date Of Visit</label>
        {/* <label style={{ marginLeft: "10px", paddingTop: "60px" }}>
          Please Select an option
        </label> */}
        <br />
        {/*  <input
          style={{ width: "20px" }}
          type="radio"
          id="7"
          name="date"
          value="7th and 8th May"
        />
        <label style={{ position: "absolute", marginLeft: "10px" }} for="7">
          7th and 8th May 2023
        </label>
        <br />*/}
        <input
          style={{ width: "20px" }}
          type="checkbox"
          id="7"
          required={!isDateChecked}
          name="date"
          value="7th May"
          onChange={(e) => {
            dispatch(changefromDate(e.target.checked ? e.target.value : ""))
            setDateChecked(e.target.checked)
          }}
        />
        <label style={{ position: "absolute", marginLeft: "10px" }} for="7">
          7th May 2023
        </label>
        <br />
        <input
          style={{ width: "20px" }}
          type="checkbox"
          id="8"
          required={!isDateChecked}
          name="date"
          value="8th May"
          onChange={(e) => {
            dispatch(changetoDate(e.target.checked ? e.target.value : ""))
            setDateChecked(e.target.checked)
          }}
        />
        <label style={{ position: "absolute", marginLeft: "10px" }} for="8">
          8th May 2023
        </label>

        {/* <input style={{ display: "none" }} required={!isDateChecked} /> */}
      </div>
    </FormWrapper>
  )
}

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage

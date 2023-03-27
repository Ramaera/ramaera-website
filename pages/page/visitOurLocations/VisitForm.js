import { FormWrapper } from "./FormWrapper"
import { useDispatch } from "react-redux"
import {
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
  changeaddress,
} from "state/slice/visitingInfoSlice"
import { useState } from "react"

export function VisitForm({}) {
  const [typeOfVisitor, setTypeOfVisitor] = useState("")
  const dispatch = useDispatch()

  return (
    <FormWrapper title="Visit Us">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label
          style={{
            fontSize: "1.3rem",
            opacity: ".9",
            fontWeight: "600",
            color: "#5a5a5a",
          }}
        >
          Visitor Details
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
            dispatch(changename(e.target.value))
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
        <label>Reason for Visit</label>
        <br />
        <textarea
          required
          rows={5}
          cols={80}
          type="text"
          onChange={(e) => {
            dispatch(changereason(e.target.value))
          }}
          placeholder="Reason for Visit"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Address</label>
        <br />
        <textarea
          required
          rows={5}
          cols={80}
          type="text"
          onChange={(e) => {
            dispatch(changeaddress(e.target.value))
          }}
          placeholder="Address"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Location of Visit</label>
        <br />
        <select
          required
          onChange={(e) => {
            dispatch(changeplantName(e.target.value))
          }}
        >
          <option value={""} disabled selected>
            Select Location
          </option>
          <option value={"Headoffice"}>Head Office (Noida)</option>
          <option value={"Factory"}>Spice Factory (Hajipur)</option>
        </select>
      </div>
      <div style={{ width: "450px" }}>
        <label>Type of Visitor</label>
        <br />
        <select
          required
          onChange={(e) => {
            setTypeOfVisitor(e.target.value)
            dispatch(changetypeOfVisit(e.target.value))
          }}
        >
          <option value={""} disabled selected>
            Select
          </option>
          <option value={"Planetway Community Member"}>
            Planetway Community Member
          </option>
          <option value={"Vendor"}>Vendor</option>
          <option value={"Other"}>Other</option>
        </select>
      </div>
      <div style={{ width: "500px" }}></div>
      <div style={{ width: "450px" }}>
        {typeOfVisitor === "Other" ? (
          <>
            <label>Please mention here...</label>
            <br />
            <input
              required
              placeholder="Other"
              type="text"
              onChange={(e) => {
                dispatch(changetypeOfVisit(e.target.value))
              }}
            />
          </>
        ) : null}
      </div>
      <div style={{ width: "500px" }}>
        <label>Date</label>
        <br />
        <input
          type="date"
          required
          onChange={(e) => {
            dispatch(changefromDate(e.target.value))
          }}
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Time</label>
        <br />
        <input
          type="time"
          required
          onChange={(e) => {
            dispatch(changetoDate(e.target.value))
          }}
        />
      </div>

      <div style={{ width: "500px" }}>
        <p style={{ fontSize: "12px" }}>
          <sup>*</sup>exact date of visit will be provided by us
        </p>
      </div>
      <div style={{ width: "450px" }}></div>
      <div style={{ width: "500px" }}>
        <label>PWID (Optional)</label>
        <br />
        <input
          placeholder="PWID (Optional)"
          type="text"
          onChange={(e) => {
            dispatch(changepwId(e.target.value))
          }}
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Number Of People</label>
        <br />
        <select
          required
          onChange={(e) => {
            dispatch(changenumberOfPeople(e.target.value))
          }}
        >
          <option value={""} disabled selected>
            Number Of People
          </option>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4+"}>4 or more</option>
        </select>
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
    </FormWrapper>
  )
}

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage

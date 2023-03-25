import { FormWrapper } from "./FormWrapper"
import { useDispatch } from "react-redux"
import {
  changedate,
  changeemail,
  changemobileNumber,
  changename,
  changenumberOfPeople,
  changeplantName,
  changepwId,
  changereason,
  changetypeOfVisit,
} from "state/slice/visitingInfoSlice"

export function VisitForm({}) {
  // const [partner, setPartner] = useState("")
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
          Visiting Details
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
        <label>Address</label>
        <br />
        <input
          placeholder="Address"
          required
          email
          /* onChange={(e) => {
            dispatch(changename(e.target.value))
          }} */
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
          <option value={"Ramaera"}>Ramaera (Noida)</option>
          <option value={"Plantsera"}>Plantsera (Hajipur)</option>
        </select>
      </div>
      <div style={{ width: "450px" }}>
        <label>Type of Visit</label>
        <br />
        <select
          required
          onChange={(e) => {
            dispatch(changetypeOfVisit(e.target.value))
          }}
        >
          <option value={""} disabled selected>
            Select
          </option>
          <option value={"Planerway"}>Planerway Member</option>
          <option value={"Vendor"}>Vendor</option>
        </select>
      </div>
      <div style={{ width: "500px" }}>
        <label>Date Range (from)</label>
        <br />
        <input
          type="date"
          required
          onChange={(e) => {
            dispatch(changedate(e.target.value))
          }}
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Date Range (to)</label>
        <br />
        <input
          type="date"
          required
          onChange={(e) => {
            dispatch(changedate(e.target.value))
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
        <input
          placeholder="Number Of People"
          type="number"
          onChange={(e) => {
            dispatch(changenumberOfPeople(e.target.value))
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
    </FormWrapper>
  )
}

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage

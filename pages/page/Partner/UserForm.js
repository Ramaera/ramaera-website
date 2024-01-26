import { FormWrapper } from "./FormWrapper"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  changeName,
  changeApplicantType,
  changeApplicantAddress,
  changeEmail,
  changeFirmName,
  changeMobileNumber,
  changeDistrict,
  changeState,
  changeExtraInfo,
} from "../../../state/slice/applicationSlice"
import distributionData from "config/distributionData"

const pdfLink =
  "https://drive.google.com/file/d/1aG8pYUr5AB4PYgHqWYa7AEq5D30bfIUp/view?usp=sharing"

export function UserForm({}) {
  const [partner, setPartner] = useState("")
  const [stateIndia, setStateIndia] = useState("")
  const [isFirm, setIsFirm] = useState(false)
  const [district, setDistrict] = useState("")
  const [location, setLocation] = useState([])
  const [locationStock, setLocationStock] = useState([])
  const dispatch = useDispatch()
  const changeHandler = (val) => {
    setStateIndia("")
    setPartner(val)
    setDistrict("")
  }
  const changeStateIndia = (val) => {
    setStateIndia(val)
    setDistrict("")
  }
  const changeDistricts = async (val) => {
    setDistrict(val)
  }
  const changeFirm = () => {
    setIsFirm(!isFirm)
  }
  const setRetailLocation = (val) => {
    setLocation(distributionData.distributorAreaCoverage[val] || [])
  }

  const setStokistLocation = (val) => {
    setLocationStock(distributionData.stockistAreaCoverage[val] || [])
  }

  return (
    <FormWrapper title="BECOME A PART OF OUR DISTRIBUTION CHANNEL">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label
          style={{
            fontSize: "1.3rem",
            opacity: ".9",
            fontWeight: "600",
            color: "#5a5a5a",
          }}
        >
          Personal Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />
      <div style={{ width: "500px" }}>
        <label>Applicant's Name (आवेदक का नाम)</label>
        <br />
        <input
          required
          type="text"
          onChange={(e) => dispatch(changeName(e.target.value))}
          placeholder="Type your name (अपना नाम लिखो)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Email (आवेदक का ईमेल) </label>
        <br />
        <input
          required
          type="email"
          onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type your email (अपना ईमेल लिखो)"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Address (पता)</label>
        <br />
        <input
          required
          type="text"
          onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type your address"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>State (राज्य)</label>
        <br />
        <input
          required
          type="text"
          // onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type your state"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Pincode (पिन कोड)</label>
        <br />
        <input
          required
          type="number"
          // onChange={(e) => dispatch(changeApplicantAddress(e.target.value))}
          placeholder="Type your pincode"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Mobile No. (आवेदक मोबाइल नं.)</label>
        <br />
        <input
          required
          type="number"
          onChange={(e) => dispatch(changeMobileNumber(e.target.value))}
          placeholder="Type Contact No."
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Extra Info (अतिरिक्त जानकारी)</label>
        <br />
        <textarea
          required
          rows={5}
          cols={80}
          type="text"
          onChange={(e) => dispatch(changeExtraInfo(e.target.value))}
          placeholder="Type Extra Info"
        />
      </div>

      <div style={{ width: "450px" }}></div>

      <div style={{ width: "500px", marginTop: "30px" }}>
        <label
          style={{
            fontSize: "1.3rem",
            opacity: ".9",
            fontWeight: "600",
            color: "#5a5a5a",
          }}
        >
          Application Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />
      <div style={{ width: "500px" }}>
        <label>Application (आवेदन)</label>
        <br />
        <select
          required
          onChange={(e) => {
            changeHandler(e.target.value)
            dispatch(changeApplicantType(e.target.value))
          }}
        >
          <option value={""} disabled selected>
            Select Application (चुनें)
          </option>
          <option value={"DISTRIBUTOR"}>Distributor (डिस्ट्रीब्यूटर)</option>
          <option value={"STOCKIST"}>Stockist (स्टॉकिस्ट)</option>
          {/*  <option value={application}>
            I am Interested for SuperMart Project (मुझे सुपरमार्ट प्रोजेक्ट में
              दिलचस्पी है)
              </option>
            <option value={application}>Other (अन्य)</option> */}
        </select>
      </div>
      {!isFirm && (
        <div style={{ width: "450px" }}>
          <label>Do you have a firm? (क्या आपके पास फर्म है?)</label>
          <br />
          <button
            style={{ padding: "5px", margin: "15px 0 0 0" }}
            onClick={() => {
              changeFirm()
            }}
          >
            Yes
          </button>
        </div>
      )}
      {isFirm && (
        <div style={{ width: "450px" }}>
          <label>Firm Name (फर्म का नाम)</label>
          <br />
          <input
            //required
            type="text"
            onChange={(e) => dispatch(changeFirmName(e.target.value))}
            placeholder="Type Firm's Name"
          />
        </div>
      )}

      {partner && (
        <div style={{ width: "500px" }}>
          <label>State (राज्य)</label>
          <br />
          <select
            required
            value={stateIndia}
            onChange={(e) => {
              changeStateIndia(e.target.value)
              setLocation("")
              setLocationStock("")
              dispatch(changeState(e.target.value))
            }}
          >
            <option disabled value={""} selected>
              Select State (चुनें)
            </option>
            {distributionData.states.map((state) => {
              return <option value={state.stateValue}>{state.stateName}</option>
            })}
          </select>
        </div>
      )}
      {partner && stateIndia && (
        <div style={{ width: "450px" }}>
          <label>Location (जगह)</label>
          <br />
          <select
            required
            value={district}
            onChange={(e) => {
              setStokistLocation(e.target.value)
              setRetailLocation(e.target.value)
              changeDistricts(e.target.value)
              dispatch(changeDistrict(e.target.value))
            }}
          >
            <option value={""} disabled selected>
              Select Location (जगह चुनें)
            </option>
            {distributionData[partner][stateIndia].map((location) => {
              return (
                <option
                  disabled={location.isDisabled || false}
                  value={location.locationValue}
                >
                  {location.locationName}
                </option>
              )
            })}
          </select>
        </div>
      )}

      {partner === "STOCKIST" && district && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Terms and Conditions
            </strong>
            <br />
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
              <img
                style={{ height: 40, marginTop: 10 }}
                src="/pdf.png"
                alt="terms pdf"
              />
            </a>
            <br />
            <strong> Expected Charges:</strong>
            <br />
            <br />
            Security Deposit (Refundable):
            <br />
            <strong>₹1.5 Lacs</strong>
            <sup> *</sup>{" "}
          </p>

          <p style={{ padding: " 10px 0" }}>
            Minimum Purchase Amount :
            <br />
            <strong>₹5.5 Lacs</strong>
            <sup> *</sup>
          </p>
        </div>
      )}
      {partner === "STOCKIST" && district && (
        <div style={{ width: "450px" }}>
          {locationStock[0] && (
            <p style={{ padding: " 10px 0" }}>
              Area Coverage:
              <br />
              <br />
              <p
                style={{
                  width: "350px",
                  padding: "0px",
                  textTransform: "capitalize",
                }}
              >
                {locationStock.map((loc) => {
                  return (
                    <>
                      <strong
                        style={{
                          overflowWrap: "wrap",
                        }}
                      >
                        {loc},{" "}
                      </strong>
                    </>
                  )
                })}
              </p>
            </p>
          )}
        </div>
      )}
      {partner === "DISTRIBUTOR" && district && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Terms and Conditions
            </strong>
            <br />
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
              <img
                style={{ height: 40, marginTop: 10 }}
                src="/pdf.png"
                alt="terms pdf"
              />
            </a>
            <br />
            <strong> Expected Charges:</strong>
            <br />
            <br />
            Security Deposit (Refundable):
            <br />
            <strong> ₹25 Thousand</strong>
            <sup> *</sup>{" "}
          </p>

          <p style={{ padding: " 10px 0" }}>
            Minimum Purchase Amount :
            <br />
            <strong>₹1.5 Lacs</strong>
            <sup> *</sup>
          </p>
        </div>
      )}
      {partner === "DISTRIBUTOR" && district && (
        <div style={{ width: "450px" }}>
          {location[0] && (
            <p style={{ padding: " 10px 0" }}>
              Area Coverage:
              <br />
              <br />
              <p
                style={{
                  width: "350px",
                  padding: "0px",
                  textTransform: "capitalize",
                }}
              >
                {location.map((loc) => {
                  return (
                    <>
                      <strong
                        style={{
                          overflowWrap: "wrap",
                        }}
                      >
                        {loc},{" "}
                      </strong>
                    </>
                  )
                })}
              </p>
            </p>
          )}
        </div>
      )}
      <div
        className="detailContact"
        style={{
          width: "500px",
          paddingTop: "7px",
          fontSize: "16px",
        }}
      >
        <br />
        <strong>Contact us:</strong>
        <br />
        E-Mail: sales@ramaera.in | Phone: +91-0120-4152818
      </div>
      <div
        className="detailContact"
        style={{ width: "450px", fontSize: "16px" }}
      >
        <br />
        <strong>संपर्क करें:</strong>
        <br />
        ई-मेल: sales@ramaera.in | फोन: +91-120-4152818
      </div>
      {partner && district && (
        <div style={{ width: "500px" }}>
          <p style={{ fontSize: "12px" }}>
            <sup>*</sup>All Data for the proposal purpose only,
            <br />
            It would be final as per demand and supply basis
          </p>
        </div>
      )}
    </FormWrapper>
  )
}
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage

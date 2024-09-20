import { FormWrapper } from "./FormWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
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
} from "../../../state/slice/waterApplicationSlice";

export function UserForm({}) {
  const [isPwid, setIsPwid] = useState(false);

  const [distributorArea, setDistributorArea] = useState("");
  const [appliedFor, setAppliedFor] = useState("");

  const dispatch = useDispatch();

  const handleAppliedFor = (val) => {
    setAppliedFor(val);
  };

  const handleDistributorArea = (val) => {
    setDistributorArea(val);
  };

  const dobVar = useSelector((state) => state.waterApplication.dob);

  return (
    <FormWrapper title="Water Distributor Form">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label
          style={{
            fontSize: "1.3rem",
            opacity: ".9",
            fontWeight: "600",
            color: "#5a5a5a",
          }}>
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
          type="text"
          onChange={(e) => dispatch(changeName(e.target.value))}
          placeholder="Type your name (अपना नाम लिखो)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Email (आवेदक का ईमेल) </label>
        <br />
        <input
          type="email"
          onChange={(e) => dispatch(changeEmail(e.target.value))}
          placeholder="Type your email (अपना ईमेल लिखो)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Applicant's Mobile No. (आवेदक का मोबाइल नं.)</label>
        <br />
        <input
          type="number"
          onChange={(e) => dispatch(changeMobile(e.target.value))}
          placeholder="Type your mobile no. (अपना नाम मोबाइल नं.)"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Alternate Mobile No. (वैकल्पिक मोबाइल नं.)</label>
        <br />
        <input
          type="number"
          onChange={(e) => dispatch(changeAltMobile(e.target.value))}
          placeholder="Type Alternate Mobile No. (वैकल्पिक मोबाइल नं.)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Applicant's DOB (आवेदक का जन्म तिथि)</label>
        <br />
        <DatePicker
          selected={dobVar}
          onChange={(date) => dispatch(changeDOB(date))}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/MM/yyyy"
        />

        {/* <input
          type="text"
          onChange={(e) => dispatch(changeDOB(e.target.value))}
          placeholder="Type your DOB (अपना जन्म तिथि)"
        /> */}
      </div>

      <div style={{ width: "450px" }}>
        <label>Applicant's Aadhaar No. (आवेदक का आधार नं.)</label>
        <br />
        <input
          type="number"
          onChange={(e) => dispatch(changeAadhaar(e.target.value))}
          placeholder="Type your Aadhaar No. (अपना  आधार नं.)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>State (राज्य)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeState(e.target.value))}
          placeholder="Type State (राज्य)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>District (ज़िला)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeDistrict(e.target.value))}
          placeholder="Type District (ज़िला)"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Pincode (पिन कोड)</label>
        <br />
        <input
          type="number"
          onChange={(e) => dispatch(changePincode(e.target.value))}
          placeholder="Type Pincode (पिन कोड)"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Are you 30% shareholders? (क्या आप 30% शेयरधारक हैं?)</label>
        <br />
        <button
          style={{
            padding: "5px",
            margin: "15px 0 0 0",
            borderRadius: "5px",
            background: isPwid && "orange",
          }}
          onClick={() => {
            setIsPwid(true);
            dispatch(changePWID(""));
          }}>
          Yes
        </button>

        <button
          style={{
            padding: "5px",
            margin: "15px 0 0 15px",
            borderRadius: "5px",
            background: !isPwid && "orange",
          }}
          onClick={() => {
            setIsPwid(false);
          }}>
          NO
        </button>
        {isPwid && (
          <div>
            <input
              //
              type="text"
              onChange={(e) => dispatch(changePWID(e.target.value))}
              placeholder="Type your PWID"
            />
          </div>
        )}
      </div>

      <div style={{ width: "450px" }}>
        <label>Address (पता)</label>
        <br />
        <textarea
          rows={5}
          cols={60}
          type="text"
          onChange={(e) => dispatch(changeAddress(e.target.value))}
          placeholder="Type Address (पता)"
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
          }}>
          Application Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />

      <div style={{ width: "500px" }}>
        <label>Firm Name (फर्म का नाम)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeFirmName(e.target.value))}
          placeholder="Type Firm's Name (फर्म का नाम)"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Firm Registration no. (फर्म का पंजीकरण नं.)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeFirmRegistration(e.target.value))}
          placeholder="Type Firm's Registration no. (फर्म का पंजीकरण नं.)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>GST no. (जीएसटी नं.)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeGst(e.target.value))}
          placeholder="Type GST no. (जीएसटी नं.)"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Bank Name (बैंक का नाम)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeBankName(e.target.value))}
          placeholder="Type Bank Name (बैंक का नाम)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Bank Account no. (बैंक खाता संख्या)</label>
        <br />
        <input
          type="number"
          onChange={(e) => dispatch(changeBankAccount(e.target.value))}
          placeholder="Type Bank Account no. (बैंक खाता संख्या)"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Bank Ifsc code (बैंक का आईएफएससी कोड)</label>
        <br />
        <input
          type="text"
          onChange={(e) => dispatch(changeBankIfsc(e.target.value))}
          placeholder="Type Bank Ifsc code (बैंक का आईएफएससी कोड)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Applied for (आवेदन)</label>
        <br />
        <select
          value={appliedFor}
          onChange={(e) => {
            handleAppliedFor(e.target.value);
            dispatch(changeAppliedFor(e.target.value));
          }}>
          <option value={""} disabled selected>
            Select (चुनें)
          </option>
          <option value={"WaterDistributor"}>
            Water Distributor (वाटर डिस्ट्रीब्यूटर)
          </option>
        </select>
      </div>
      {appliedFor === "WaterDistributor" && (
        <div style={{ width: "500px" }}>
          <label>Distributor Channel Area (डिस्ट्रीब्यूटर चैनल क्षेत्र)</label>
          <br />
          <select
            value={distributorArea}
            onChange={(e) => {
              handleDistributorArea(e.target.value);
              dispatch(changeDistributorArea(e.target.value));
            }}>
            <option value={""} disabled selected>
              Select (चुनें)
            </option>
            <option value={"CITYLEVEL"}>CITY LEVEL (डिस्ट्रीब्यूटर)</option>
            <option value={"BLOCKLEVEL"}> BLOCK LEVEL (स्टॉकिस्ट)</option>
            <option value={"DISTRICTLEVEL"}> DISTRICT LEVEL (स्टॉकिस्ट)</option>
            <option value={"METROPOLITANLEVEL"}>
              METROPOLITAN CITIES LEVEL(स्टॉकिस्ट)
            </option>
          </select>
        </div>
      )}
      {appliedFor === "WaterDistributor" && distributorArea === "CITYLEVEL" && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Terms and Conditions
            </strong>
            <br />
            <br />
            <strong> Expected Charges:</strong>
            <br />
            <br />
            Security Amount : <strong>₹1 Lakh</strong>
            <sup> *</sup>{" "}
          </p>
          <p style={{ padding: " 10px 0" }}>
            Product Value : <strong>₹1 Lakh</strong>
            <sup> *</sup>
          </p>
          <p style={{ padding: " 10px 0" }}>
            Total Deposit Amount : <strong>₹2 Lakh</strong>
            <sup> *</sup>
          </p>
        </div>
      )}

      {appliedFor === "WaterDistributor" &&
        distributorArea === "BLOCKLEVEL" && (
          <div style={{ width: "500px" }}>
            <p style={{ padding: " 10px 0" }}>
              <strong style={{ textDecoration: "underline" }}>
                {" "}
                Terms and Conditions
              </strong>
              <br />
              <br />
              <strong> Expected Charges:</strong>
              <br />
              <br />
              Security Amount : <strong>₹50 Thousand</strong>
              <sup> *</sup>{" "}
            </p>
            <p style={{ padding: " 10px 0" }}>
              Product Value : <strong>₹50 Thousand</strong>
              <sup> *</sup>
            </p>
            <p style={{ padding: " 10px 0" }}>
              Total Deposit Amount : <strong>₹1 Lakh</strong>
              <sup> *</sup>
            </p>
          </div>
        )}

      {appliedFor === "WaterDistributor" &&
        distributorArea === "DISTRICTLEVEL" && (
          <div style={{ width: "500px" }}>
            <p style={{ padding: " 10px 0" }}>
              <strong style={{ textDecoration: "underline" }}>
                {" "}
                Terms and Conditions
              </strong>
              <br />
              <br />
              <strong> Expected Charges:</strong>
              <br />
              <br />
              Security Amount : <strong>₹1 Lakh</strong>
              <sup> *</sup>{" "}
            </p>
            <p style={{ padding: " 10px 0" }}>
              Product Value : <strong>₹1 Lakh</strong>
              <sup> *</sup>
            </p>
            <p style={{ padding: " 10px 0" }}>
              Total Deposit Amount : <strong>₹2 Lakh</strong>
              <sup> *</sup>
            </p>
          </div>
        )}

      {appliedFor === "WaterDistributor" &&
        distributorArea === "METROPOLITANLEVEL" && (
          <div style={{ width: "500px" }}>
            <p style={{ padding: " 10px 0" }}>
              <strong style={{ textDecoration: "underline" }}>
                {" "}
                Terms and Conditions
              </strong>
              <br />
              <br />
              <strong> Expected Charges:</strong>
              <br />
              <br />
              Security Amount : <strong>₹2.5 Lakh</strong>
              <sup> *</sup>{" "}
            </p>
            <p style={{ padding: " 10px 0" }}>
              Product Value : <strong>₹2.5 Lakh</strong>
              <sup> *</sup>
            </p>
            <p style={{ padding: " 10px 0" }}>
              Total Deposit Amount : <strong>₹5 Lakh</strong>
              <sup> *</sup>
            </p>
          </div>
        )}

      <div style={{ width: "450px" }}></div>

      <div
        className="detailContact"
        style={{
          width: "500px",
          paddingTop: "7px",
          fontSize: "16px",
        }}>
        <br />
        <strong>Contact us:</strong>
        <br />
        E-Mail: sales@ramaera.in | Phone: +91-0120-4152818
      </div>
      <div
        className="detailContact"
        style={{ width: "450px", fontSize: "16px" }}>
        <br />
        <strong>संपर्क करें:</strong>
        <br />
        ई-मेल: sales@ramaera.in | फोन: +91-120-4152818
      </div>

      <div style={{ width: "500px" }}>
        <p style={{ fontSize: "12px" }}>
          <sup>*</sup>All Data for the proposal purpose only,
          <br />
          It would be final as per demand and supply basis
        </p>
      </div>
    </FormWrapper>
  );
}
const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;

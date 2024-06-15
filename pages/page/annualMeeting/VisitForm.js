import { FormWrapper } from "./FormWrapper";
import { useDispatch } from "react-redux";
import {
  changeemail,
  changemobileNumber,
  changename,
  changepwId,
  changefromDate,
  changetoDate,
  changeaddress,
  changenumberOfPeople,
  changenamemore,
} from "state/slice/visitingInfoSlice";
import { PwId } from "../../VisitUs/pw_id";
import { useEffect, useState } from "react";

const noOfMember = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ width: "500px" }}>
        <label>Enter All Name Separted by comma</label>
        <br />
        <textarea
          rows={1}
          cols={10}
          placeholder="Enter All Name, Separted by comma"
          text
          onChange={(e) => {
            dispatch(changenamemore("," + e.target.value));
          }}
        />
      </div>
      {/* <div style={{ width: "450px" }}>
        <label>City</label>
        <br />
        <input
          required
          placeholder="City"
          text
          onChange={(e) => {
            dispatch(changeaddress(" +" + e.target.value));
          }}
        />
      </div> */}
    </>
  );
};

export function VisitForm({}) {
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [isDateChecked, setDateChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changenamemore(""));
  }, []);
  return (
    <FormWrapper title="Annual General Meet">
      <div style={{ width: "500px", marginTop: "0px" }}>
        <div style={{ marginBottom: "40px" }}>
          Date : <span style={{ fontWeight: "bold" }}>1 / August / 2024</span>
        </div>
        <label
          style={{
            fontSize: "1.3rem",
            opacity: ".9",
            fontWeight: "600",
            color: "#5a5a5a",
          }}>
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
            dispatch(changename("Annual Meet: " + e.target.value));
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
            dispatch(changeemail(e.target.value));
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
            dispatch(changemobileNumber(e.target.value));
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
            dispatch(changepwId(e.target.value));
            // checkPwId(e.target.value)
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
            dispatch(changeaddress(e.target.value));
          }}
          placeholder="Coming From"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Number Of People</label>
        <br />
        <select
          required
          onChange={(e) => {
            dispatch(changenumberOfPeople(e.target.value));
            setNoOfPeople(e.target.value);
          }}>
          <option value={""} disabled selected>
            Number Of People
          </option>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
          <option value={"9"}>9</option>
          <option value={"10"}>10</option>
          <option value={"11"}>11</option>
          <option value={"12"}>12</option>
          <option value={"13"}>13</option>
          <option value={"14"}>14</option>
          <option value={"15"}>15</option>
          <option value={"16"}>16</option>
          <option value={"17"}>17</option>
          <option value={"18"}>18</option>
          <option value={"19"}>19</option>
          <option value={"20"}>20</option>
        </select>
        <br />
        {noOfPeople >= 1 && noOfMember()}
      </div>

      {/* {noOfPeople >= 1 && noOfMember()}
      {noOfPeople >= 2 && noOfMember()}
      {noOfPeople >= 3 && noOfMember()}
      {noOfPeople >= 4 && noOfMember()}
      {noOfPeople >= 5 && noOfMember()}
      {noOfPeople >= 6 && noOfMember()}
      {noOfPeople >= 7 && noOfMember()}
      {noOfPeople >= 8 && noOfMember()}
      {noOfPeople >= 9 && noOfMember()}
      {noOfPeople >= 10 && noOfMember()}
      {noOfPeople >= 11 && noOfMember()}
      {noOfPeople >= 12 && noOfMember()}
      {noOfPeople >= 13 && noOfMember()}
      {noOfPeople >= 14 && noOfMember()}
      {noOfPeople >= 15 && noOfMember()}
      {noOfPeople >= 16 && noOfMember()}
      {noOfPeople >= 17 && noOfMember()}
      {noOfPeople >= 18 && noOfMember()}
      {noOfPeople >= 19 && noOfMember()}
      {noOfPeople >= 20 && noOfMember()} */}

      {/* <div style={{ width: "450px" }}>
        <label>Date Of Visit</label>
       
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

       
      </div> */}
    </FormWrapper>
  );
}

const StyleImage = () => {
  return <div>StyleImage</div>;
};

export default StyleImage;

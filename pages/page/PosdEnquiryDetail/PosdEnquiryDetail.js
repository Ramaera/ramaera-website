import Link from "next/link";
import { FormWrapper } from "./FormWrapper";
import { Container } from "./PosdEnquiryDetailStyle.js";

const PosdEnquiryDetail = ({ posdEnquiryData }) => {
  try {
    return (
      <>
        <Container>
          <FormWrapper>
            <div
              className="divResponsive"
              tyle={{ width: "500px", marginTop: "30px" }}>
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
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Name </label>
              <br />
              <p>{posdEnquiryData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Email </label>
              <br />
              <p>{posdEnquiryData.email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Mobile No.</label>
              <br />
              <p>{posdEnquiryData.mobileNumber}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>PWID </label>
              <br />
              <p>{posdEnquiryData.pwid} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>No. of Persons (In POSD City)</label>
              <br />
              <p>{posdEnquiryData.Number_of_persons_in_POS_City}</p>
            </div>
          </FormWrapper>
        </Container>
      </>
    );
  } catch {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login">
          Login to continue
        </Link>
      </>
    );
  }
};

export default PosdEnquiryDetail;

import Link from "next/link";
import { FormWrapper } from "./FormWrapper";
import { Container } from "./SalesEnquiryDetailStyle.js";

const SalesEnquiryDetail = ({ salesEnquiryData }) => {
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
              <p>{salesEnquiryData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Email </label>
              <br />
              <p>{salesEnquiryData.email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Mobile No.</label>
              <br />
              <p>{salesEnquiryData.mobileNumber}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Product </label>
              <br />
              <p>{salesEnquiryData.product} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Remarks</label>
              <br />
              <p>{salesEnquiryData.remarks}</p>
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

export default SalesEnquiryDetail;

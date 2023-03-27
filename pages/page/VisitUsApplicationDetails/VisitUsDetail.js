import Link from "next/link"
import { FormWrapper } from "./FormWrapper"
import { Container } from "./VisitUsDetailStyle.js"

const ApplicationDetail = ({ VisitUsData }) => {
  console.log(VisitUsData)
  try {
    return (
      <>
        <Container>
          <FormWrapper>
            <div
              className="divResponsive"
              style={{ width: "500px", marginTop: "30px" }}
            >
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
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Name </label>
              <br />
              <p>{VisitUsData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label> Email </label>
              <br />
              <p>{VisitUsData.email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Reason for Visi </label>
              <br />
              <p>{VisitUsData.reason}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Address </label>
              <br />
              <p>{VisitUsData.address} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Location of Visit</label>
              <br />
              <p>{VisitUsData.plantName}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Type of Visit </label>
              <br />
              <p>{VisitUsData.typeOfVisit} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Date</label>
              <br />
              <p>{VisitUsData.date} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Time</label>
              <br />
              <p>{VisitUsData.time} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>PWID </label>
              <br />
              <p>{VisitUsData.pwId} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Number Of People </label>
              <br />
              <p>{VisitUsData.numberOfPeople} </p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Phone Number </label>
              <br />
              <p>{VisitUsData.mobileNumber} </p>
            </div>
            
          </FormWrapper>
        </Container>
      </>
    )
  } catch {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login"
        >
          Login to continue
        </Link>
      </>
    )
  }
}

export default ApplicationDetail

import Link from "next/link"
import { FormWrapper } from "./FormWrapper"
import { Container } from "./VisitUsDetailStyle.js"
import { UPDATE_VISIT_US } from "../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
import { useState, useEffect } from "react"
import Button from "@/components/Button/SubmitButton"

const ApplicationDetail = ({ VisitUsData }) => {
  const [UpdateVisitorForm] = useMutation(UPDATE_VISIT_US)

  const [isSubmitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [isRead, setRead] = useState(false)
  const [status, setStatus] = useState("")
  const [visitStatus, setVisitStatus] = useState("")
  useEffect(() => {
    try {
      setEmail(VisitUsData.email.split("%_%")[0])
      setRead(VisitUsData.email.split("%_%")[1].split("%~%")[0])
      setStatus(VisitUsData.email.split("%~%")[1].split("%*%")[0])
      setVisitStatus(VisitUsData.email.split("%*%")[1])
    } catch {
      setEmail(VisitUsData.email)
    }
  }, [VisitUsData])

  const handleSubmit = async () => {
    await UpdateVisitorForm({
      variables: {
        visitorID: VisitUsData.id,
        email: email + "%_%" + true + "%~%" + status + "%*%" + visitStatus,
      },
    })
    clearForm()
  }
  const clearForm = () => {
    setSubmitted(true)
    setTimeout(() => {
      history.back()
    }, "1500")
  }

  try {
    return (
      <>
        <Container>
          <FormWrapper>
            <div
              className="divResponsive"
              style={{ width: "500px", marginTop: "30px" }}
            >
              <br />
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
              <p>{email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Reason for Visit</label>
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
              <p>{VisitUsData.date.slice(0, 10)} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Time</label>
              <br />
              <p>{VisitUsData.date.slice(11)} </p>
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
              <br />
              <label>Status </label>
              <br />
              <select
                value={visitStatus}
                onChange={(e) => {
                  setVisitStatus(e.target.value)
                  console.log(e.target.value)
                }}
              >
                <option selected>Pending</option>
                <option>Cancelled</option>
                <option>Postponed</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Remarks </label>
              <br />
              <textarea
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
              />
            </div>
            <div className="divResponsive" style={{ width: "500px" }}></div>
            <button
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              onClick={() => {
                handleSubmit()
              }}
            >
              <Button fontSize="16px" Text="Submit" width="fit-content" />
            </button>
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

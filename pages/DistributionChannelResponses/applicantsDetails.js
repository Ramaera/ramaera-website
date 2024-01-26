import Link from "next/link"
import { FormWrapper } from "./FormWrapper"
import { Container } from "./applicantsDetailsStyle.js"
import { UPDATE_APPLICATIONS } from "../../apollo/queries/index"
import { useEffect, useState } from "react"
import { useMutation } from "@apollo/client"
import Button from "@/components/Button/SubmitButton"

const applicantsDetails = ({ AppData }) => {
  const [UpdateApplication] = useMutation(UPDATE_APPLICATIONS)

  const [isSubmitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [customOne, setCustomOne] = useState("")
  const [customTwo, setCustomTwo] = useState("")

  useEffect(() => {
    try {
      setEmail(AppData.email.split("%_%")[0])
      setCustomOne(AppData.email.split("%_%")[1].split("%~%")[0])
      setCustomTwo(AppData.email.split("%_%")[1].split("%~%")[1])
    } catch {
      setEmail(AppData.email)
    }
  }, [AppData])

  const handleSubmit = async () => {
    await UpdateApplication({
      variables: {
        applicationId: AppData.id,
        email: email + "%_%" + customOne + "%~%" + customTwo,
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

            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Applicant's Name </label>
              <br />
              <p>{AppData.name}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Applicant's Email </label>
              <br />
              <p>{email}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Applicant's Mobile No. </label>
              <br />
              <p>{AppData.mobileNumber}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Address</label>
              <br />
              <p>{AppData.applicantAddress}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Extra Info </label>
              <br />
              <p>{AppData.extraInfo} </p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}></div>

            <div
              className="divResponsive"
              style={{ width: "450px", marginTop: "30px" }}
            >
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
            <div className="divResponsive" style={{ width: "450px" }}></div>
            <hr className="lineHr1" />
            <hr className="lineHr2" />
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>Application </label>
              <br />
              <p>{AppData.applicantType}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>Firm Name</label>
              <br />
              <p>{AppData.applicantType}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label>State</label>
              <br />
              <p>{AppData.State}</p>
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              <label>District</label>
              <br />
              <p>{AppData.District}</p>
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Remarks
              </label>
              <br />
              <textarea
                onChange={(e) => setCustomOne(e.target.value)}
                type="text"
                name=""
                value={customOne}
                id=""
              />
            </div>
            <div className="divResponsive" style={{ width: "450px" }}>
              {/* <label
                style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
              >
                Custom 2
              </label>
              <br />
              <input
                onChange={(e) => setCustomTwo(e.target.value)}
                type="text"
                name=""
                value={customTwo}
                id=""
              /> */}
            </div>
            <div className="divResponsive" style={{ width: "500px" }}>
              {isSubmitted && <p style={{ color: "black" }}>Remarks Updated</p>}
              <button
                style={{
                  marginTop: "25px",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
                onClick={handleSubmit}
              >
                <Button Text="Submit" width="fit-content" />
              </button>
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

export default applicantsDetails

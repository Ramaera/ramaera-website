import { VisitForm } from "./VisitForm"
import Button from "../../../components/Button/SubmitButton"
import { VISIT_US_ANNUAL } from "../../../apollo/queries/visitUs"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container, ButtonContainer } from "./allJobStyle.js"
import { useState } from "react"

const VisitLocations = () => {
  const [clickOnce, setClickOnce] = useState(0)

  const [createGeneralMeetingVisitorForm] = useMutation(VISIT_US_ANNUAL)
  const fromDateVar = useSelector((state) => state.visitingInfo.fromDate)
  const toDateVar = useSelector((state) => state.visitingInfo.toDate)
  const emailVar = useSelector((state) => state.visitingInfo.email)
  const mobileNumberVar = useSelector(
    (state) => state.visitingInfo.mobileNumber
  )
  const nameVar = useSelector((state) => state.visitingInfo.name)
  const numberOfPeopleVar = useSelector(
    (state) => state.visitingInfo.numberOfPeople
  )
  const plantNameVar = useSelector((state) => state.visitingInfo.plantName)
  const pwIdVar = useSelector((state) => state.visitingInfo.pwId)
  const reasonVar = useSelector((state) => state.visitingInfo.reason)
  const typeOfVisitVar = useSelector((state) => state.visitingInfo.typeOfVisit)
  const addressVar = useSelector((state) => state.visitingInfo.address)
  const theDate = fromDateVar + " " + toDateVar
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(pwIdVar)
    if (clickOnce === 0) {
      try {
        await createGeneralMeetingVisitorForm({
          variables: {
            date: theDate,
            email: emailVar,
            mobileNumber: mobileNumberVar,
            name: nameVar,
            numberOfPeople: numberOfPeopleVar,
            plantName: plantNameVar,
            pwId: pwIdVar,
            reason: reasonVar,
            typeOfVisit: typeOfVisitVar,
            address: addressVar,
          },
        })
        toast.success(
          `Your Response has been submitted, Welcome to the Board Meeting`,
          {
            position: "top-center",
            autoClose: 3500,
            width: "600px",
            fontFamily: "monospace",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
        setClickOnce(2)
        clearForm()
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3500,
          width: "600px",
          fontFamily: "monospace",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }
  }
  const clearForm = () => {
    setTimeout(() => {
      location.reload()
    }, "4200")
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ToastContainer
          toastClassName="toast-font"
          style={{
            width: "600px",
            textAlign: "center",
            fontFamily:
              "Sans-serif,Times New Roman, Serif,Patrick Hand, cursive",
          }}
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            fontSize: ".8rem",
          }}
        ></div>
        <VisitForm />
        <ButtonContainer>
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="140px"
              height="2.75rem"
              Text="Submit"
              inheight="2.5rem"
            />
          </button>
        </ButtonContainer>
      </form>
    </Container>
  )
}

export default VisitLocations

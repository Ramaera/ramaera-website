import { VisitForm } from "./VisitForm"
import Button from "../../../components/Button/SubmitButton"
import { VISIT_US } from "../../../apollo/queries/visitUs"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container, ButtonContainer } from "./allJobStyle.js"
import { useState } from "react"

const VisitLocations = () => {
  const [createVisitorForm] = useMutation(VISIT_US)
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
  const theDate = fromDateVar + "," + toDateVar

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(theDate)
    createVisitorForm({
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
      },
    })
    clearForm()
  }
  const clearForm = () => {
    toast.success("We will contact you soon!", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    setTimeout(() => {
      location.reload()
    }, "3200")
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
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

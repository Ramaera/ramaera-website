import { useEffect, useState } from "react"
import { UserForm } from "./UserForm"
import Button from "../../../components/Button/SubmitButton"
import { CreateApplications } from "../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"

const Ideas = () => {
  const [createApplication, { data, loading, error }] =
    useMutation(CreateApplications)
  const name1 = useSelector((state) => state.application.name)
  const applicantType1 = useSelector((state) => state.application.applicantType)
  const applicantAddress1 = useSelector(
    (state) => state.application.applicantAddress
  )
  const email1 = useSelector((state) => state.application.email)
  const firmName1 = useSelector((state) => state.application.firmName)
  const mobileNumber1 = useSelector((state) => state.application.mobileNumber)
  const District1 = useSelector((state) => state.application.District)
  const State1 = useSelector((state) => state.application.State)

  /* const changeFinalData = (e) => {
    e.preventDefault()
    setFinalData({
      name: name,
      applicantType: applicantType,
      applicantAddress: applicantAddress,
      email: email,
      firmName: firmName,
      mobileNumber: mobileNumber,
      District: District,
      State: State,
    })
    console.log(finalData)
  } */
  /*   useEffect(() => {
    changeFinalData()
  }, [
    name,
    applicantType,
    applicantAddress,
    email,
    firmName,
    mobileNumber,
    District,
    State,
  ]) */

  const handleSubmit = (e) => {
    e.preventDefault()
    createApplication({
      variables: {
        name: name1,
        applicantType: applicantType1,
        applicantAddress: applicantAddress1,
        email: email1,
        firmName: firmName1,
        mobileNumber: mobileNumber1,
        District: District1,
        State: State1,
      },
    })
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        maxWidth: "max-content",
        color: "black",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            fontSize: ".8rem",
          }}
        ></div>
        <UserForm />
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="140px"
              height="2.75rem"
              Text="Submit"
              inheight="2.5rem"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ideas

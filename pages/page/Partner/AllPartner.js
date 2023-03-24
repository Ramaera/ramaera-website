import { UserForm } from "./UserForm"
import Button from "../../../components/Button/SubmitButton"
import { CREATE_APPLICATIONS } from "../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container, ButtonContainer } from "./allPartnerStyle.js"

const Ideas = () => {
  const [createApplication] = useMutation(CREATE_APPLICATIONS)
  const nameVar = useSelector((state) => state.application.name)
  const applicantTypeVar = useSelector(
    (state) => state.application.applicantType
  )
  const applicantAddressVar = useSelector(
    (state) => state.application.applicantAddress
  )
  const emailVar = useSelector((state) => state.application.email)
  const firmNameVar = useSelector((state) => state.application.firmName)
  const mobileNumberVar = useSelector((state) => state.application.mobileNumber)
  const DistrictVar = useSelector((state) => state.application.District)
  const StateVar = useSelector((state) => state.application.State)
  const extraInfoVar = useSelector((state) => state.application.extraInfo)

  const handleSubmit = (e) => {
    e.preventDefault()
    createApplication({
      variables: {
        name: nameVar,
        applicantType: applicantTypeVar,
        applicantAddress: applicantAddressVar,
        email: emailVar,
        firmName: firmNameVar,
        mobileNumber: mobileNumberVar,
        District: DistrictVar,
        State: StateVar,
        extraInfo: extraInfoVar,
      },
    })
    clearForm()
  }
  const clearForm = () => {
    toast.success("Application Submitted!", {
      position: "top-center",
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
        <UserForm />
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

export default Ideas

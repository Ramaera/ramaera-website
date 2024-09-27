import { JobForm } from "./JobForm"
import Button from "../../../components/Button/SubmitButton"
import { CREATE_JOB } from "../../../apollo/queries/createJob"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container, ButtonContainer } from "./allJobStyle.js"
import { use } from "react"

const AllJob = () => {
  const [createJob] = useMutation(CREATE_JOB)

  const department1 = useSelector((state) => state.jobApplication.department)
  const jobDescription1 = useSelector((state) => state.jobApplication.jobDescription)
  const jobLocation1 = useSelector((state) => state.jobApplication.jobLocation)
  const jobTitle1 = useSelector((state) => state.jobApplication.jobTitle)
  const jobType1 = useSelector((state) => state.jobApplication.jobType)
  const jobStatus1 = useSelector((state) => state.jobApplication.jobStatus)
  // const department1 = "det"
  // const jobDescription1 = "des"
  // const jobLocation1 = "loc"
  // const jobTitle1 = "tit"
  // const jobType1 ="tye"
  // const jobStatus1= "ACTIVE"
  const handleSubmit = (e) => {
    e.preventDefault()
    createJob({
      variables: {
        department: department1,
        jobDescription: jobDescription1,
        jobLocation: jobLocation1,
        jobTitle: jobTitle1,
        jobType: jobType1,
        jobStatus : jobStatus1,
      },
      
    })
     clearForm()
  }
  const clearForm = () => {
    toast.success("New Job Added Successfully!", {
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
        <JobForm />
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

export default AllJob

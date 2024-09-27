import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import SignUpForm from "../../page/Login/SignUpForm"

const index = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <SignUpForm />
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default index

import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import Footer from "../page/common/footer"
import VisitLocations from "../page/annualMeeting/VisitLocations"
import styled from "styled-components"

const HeightDiv = styled.div`
  height: 150px;
  @media only screen and (max-width: 510px) {
    height: 100px;
  }
`
const JobPost = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <HeightDiv />
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <VisitLocations />
        </PageWidth>
        <hr style={{ borderBottom: "1px solid white", width: "80vw" }} />
        <Footer />
      </PageLayout>
    </>
  )
}

export default JobPost

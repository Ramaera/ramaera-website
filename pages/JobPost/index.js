import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import PageWidth from "../../components/Width/PageWidth"
import Job from "../page/Job/AllJob"
import Footer from "../page/common/footer"

const JobPost = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div className="navSpace"></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <Job />
        </PageWidth>
        <hr style={{ borderBottom: "1px solid white", width: "80vw" }} />
        <Footer />
      </PageLayout>
    </>
  )
}

export default JobPost
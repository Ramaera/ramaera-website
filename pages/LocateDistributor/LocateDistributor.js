import Navbar from "../../components/Navbar/Navbar"
import PageLayout from "../../components/PageLayout/PageLayout"
import Footer from "../page/common/footer"
import DistributorForm from "./DistributorForm"

const LocateDistributor = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div className="navSpace"></div>
        <DistributorForm />
        <hr style={{ borderBottom: "1px solid white", width: "80vw" }} />
        <Footer />
      </PageLayout>
    </>
  )
}

export default LocateDistributor

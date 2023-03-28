import Navbar from "../../components/Navbar/Navbar"
import Footer from "../page/common/footer"
import Head from "next/head"
import Plantsera from "../page/Brands/Plantsera"

const index = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ramaera Industries - Our Brands</title>
      </Head>
      <Plantsera />
      <div style={{ height: "200px" }}></div>
      <Footer />
    </>
  )
}

export default index

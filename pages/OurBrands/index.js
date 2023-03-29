import Navbar from "../../components/Navbar/Navbar"
import Footer from "../page/common/footer"
import Head from "next/head"
import Plantsera from "../page/Brands/Plantsera"
import styled from "styled-components"

const Div = styled.div`
  height: 100px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const index = () => {
  return (
    <>
      <Head>
        <title>Ramaera Industries - Our Brands</title>
      </Head>
      <Navbar />
      <Div></Div>

      <Plantsera />
      <div style={{ height: "200px" }}></div>
      <Footer />
    </>
  )
}

export default index

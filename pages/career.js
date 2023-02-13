import Navbar from "../components/Navbar/Navbar"
import Footer from "./page/common/footer"
import Ramaera from "./page/common/ramaera"
import Investment from "./page/page4/investment"
import Empower from "./page/page4/empower"
import Dev from "./page/page4/dev"
import Product from "./page/page4/product"
import Marketing from "./page/page4/marketing"

const career = () => {
  return (
    <>
      <Navbar selectedTab={"career"} />
      <Ramaera imageIndex={3} />
      <Investment />
      <Marketing />
      <Dev />
      <Product />
      <Empower />
      <Footer />
    </>
  )
}

export default career

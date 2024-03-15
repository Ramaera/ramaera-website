import Navbar from "../../components/Navbar/Navbar";
import Footer from "../page/common/footer";
import Ramaera from "../page/common/ramaera";
import Investment from "../page/page4/investment";
import Empower from "../page/page4/empower";
import Dev from "../page/page4/dev";
import Product from "../page/page4/product";
import Marketing from "../page/page4/marketing";
import Talent from "../page/page4/talent";
import Family from "../page/page4/family";
import Head from "next/head";
import EarnSection from "../page/earn/EarnSection";
const Earn = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ramaera Industries - Earn</title>
      </Head>

      <EarnSection />

      <Footer />
    </>
  );
};

export default Earn;

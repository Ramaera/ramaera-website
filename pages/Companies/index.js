import Ramaera from "../page/common/ramaera";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../page/common/footer";
import Innovation from "../page/page3/Innovation/Innovation";
import Innitiatives from "../page/page3/Innitiatives/Innitiatives";
// import Brands from "../page/Brands";
import Values from "../page/page3/Values/Values";
import Contribution from "../page/page3/Contribution/Contribution";
import Partner from "../page/page3/Partner/Partner";
import Vision from "../page/page3/Vision/Vision";
import About from "../page/page3/About/About";
import Head from "next/head";

const companies = () => {
  return (
    <>
      <Head>
        <title>Ramaera Industries - Our Companies</title>
      </Head>
      <Navbar selectedTab={"companies"} />
      <Ramaera imageIndex={2} />
      <Innovation />
      <Innitiatives />
      {/* <Brands /> */}
      <Values />
      <Contribution />
      <Partner />
      <Vision />
      <About />
      <Footer />
    </>
  );
};

export default companies;

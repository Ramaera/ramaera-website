import Navbar from "../components/Navbar/Navbar";
import Footer from "./page/common/footer";
import Ramaera from "./page/common/ramaera";
import Colab from "./page/page5/colab";
import ColabHead from "./page/page5/colabHead";
import ColabBelow from "./page/page5/colabBelow";

const contact = () => {
  return (
    <>
      <ColabHead />
      <Colab />
      <ColabBelow />
      <Footer />
    </>
  );
};

export default contact;

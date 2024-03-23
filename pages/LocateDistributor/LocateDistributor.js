import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import PageLayout from "../../components/PageLayout/PageLayout";
import Footer from "../page/common/footer";
import DistributorForm from "./DistributorForm";
import Text from "../../components/Text/Text";
import styled from "styled-components";

const BtnDiv = styled.div`
  display: flex;
  justify-content: end;
  width: 93%;
 }
  @media (max-width: 600px) {
    width: 100%;
    margin-top:20px;
    justify-content: center;
  }
`;

const LocateDistributor = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div className="navSpace"></div>
        <BtnDiv>
          <Link href="/DistributionChannel">
            <div class="glow_button">
              <Text
                Text="Become a part of Distribution Channel"
                lg="linear-gradient(90deg, white 0%, white 100%)"
                font
                padding=" 0 "
                size="14px"
                msize="14px"
                align="center"
                mpadding="1vw"
              />
            </div>
          </Link>
        </BtnDiv>

        <DistributorForm />
        <hr style={{ borderBottom: "1px solid white", width: "80vw" }} />
        <Footer />
      </PageLayout>
    </>
  );
};

export default LocateDistributor;

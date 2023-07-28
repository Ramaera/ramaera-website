import Navbar from "../../components/Navbar/Navbar";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageWidth from "../../components/Width/PageWidth";
import Footer from "../page/common/footer";
import VisitLocations from "../page/annualMeeting/VisitLocations";
import styled from "styled-components";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import { useState } from "react";
import SouthIcon from "@mui/icons-material/South";
import CounterPage from "./timmer";

const HeightDiv = styled.div`
  height: 150px;
  @media only screen and (max-width: 510px) {
    height: 100px;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  @media only screen and (max-width: 510px) {
    flex-direction: column;
  }
`;

const ImgDiv = styled.div`
  width: 50%;
  padding: 5%;
  @media only screen and (max-width: 510px) {
    width: 80%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-bottom: 1rem;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const JobPost = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <HeightDiv />
        <div
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div>
            <div data-aos="zoom-in-up" data-aos-duration="800">
              <Text
                Text="You are heartly invited to"
                lg="linear-gradient(to right, #ffa73d, gold)"
                font
                size="clamp(2rem, 1.5vw, 2rem)"
                fw="400"
                align="center"
                lh="50px"
                m="0 0 1rem 0"
                xmsize="clamp(2.4rem, 1.5vw, 2rem)"
                xssize="clamp(2.4rem, 1.5vw, 2rem)"
                msize="1.1rem"
                mwidth="100%"
                mmwidth="100%"
                padding="0"
                mpadding="0"
                mta="center"
                mlh="unset"
              />
              <Text
                Text="Ramaera Grand Anniversary"
                lg="linear-gradient(to right, #ffa73d, gold)"
                font
                size="clamp(2rem, 1.5vw, 2rem)"
                fw="400"
                align="center"
                lh="50px"
                m="0 0 1rem 0"
                xmsize="clamp(2.4rem, 1.5vw, 2rem)"
                xssize="clamp(2.4rem, 1.5vw, 2rem)"
                msize="1.1rem"
                mwidth="100%"
                mmwidth="100%"
                padding="0"
                mpadding="0"
                mta="center"
                mlh="unset"
              />
              <CounterPage />
            </div>

            <CardDiv>
              <ImgDiv data-aos="slide-right" data-aos-duration="1200">
                <img
                  src="/content/anniversary.jpg"
                  alt="anniversary card"
                  style={{ width: "100%" }}
                />
              </ImgDiv>

              <ImgDiv data-aos="slide-left" data-aos-duration="1200">
                <img
                  src="/content/anniversaryBack.jpg"
                  alt="anniversary card"
                  style={{ width: "100%" }}
                />
              </ImgDiv>
            </CardDiv>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}>
            <h3>Click here to register for the 1st anniversary meeting.</h3>
            <SouthIcon style={{ fontSize: "50px", color: "orange" }} />
          </div>
          <a href="#register">
            <ButtonContainer onClick={() => setShow(true)}>
              <button
                style={{ background: "none", border: "none" }}
                type="submit">
                <Button
                  nav
                  width="140px"
                  height="2.75rem"
                  Text="Register"
                  inheight="2.5rem"
                />
              </button>
            </ButtonContainer>
          </a>
        </div>
        <div id="register">
          <PageWidth full scale={"95%"} width="1500px" position="relative">
            {show && <VisitLocations />}
          </PageWidth>
        </div>
        <hr style={{ borderBottom: "1px solid white", width: "80vw" }} />
        <Footer />
      </PageLayout>
    </>
  );
};

export default JobPost;

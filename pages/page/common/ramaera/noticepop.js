import React, { useState, useEffect } from "react";
import PageLayout from "../../../../components/PageLayout/PageLayout";
import PageWidth from "../../../../components/Width/PageWidth";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import MobileSocials from "./components/MobileSocials/MobileSocials";
import MobileTab from "./components/MobileTab/MobileTab";
import { Fragment } from "react";
import disableScroll from "disable-scroll";
import CancelPresentationIcon from "@mui/icons-material/Cancel";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import {
  images,
  text,
  images2,
  text2,
  images3,
  text3,
  images4,
  text4,
} from "./components/Style";
import Tab from "./components/Tab/Tab";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import UpcomingProject from "./components/UpcomingProjects";
import position from "../../page4/common/position";
const SmallSize = styled.div`
  transform: scale(0.8);
`;
const LinkTo = styled.a`
  cursor: pointer;
`;
const RotateTab = styled.div`
  @media only screen and (max-width: 768px) {
    /*  transform: scale(1);
    transform: rotateZ(90deg);
    margin-right: auto;
    margin-left: auto; */
    display: none;
  }
`;
const FullFloatingInside = styled.div`
  border-radius: 20px;
  background: linear-gradient(91deg, #000 0%, #3e3e3e 100%);
  height: 100%;
  width: 100%;
  // margin-left: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: unset;
    max-height: 100%;
    padding: 13% 0 5% 0;
  }
`;

const FestiveFloatingInside = styled.div`
  border-radius: 20px;
  background: linear-gradient(91deg, #000 0%, #3e3e3e 100%);
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    height: unset;
    max-height: 100%;
    padding: 0;
  }
`;
const FullFloating = styled.div`
  padding: 5% 8%;
  position: fixed;
  z-index: 101;
  height: 100vh;
  width: 100vw;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  @media only screen and (max-width: 1600px) {
    padding: 2rem;
  }
  @media only screen and (max-width: 1400px) {
    padding: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const FloatingProject = styled.div`
  cursor: pointer;
  z-index: 100;
  position: absolute;
  border-radius: 20px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background: #000;
  @media only screen and (max-width: 768px) {
    position: fixed;
    scale: 0.7;
    margin: 300px -10% 0 0;
  }
`;
const TabsWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    transform: scale(0.7);
  }
`;
const RotateSocials = styled.div`
  @media only screen and (max-width: 768px) {
    /*  transform: rotateZ(90deg);
    margin-right: 50%;
    margin-top: 0vh; */
    display: none;
  }
`;
const ImageHide = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductsImg = styled.img`
  width: 92%;
  margin: auto;
  border-radius: 10px;
  // @media only screen and (max-width: 768px) {
  //   height: 20vh;
  // }
`;

const pageNo = [images, images2, images3, images4];
const textNo = [text, text2, text3, text4];
const NoticePopup = ({ imageIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFloating, showFloating] = useState(true);
  const [imageNo, setImageNo] = useState(pageNo[imageIndex]);
  const [contextNo, setContextNo] = useState(textNo[imageIndex]);
  const { width, height } = useWindowSize();

  useEffect(() => {
    isFloating ? disableScroll.on() : disableScroll.off();
  }, [isFloating]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === imageNo.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageNo[currentIndex]]);

  // const festivalDate = new Date("2024-09-16");
  // const currentDate = new Date();
  // const isFestivalDay =
  //   currentDate.getDate() === festivalDate.getDate() &&
  //   currentDate.getMonth() === festivalDate.getMonth() &&
  //   currentDate.getFullYear() === festivalDate.getFullYear();

  const currentDate = new Date();
  const gandhiJayanti = new Date("2024-10-02");
  const navratriStart = new Date("2024-10-03");
  const navratriEnd = new Date("2024-10-11");

  let isFestivalDay = false;
  let festivalImg = "";

  // Check if it's 2nd October (Gandhi Jayanti)
  if (
    currentDate.getDate() === gandhiJayanti.getDate() &&
    currentDate.getMonth() === gandhiJayanti.getMonth() &&
    currentDate.getFullYear() === gandhiJayanti.getFullYear()
  ) {
    isFestivalDay = true;
    festivalImg = "/festival/2ndOctober.jpeg";
  }
  // Check if it's between 3rd October and 11th October (Navratri)
  else if (currentDate >= navratriStart && currentDate <= navratriEnd) {
    isFestivalDay = true;
    festivalImg = "/festival/navratri.jpeg";
  } else {
    isFestivalDay = false;
  }

  return (
    <Fragment>
      {isFloating ? (
        <FullFloating
        //   onClick={() => {
        //     showFloating(false);
        //   }}
        >
          <Confetti
            recycle={false}
            numberOfPieces={300}
            width={width}
            height={height}
          />

          <div
            onClick={() => {
              showFloating(false);
            }}
            style={{ position: "relative" }}>
            <CancelPresentationIcon
              sx={{
                position: "absolute",
                right: 0,
                margin: 0.5,
                fontSize: 50,
                color: "orange",
                cursor: "pointer",
                zIndex: 10,
                pb: 1,
              }}
            />
          </div>
          {isFloating ? (
            <>
              {isFestivalDay ? (
                <FestiveFloatingInside>
                  <Image
                    src={festivalImg}
                    // src="/festival/2ndOctober.jpeg"
                    width={0}
                    height={0}
                    // sizes="80vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    alt="Ramaera Post"
                  />
                </FestiveFloatingInside>
              ) : (
                <FullFloatingInside>
                  <Text
                    Text="Newly Launched  Products"
                    lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
                    font
                    size="44px"
                    lh="20px"
                    width="fit"
                    fw="500"
                    mlh="30px"
                    mwidth="100vw"
                    align="center"
                    xmsize="32px"
                    xssize="24px"
                    msize="22px"
                    mpadding="2% 10% 2% 2%"
                  />
                  <ProductDiv>
                    <ProductsImg src="/background/ramaeraProducts.webp" />
                  </ProductDiv>
                  <Text
                    Text="Welcome to the future of technology at Ramaera Electronics! We are delighted to introduce you to our latest lineup of groundbreaking products, each designed to elevate your lifestyle and meet the demands of modern living. Explore the future with Ramaera TV, Oxiair AC, Ramaera's Electronic Scooty, Ramaera Smart Immersion Rod, and Ramaera 8 Stage RO with Cooling."
                    padding="0 2vw "
                    color="#FFF"
                    size="1.5rem"
                    lh="30px"
                    fw="400"
                    m="1rem 0"
                    mmargin="0"
                    align="center"
                    xmsize="1.1rem"
                    xssize="2rem"
                    msize="0.8rem"
                    mta="left"
                    mpadding="5% 15% 3% 5% "
                    mlh="30px"
                  />

                  <Link
                    href="/Companies#Products"
                    style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      Text="Enquiry Now"
                      secondary
                      lightborder
                      height="45px"
                      m="0 0 0.5rem 0"
                      bborder="2px solid white"
                      secondaryWidth="11rem"
                    />
                  </Link>
                </FullFloatingInside>
              )}
            </>
          ) : (
            ""
          )}
        </FullFloating>
      ) : (
        ""
      )}

      {/* <PageLayout bgColor="#fff">
        <div>
          <Image
            src={imageNo[currentIndex]}
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <SmallSize>
            <PageWidth width="1500px" padding="8rem 0 0 0" position="relative">
              <Text
                Text="Ramaera Industries"
                lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
                font
                size="96px"
                lh="125px"
                width="50rem"
                mwidth="100vw"
                fw="500"
                mlh="80px"
                align="center"
                xmsize="6rem"
                xssize="10vw"
                msize="13vmin"
                mmargin=" 0 0 2rem 0"
              />

              {contextNo[currentIndex]}
              <LinkTo href={"#" + imageIndex}>
                <Button
                  Text="Explore more"
                  secondary
                  lightborder
                  height="60px"
                  m="2rem 0 0 0"
                  bborder="2px solid white"
                />
              </LinkTo>
              <ImageHide>
                <img
                  loading="lazy"
                  src="/background/bottom.png"
                  alt="background bottom"
                  style={{
                    height: "7rem",
                    width: "9.5rem",
                    margin: "1rem 0 0 0",
                  }}
                />
              </ImageHide>
            </PageWidth>
          </SmallSize>
          <RotateSocials>
            <SocialMedia />
          </RotateSocials>
        </div>
      </PageLayout>
      <MobileSocials /> */}
      {/*  <TabsWrapper>
        <MobileTab currentIndex={currentIndex} />
      </TabsWrapper> */}
    </Fragment>
  );
};

export default NoticePopup;

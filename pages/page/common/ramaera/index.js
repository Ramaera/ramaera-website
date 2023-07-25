import React, { useState, useEffect } from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/Button"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import MobileSocials from "./components/MobileSocials/MobileSocials"
import MobileTab from "./components/MobileTab/MobileTab"
import { Fragment } from "react"
import disableScroll from "disable-scroll"

import {
  images,
  text,
  images2,
  text2,
  images3,
  text3,
  images4,
  text4,
} from "./components/Style"
import Tab from "./components/Tab/Tab"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import UpcomingProject from "./components/UpcomingProjects"
const SmallSize = styled.div`
  transform: scale(0.8);
`
const LinkTo = styled.a`
  cursor: pointer;
`
const RotateTab = styled.div`
  @media only screen and (max-width: 768px) {
    /*  transform: scale(1);
    transform: rotateZ(90deg);
    margin-right: auto;
    margin-left: auto; */
    display: none;
  }
`
const FullFloatingInside = styled.div`
  border-radius: 20px;
  background: linear-gradient(91deg, #000 0%, #3e3e3e 100%);
  height: 100%;
  width: 100%;
`
const FullFloating = styled.div`
  padding: 200px;
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
  @media only screen and (max-width: 768px) {
  }
`
const FloatingProject = styled.div`
  cursor: pointer;
  z-index: 100;
  position: fixed;
  border-radius: 20px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background: #000;
  @media only screen and (max-width: 768px) {
  }
`
const TabsWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    transform: scale(0.7);
  }
`
const RotateSocials = styled.div`
  @media only screen and (max-width: 768px) {
    /*  transform: rotateZ(90deg);
    margin-right: 50%;
    margin-top: 0vh; */
    display: none;
  }
`
const ImageHide = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const pageNo = [images, images2, images3, images4]
const textNo = [text, text2, text3, text4]
const index = ({ imageIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFloating, showFloating] = useState(false)
  const [imageNo, setImageNo] = useState(pageNo[imageIndex])
  const [contextNo, setContextNo] = useState(textNo[imageIndex])

  useEffect(() => {
    isFloating ? disableScroll.on() : disableScroll.off()
  }, [isFloating])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === imageNo.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 3000)

    return () => clearInterval(intervalId)
  }, [imageNo[currentIndex]])

  return (
    <Fragment>
      {isFloating ? (
        <FullFloating
          onClick={() => {
            showFloating(false)
          }}
        >
          <FullFloatingInside>
            <Text
              Text="Upcoming Projects"
              lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
              font
              size="44px"
              lh="20px"
              width="fit"
              fw="500"
              mlh="80px"
              align="center"
              xmsize="32px"
              xssize="24px"
              msize="13vmin"
              mmargin=" 0 0 2rem 0"
            />
            <Text
              Text="AGRA MART"
              lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
              font
              size="36px"
              lh="20px"
              width="fit"
              fw="500"
              mlh="80px"
              align="center"
              xmsize="28px"
              xssize="22px"
              msize="13vmin"
              mmargin=" 0 0 2rem 0"
            />
            <Text
              Text="Agra Mart offer a wide range of basic home and personal products under one roof. Our core objective is to offer customers good products at great value."
              padding="0 10vw "
              color="#FFF"
              size="2rem"
              lh="50px"
              fw="400"
              m="1rem 0 3rem 0"
              align="center"
              xmsize="2.2rem"
              xssize="2rem"
              msize="1.3rem"
              mta="center"
              mwidth="100vw"
              mlh="40px"
            />
          </FullFloatingInside>
        </FullFloating>
      ) : (
        <FloatingProject
          onClick={() => {
            showFloating(true)
          }}
        >
          <UpcomingProject />
        </FloatingProject>
      )}

      <PageLayout bgColor="#fff">
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
          {/* <RotateTab>
            <Tab currentIndex={currentIndex} />
          </RotateTab> */}
        </div>
      </PageLayout>
      <MobileSocials />
      <TabsWrapper>
        <MobileTab currentIndex={currentIndex} />
      </TabsWrapper>
    </Fragment>
  )
}

export default index

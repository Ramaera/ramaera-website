import React, { useEffect } from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import styled from "styled-components"

const PolyBg = styled.div`
  left: 0;
  position: absolute;
  z-index: -1;
  @media only screen and (max-width: 1000px) {
    opacity: 50%;
  }
`
const Image = styled.img`
  height: 70vh;
  @media only screen and (max-width: 1000px) {
    height: 80vw;
  }
`

const Buy = () => {
  return (
    <div id="0">
      <PageLayout mtpadding="5vh" mheight="40vh">
        <PageWidth scale={"90%"} width="1500px">
          <div
            data-aos="fade-up"
            data-aos-easing="fade-down"
            data-aos-duration="100"
          >
            <Text
              Text="The Ramaera Expansion"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="4rem"
              fw="400"
              align="center"
              lh="60px"
              xmsize="4rem"
              xssize="4rem"
              msize="3.2rem"
              padding="0"
            />
            <Text
              Text="We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT."
              padding="0"
              color="#FFF"
              size="2.2rem"
              lh="50px"
              fw="400"
              m="2rem 0 3rem 0"
              align="center"
              width="1100px"
              xmsize="2.2rem"
              xssize="2rem"
              msize="1.3rem"
              mta="center"
              mwidth="100vw"
              mlh="40px"
            />
          </div>
        </PageWidth>
        <PolyBg>
          <Image
            src={"/background/rightPoly.png"}
            alt="right polygon background"
          />
        </PolyBg>
      </PageLayout>
    </div>
  )
}

export default Buy

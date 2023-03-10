import styled from "styled-components"
import Text from "../../../../../components/Text/Text"

const Bg = styled.div`
  margin-top: 10rem;
  background-image: url("/background/curve.png");
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 120vh;
  width: 100vw;
  z-index: -1;
  @media only screen and (max-width: 1200px) {
    background: transparent;
  }
`

const TextContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 300px;
  text-align: center;
`
const CustomBg = () => {
  return (
    <>
      <TextContainer>
        <Text
          Text="faqs"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          size="55px"
          fw="400"
          align="center"
          lh="45px"
          xmsize="4rem"
          xssize="6vw"
          msize="2.4rem"
        />
      </TextContainer>
      <Bg />
    </>
  )
}

export default CustomBg

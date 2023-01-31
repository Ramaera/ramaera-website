import React from "react"
import styled from "styled-components"

const BgWrapper = styled.div`
  height: 80vh;
`
const Image1 = styled.div`
  left: 500px;
  position: absolute;
  height: 60vh;
  opacity: 0.4;
`
const Image3 = styled.div`
  left: 100px;
  position: absolute;
  bottom: 277.5px;
  height: 328px;
  position: absolute;
  opacity: 0.4;
`
const Image2 = styled.div`
  position: absolute;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  opacity: 0.8;
`
const ImageTextContainer = styled.div`
  text-shadow: 1px 1px #000;

  text-align: center;
  color: white;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 500px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`
const ImageTextHead = styled.p`
  font-size: 36px;
  font-weight: 900;
`
const ImageTextPara = styled.p`
  padding: 0 100px;
  line-height: 30px;
  margin: 22px;
  font-weight: 600;
`
const Images = () => {
  return (
    <>
      <BgWrapper>
        <Image3>
          <img src="/content/tom3.png" />
        </Image3>
        <Image1>
          <img src="/content/tom1.png" />
        </Image1>
        <Image2>
          <img src="/content/tom2.png" />
        </Image2>
        <ImageTextContainer>
          <ImageTextHead>
            Ramaera Narmada - an ode to the Grandeur of Gujarat
          </ImageTextHead>
          <ImageTextPara>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </ImageTextPara>
        </ImageTextContainer>
      </BgWrapper>
    </>
  )
}

export default Images

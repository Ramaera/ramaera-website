import React from "react"
import styled from "styled-components"

const Images = () => {
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
    top: 365px;
    position: absolute;
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

  return (
    <>
      <BgWrapper>
        <Image3>
          <img src="/content/tom3.png" />{" "}
        </Image3>
        <Image1>
          <img src="/content/tom1.png" />{" "}
        </Image1>
        <Image2>
          <img src="/content/tom2.png" />{" "}
        </Image2>
      </BgWrapper>
    </>
  )
}

export default Images

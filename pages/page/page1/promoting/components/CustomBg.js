import styled from "styled-components"

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
const CustomBg = () => {
  return <Bg />
}

export default CustomBg

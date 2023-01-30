import styled from "styled-components"

const Circle = () => {
  const Image = styled.img`
    position: absolute;
    height: 25vw;
    top: 280px;
    left: 100px;
  `
  return <Image src="/content/promtCircle.png" alt="" />
}

export default Circle

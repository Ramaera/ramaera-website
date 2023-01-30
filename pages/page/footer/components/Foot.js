import React from "react"
import styled from "styled-components"

const Foot = () => {
  const FootContainer = styled.div`
    position: absolute;
    bottom: 160px;
    left: 10vw;
    color: white;
  `
  const Link = styled.a`
    font-size: 10px;
    margin-bottom: 1rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
  `
  const Hr = styled.hr`
    position: absolute;
    bottom: 160px;
    left: 10vw;
    color: white;
    height: 2px;
    width: 80vw;
    background: #fff;
  `

  return (
    <>
      <Hr />
      <FootContainer>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Use</Link>
        <Link href="#">Sales and Refunds</Link>
        <Link href="#">Legal</Link>
        <Link href="#">Site Map</Link>
      </FootContainer>
    </>
  )
}

export default Foot

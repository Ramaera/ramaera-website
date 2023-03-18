import styled from "styled-components"
import Text from "../../../../../components/Text/Text"
import NextLink from "next/link"

const d = new Date()
let year = d.getFullYear()
const FootContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  display: flex;
  gap: 50px;
  bottom: 100px;
  left: 10vw;
  color: white;
  @media only screen and (max-width: 1200px) {
    left: auto;
    right: auto;
    gap: 20px;
  }
  @media only screen and (max-width: 768px) {
    position: static;
    height: 10px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media only screen and (max-width: 450px) {
    gap: 10px;
  }
`
const Link = styled(NextLink)`
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
const CopyRight = styled.div`
  position: absolute;
  font-weight: 100;
  bottom: 110px;
  left: 900px;
  color: white;
  height: 2px;
  width: 80vw;
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  @media only screen and (max-width: 768px) {
    width: fit-content;
    left: auto;
    right: auto;
    bottom: 80px;
  }
`
const Foot = () => {
  return (
    <>
      <Hr />
      <FootContainer>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/DistributionChannel">
          <div className="glow_button">
            <Text
              Text="Become a part of Distribution Channel"
              lg="linear-gradient(90deg, white 0%, white 100%)"
              font
              padding=" 0 "
              size="14px"
              msize="14px"
              align="center"
            />
          </div>
        </Link>
        <Link href="/legal">Legal</Link>
        {/* <Link href="#">Site Map</Link> */}
      </FootContainer>
      <CopyRight>© {year} All Rights Reserved</CopyRight>
    </>
  )
}

export default Foot

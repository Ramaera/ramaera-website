import styled from "styled-components"
import Link from "next/link"
const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: top;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    text-align: center;
  }
`
const Div = styled.div`
  text-transform: uppercase;
  margin: auto;
  display: flex;
  text-align: center;
  padding-bottom: 220px;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    padding-bottom: 20px;
  }
`
const Linked = styled(Link)`
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: whitesmoke;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`

const Heading = styled.h3`
  text-decoration: underline;
  font-size: 16px;
  color: white;
  margin-bottom: 2rem;
`
export const SubHeading = styled.h3`
  color: white;
  margin-bottom: 1rem;
`
export const SubText = styled.h3`
  color: white;
  font-weight: 100;
  font-size: 8px;
  line-height: 16px;
`
export const Input = styled.input`
  margin-bottom: 1rem;
  height: 35px;
  border: 1.5px solid #ffffff;
  border-radius: 6px;
  padding-left: 1rem;
  @media only screen and (max-width: 1000px) {
    padding-left: 0;
    width: 100%;
  }
`
const MobileDiv = styled.div`
  display: flex;
  gap: 4rem;

  @media only screen and (max-width: 1000px) {
    display: flex;
    gap: 20vw;
  }
`
export const Sub = styled.div`
  color: white;
  padding: 2rem;
  width: 250px;
  height: 200px;
  margin-left: 3rem;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: rgba(63, 63, 63, 0.3);
  @media only screen and (max-width: 1000px) {
    overflow: hidden;
    width: 40vw;
    margin: 0 0 20px 0;
  }
  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin: 0 0 20px 0;
    padding-bottom: 50px;
  }
`

export const DispFlex = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  @media only screen and (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
  }
`

const Links = () => {
  return (
    <Container>
      {/* <MobileDiv>
        <Div>
          <Heading>Product</Heading>
          <Linked href="#">Landing Page</Linked>
          <Linked href="#">Popup Builder</Linked>
          <Linked href="#">Web-design</Linked>
          <Linked href="#">Content</Linked>
          <Linked href="#">Integrations</Linked>
        </Div>
        <Div>
          <Heading href="#">Use Cases</Heading>
          <Linked href="#">Web-designers</Linked>
          <Linked href="#">Marketers</Linked>
          <Linked href="#">Small Business</Linked>
          <Linked href="#">Website Builder</Linked>
        </Div>
      </MobileDiv> */}
      <MobileDiv>
        {/* <Div>
          <Heading href="#">Resources</Heading>
          <Linked href="#">Academy</Linked>
          <Linked href="#">Blog</Linked>
          <Linked href="#">Themes</Linked>
          <Linked href="#">Hosting</Linked>
          <Linked href="#">Developers</Linked>
          <Linked href="#">Support</Linked>
        </Div> */}
        <Div>
          <Heading href="">Links</Heading>
          <Linked href="/PrivacyPolicy">Privacy Policy</Linked>
          <Linked href="/TermsAndConditions">Terms & Conditions</Linked>
          <Linked href="/Legal">Legal</Linked>
          <Linked href="/Login">Login</Linked>
          <Linked href="/VisitUs">Visit Us</Linked>
        </Div>
        {/* <Div>
          <Heading href="#">Company</Heading>
          <Linked href="#">About Us</Linked>
          <Linked href="#">Careers</Linked>
          <Linked href="#">FAQs</Linked>
          <Linked href="/gallery">Teams</Linked>
          <Linked href="#">Contact Us</Linked>
        </Div> */}
      </MobileDiv>
    </Container>
  )
}

export default Links

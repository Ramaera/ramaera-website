import styled from "styled-components"

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
  display: flex;
  padding-bottom: 220px;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    padding-bottom: 20px;
  }
`
const Link = styled.a`
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  @media only screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`
const Heading = styled.h3`
  font-size: 16px;
  color: white;
  margin-bottom: 2rem;
`
const SubHeading = styled.h3`
  color: white;
  margin-bottom: 1rem;
`
const SubText = styled.h3`
  color: white;
  font-weight: 100;
  font-size: 8px;
  line-height: 16px;
`
const Input = styled.input`
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
const Sub = styled.div`
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

const Links = () => {
  return (
    <Container>
      <Sub>
        <SubHeading>Subscribe</SubHeading>
        <form action="">
          <Input placeholder="Email Adddress" />
        </form>
        <SubText>
          Hello, we are Lift Media. Our goal is to translate the positive
          effects from revolutionizing how companies engage with their clients &
          their team.
        </SubText>
      </Sub>
      <MobileDiv>
        <Div>
          <Heading>Product</Heading>
          <Link href="#">Landing Page</Link>
          <Link href="#">Popup Builder</Link>
          <Link href="#">Web-design</Link>
          <Link href="#">Content</Link>
          <Link href="#">Integrations</Link>
        </Div>
        <Div>
          <Heading href="#">Use Cases</Heading>
          <Link href="#">Web-designers</Link>
          <Link href="#">Marketers</Link>
          <Link href="#">Small Business</Link>
          <Link href="#">Website Builder</Link>
        </Div>
      </MobileDiv>
      <MobileDiv>
        <Div>
          <Heading href="#">Resources</Heading>
          <Link href="#">Academy</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Themes</Link>
          <Link href="#">Hosting</Link>
          <Link href="#">Developers</Link>
          <Link href="#">Support</Link>
        </Div>
        <Div>
          <Heading href="#">Company</Heading>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Teams</Link>
          <Link href="#">Contact Us</Link>
        </Div>
      </MobileDiv>
    </Container>
  )
}

export default Links

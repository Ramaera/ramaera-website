import styled from "styled-components"

const Image = styled.img`
  height: 20px;
  margin: 5px;
`
const SocialHead = styled.h4`
  font-size: 14px;
  margin-left: 5px;
  color: white;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
const SocialContainer = styled.div`
  position: absolute;
  bottom: 80px;
  right: 150px;
  @media only screen and (max-width: 1200px) {
    bottom: 20px;
    right: auto;
    left: auto;
  }
`
const Socials = () => {
  return (
    <SocialContainer>
      <SocialHead>Let's Do it!</SocialHead>
      <a href="#">
        <Image src="/content/social-5.png" />
      </a>
      <a href="#">
        <Image src="/content/social-4.png" />
      </a>
      <a href="#">
        <Image src="/content/social-3.png" />
      </a>
      <a href="#">
        <Image src="/content/social-2.png" />
      </a>
      <a href="#">
        <Image src="/content/social.png" />
      </a>
    </SocialContainer>
  )
}

export default Socials

import styled from "styled-components"

const Image = styled.img`
  height: 20px;
  margin: 5px 10px;
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
  bottom: 100px;
  right: 150px;
  @media only screen and (max-width: 1200px) {
    bottom: 20px;
    right: auto;
    left: auto;
  }
`
const LinkTo = styled.a`
  cursor: pointer;
`
const Socials = () => {
  return (
    <SocialContainer>
      <SocialHead>Let's Do it!</SocialHead>
      <LinkTo href="https://www.linkedin.com/company/ramaera/" target="_blank">
        <Image
          src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png"
          alt="facebook icon"
        />
      </LinkTo>
      <LinkTo href="https://www.facebook.com/ramaeraindustries" target="_blank">
        <Image src="/content/social-5.png" alt="facebook icon" />
      </LinkTo>
      <LinkTo href="https://twitter.com/ramaeraltd" target="_blank">
        <Image src="/content/social-2.png" alt="twitter icon" />
      </LinkTo>
      <LinkTo
        href="https://www.instagram.com/ramaeraindustries/"
        target="_blank"
      >
        {" "}
        <Image src="/content/social.png" alt="instagram icon" />
      </LinkTo>
    </SocialContainer>
  )
}

export default Socials

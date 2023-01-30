import styled from "styled-components"

const Socials = () => {
  const Image = styled.img`
    height: 20px;
    margin: 5px;
  `
  const SocialHead = styled.h4`
    font-size: 14px;
    margin-left: 5px;
    color: white;
  `
  const SocialContainer = styled.div`
    position: absolute;
    bottom: 40px;
    right: 50px;
  `
  return (
    <SocialContainer>
      <SocialHead>Let's Do it!</SocialHead>
      <Image src="/content/social-5.png" />
      <Image src="/content/social-4.png" />
      <Image src="/content/social-3.png" />
      <Image src="/content/social-2.png" />
      <Image src="/content/social.png" />
    </SocialContainer>
  )
}

export default Socials

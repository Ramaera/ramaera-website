import styled from "styled-components"
import Text from "../../../../../components/Text/Text"
import Button from "../../../../../components/Button/Button"

const Texts = styled.div`
  width: 35vw;
  @media only screen and (max-width: 768px) {
    position: absolute;
    left: -20vw;
    top: 30vh;
  }
`
const ButtonContainer = styled.div`
  margin-right: 50vw;
`
const PromtContainer2 = () => {
  return (
    <Texts>
      <Text
        Text="Strengthened by the people, for the benefit of the people"
        color="#fff"
        size="32px"
        lh="32px"
        align="left"
        fw="700"
        m="0 0 0 0"
        mta="left"
        mwidth="100vw"
      />
      <Text
        Text="The trust of Ramaera family has been the pillar of our phenomenal growth. This has enabled us to sustain millions of livelihoods and employ lakhs of people, turning our vision of finanicial independence of every Indian into reality."
        color="#fff"
        size="16px"
        lh="18px"
        align="left"
        fw="200"
        m="0 4rem 0 0"
        msize="12px"
        mta="left"
        mpadding="0 40vw 0 0 "
      />
      <ButtonContainer>
        <Button Text="Read More" m="0" lightborder fontSize="12px" bg="none" />
      </ButtonContainer>
    </Texts>
  )
}

export default PromtContainer2

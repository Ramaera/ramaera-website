import styled from "styled-components"
import Text from "../../../../../components/Text/Text"
import Button from "../../../../../components/Button/Button"

const Texts = styled.div`
  width: 35vw;
  @media only screen and (max-width: 768px) {
    position: absolute;
    right: 35vw;
    top: 20vh;
  }
`
const ButtonContainer = styled.div`
  margin-left: 50vw;
`
const PromtContainer1 = () => {
  return (
    <Texts>
      <Text
        Text="Empowering young talent and promoting entrepreneurships"
        color="#fff"
        size="32px"
        lh="32px"
        align="left"
        fw="700"
        m="0 0 0 0"
        mta="right"
      />
      <Text
        Text="India is the hub of entrepreneurial talent and we plan to provide these young talents the right resources. Ramaera Industries aims to give wings to the dreams of the CEOs of tomorrow"
        color="#fff"
        size="16px"
        lh="18px"
        align="left"
        fw="200"
        m="0 4rem 0 0"
        msize="12px"
        mta="right"
        mpadding="0  0 0 40vw"
      />
      <ButtonContainer>
        <Button Text="Read More" m="0" lightborder fontSize="12px" bg="none" />
      </ButtonContainer>
    </Texts>
  )
}

export default PromtContainer1

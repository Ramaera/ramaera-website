import Text from "../../../components/Text/Text"
import styled from "styled-components"
export const ValueContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`
export const Wrapper = styled.div`
  margin: 10% auto 0 auto;
`
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const TextContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ImageTag = styled.img`
  transform: scale(90%);
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 20px;
  border: solid #0d6b16 1px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  //background: #000;
  background: #fff;
  @media (max-width: 768px) {
    object-fit: contain;
    height: auto;
  }
`
const Plantsera = () => {
  return (
    <Wrapper>
      <Text
        Text="Our Brands"
        lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
        font
        size="50px"
        lh="110%"
        width="100%"
        mwidth="100vw"
        fw="500"
        mlh="50px"
        align="center"
        xmsize="2rem"
        xssize="4vw"
        msize="2rem"
        mpadding="0"
      />
      <MainContainer>
        <ValueContainer>
          <div data-aos="fade-right">
            <Text
              Text="Plantsera masala"
              lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
              font
              size="30px"
              lh="110%"
              width="100%"
              mwidth="100vw"
              fw="500"
              mlh="50px"
              align="center"
              xmsize="1rem"
              xssize="2vw"
              msize="1rem"
              mpadding="0"
              mmargin=" 0 0 0rem 0"
            />
          </div>
          <div data-aos="fade-up">
            <a href="https://www.ramaera.com" target="_blank">
              <ImageTag src="/content/plantseraNew.png" alt="plantsera" />
              {/*           <ImageTag src="/content/plantsera.webp" alt="plantsera" />
               */}{" "}
            </a>
          </div>
        </ValueContainer>
        <TextContainer>
          <Text
            Text=" ."
            lg="none"
            font
            size="30px"
            lh="110%"
            width="100%"
            mwidth="100%"
            fw="500"
            mlh="50px"
            align="center"
            xmsize="1rem"
            xssize="2vw"
            msize="1rem"
            mpadding="0"
            mmargin=" 0 0 0rem 0"
          />
          <Text
            Text="Producing the treasures of the Indian cuisines"
            lg="linear-gradient(72.44deg, #67E453 0%, #0D6B16 100%)"
            size="32px"
            lh="40px"
            width="100%"
            mwidth="100%"
            fw="500"
            mlh="50px"
            align="center"
            xmsize="1rem"
            xssize="2vw"
            msize="1rem"
            mpadding="0"
            mmargin=" 0 0 0rem 0"
          />
          <Text
            Text="Spices have an inseparable bond with our Indian culture. Each and every flavor of different spices in our country reflect the taste of the region and carry the story of the richness of our country. Relishing your taste buds with the best quality of spices to add spice to your life and devouring delicacies, Plantsera Spices is a step ahead."
            size="24px"
            lh="32px"
            width="100%"
            mwidth="100vw"
            fw="500"
            mlh="50px"
            align="center"
            xmsize="1rem"
            xssize="2vw"
            msize="1rem"
            mpadding="0"
            mmargin=" 0 0 0rem 0"
          />
        </TextContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default Plantsera

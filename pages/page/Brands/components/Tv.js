import Text from "@/components/Text/Text";
import styled from "styled-components";

export const ValueContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  margin: 2% auto 0 auto;
  @media only screen and (max-width: 768px) {
    margin: 10% auto 0 auto;
  }
`;
export const BlockDiv = styled.div`
  display: block;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ImageTag = styled.img`
  transform: scale(90%);
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 20px;
  border: solid white 1px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  //background: #000;
  background: #fff;
  @media (max-width: 768px) {
    object-fit: contain;
    height: auto;
  }
`;
const Tv = () => {
  return (
    <Wrapper>
      <MainContainer>
        <ValueContainer>
          <div data-aos="fade-right">
            <Text
              Text="LED TV"
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
            <ImageTag src="/content/ledTv.png" alt="Led TV" />
          </div>
        </ValueContainer>
        <TextContainer>
          <BlockDiv>
            <Text
              Text=" "
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
          </BlockDiv>
          <Text
            Text="LED TV"
            lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
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
            mpadding="0 1%"
            mmargin=" 0 0 0rem 0"
          />
          <Text
            Text="Screen Size : 75/65/60/55/ inches ||  A+ Grade Panel || 4K Ultra Hd|| 8gb RAM/8gb ROM || Android TV || SRS Surround Sound || Graphic Equalizer || 16 Million+ Colours || Eye Care Technology || High Definition || Wide Colour Enhancer || HDMI Port ||  USB Port || Digital Noise Reduction || 1 Year Warranty"
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
            mpadding="0 1%"
            mmargin=" 0 0 0rem 0"
          />
        </TextContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Tv;

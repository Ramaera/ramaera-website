import Text from "@/components/Text/Text";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import { AcData } from "./data";

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

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  // @media (max-width: 768px) {
  //   margin: 1rem auto auto auto;
  // }
`;

export const Th = styled.div`
  padding: 8px 13rem 8px 6rem;
  display: flex;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 768px) {
    padding: 8px 8px 8px 1.5rem;
  }
`;

const Ac = () => {
  return (
    <Wrapper>
      <MainContainer>
        <ValueContainer>
          <div data-aos="fade-right">
            <Text
              Text="Air Conditioner"
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
            <ImageTag src="/content/ac.png" alt="Ac" />
          </div>
        </ValueContainer>
        <TextContainer>
          <BlockDiv>
            <Text
              Text=""
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
            Text="Air Conditioner"
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
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                borderCollapse: "collapse",
                borderSpacing: 0,
                width: "100%",
                textAlign: "left",
                color: "white",
              }}>
              {AcData?.map((list) => (
                <tr>
                  <Th>{list.title}</Th>
                  <th
                    style={{
                      padding: "8px",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}>
                    {list.detail}
                  </th>
                </tr>
              ))}
            </table>
          </div>
          <BtnDiv>
            <Button
              Text="Enquiry Now"
              secondary
              lightborder
              width="155px"
              height="40px"
              m="0 0"
              bborder="2px solid white"
            />
          </BtnDiv>
        </TextContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Ac;

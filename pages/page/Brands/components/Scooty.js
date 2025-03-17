import Text from "../../../../components/Text/Text";
import styled from "styled-components";
import { scootyData } from "./data";
import Enquiry from "./Enquiry";
import { useState } from "react";

const FloatingProject = styled.div`
  cursor: pointer;
  z-index: 100;
  position: absolute;
  border-radius: 20px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background: #000;
  @media only screen and (max-width: 768px) {
    position: fixed;
    scale: 0.7;
    margin: 300px -10% 0 0;
  }
`;

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

export const Th = styled.div`
  padding: 8px 8px 8px 8rem;
  display: flex;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 768px) {
    padding: 8px 8px 8px 1.5rem;
  }
`;

const Heading = styled.h3`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 0.03em;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media only screen and (max-width: 768px) {
    margin: 20px 10px 0 10px;
  }
`;

const Scooty = ({ ProImg, ProName }) => {
  const [isFloating, showFloating] = useState(false);
  return (
    <Wrapper id="Products">
      {/* <Text
        Text="Our Products"
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
      /> */}
      <MainContainer>
        <ValueContainer>
          <div data-aos="fade-right">
            <Heading>Electric Scooty</Heading>
          </div>
          <div data-aos="fade-up">
            <ImageTag src="/content/ScootyFront.jpg" alt="E-Scooty" />
          </div>
        </ValueContainer>

        <TextContainer>
          {/* <BlockDiv>
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
              padding="1vw"
              mpadding="0"
              mmargin=" 0 0 0rem 0"
            />
          </BlockDiv> */}
          <Text
            Text="Specification"
            lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
            size="32px"
            lh="40px"
            width="100%"
            mwidth="100%"
            fw="500"
            mlh="50px"
            align="left"
            xmsize="1.5rem"
            xssize="2vw"
            msize="1.8rem"
            padding="0 0 2vw 8rem"
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
              {scootyData?.map((list) => (
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}>
            <Enquiry ProImg="/content/scooty.png" ProName="Electric Scooty" />
          </div>
        </TextContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Scooty;

import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
export const ParaContainer = styled.div`
  margin-top: 20px;
  width: 85%;
`;
const Polygon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const PolyGonImg = styled.img`
  width: 20rem;
  height: 45rem;
  /* position: relative;
   bottom: 20vh; */
  @media (max-width: 600px) {
    width: 10rem;
    height: 25rem;
  }
`;
const Innovation = () => {
  return (
    <>
      <MainContainer>
        <Text
          Text="An initiative of today for a perfect tomorrow"
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="3.8rem"
          lh="90px"
          width="80rem"
          mwidth="100vw"
          fw="500"
          mlh="50px"
          align="center"
          xmsize="6rem"
          xssize="10vw"
          msize="2rem"
          mpadding="0"
          mmargin=" 2rem 0 2rem 0"
        />
        <ParaContainer>
        <Text
        Text="Innovation and excellence are our guiding principles and the
        execution of these in technology is helping us to carry out various
        policies that contribute to the upliftment of the society for a
        better tomorrow."
        fw="500"
        size="30px"
        lh="45px"
        width="75rem"
        m="2rem 0 0 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="85vw"
        mta="center"
        align="center"
      />
        </ParaContainer>
        <Polygon>
          <PolyGonImg src={"/background/polygon.png"} />
        </Polygon>
      </MainContainer>
    </>
  );
};

export default Innovation;

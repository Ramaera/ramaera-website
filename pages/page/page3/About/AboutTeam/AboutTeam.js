import React from "react";
import styled from "styled-components";
import Text from "../../../../../components/Text/Text";
import Pillers from "./Pillers/Pillers";
import {
  Dots,
  LeftPara,
  LeftTeam,
  ParaBox,
  RightHead,
  RightPara,
  RightTeam,
  TeamContainer,
} from "./style";
const TeamBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px){
    flex-direction: column;
  }
`;
const AboutTeam = () => {
  return (
    <>
      <TeamContainer>
      <Text
          Text="About the Ramaera Team"
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="3rem"
          lh="30px"
          width="100%"
          mwidth="100%"
          fw="500"
          mlh="50px"
          m="0rem 0 0 0"
          align="center"
          xmsize="6rem"
          xssize="10vw"
          msize="2rem"
          mpadding="0"
          mmargin="0 0 0 0"
        />
        <TeamBoxContainer>
          <LeftTeam>
            <ParaBox>
              <LeftPara>OUR CORE VALUES</LeftPara>
              <br />
              <LeftPara>
                Ramaera Team is dedicated to serve you with excellence and
                efficiency.
              </LeftPara>
            </ParaBox>
          </LeftTeam>
          <RightTeam>
            <RightHead>Transparency</RightHead>
            <RightPara>
              Accountability: The Ramaera team is am epitome of commitment ,
              preservence and dedication towards their work.
            </RightPara>
            <RightHead>Accountability</RightHead>
            <RightPara>
              Our team members adhere to transparency to maintain cooperation
              and smooth functioning.
            </RightPara>
            <RightHead>Empowerment</RightHead>
            <RightPara>
              Ramaera team is dedciated to the empowerment of the Ramaera Family
              and aims at continuous improvements.
            </RightPara>
          </RightTeam>
        </TeamBoxContainer>
        <Dots src="/background/Dots.png" alt="" width={"90px"} />
      </TeamContainer>
      <Pillers />
    </>
  );
};

export default AboutTeam;
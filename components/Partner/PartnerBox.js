import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 27%;
  height: 25vh;
`;
const BoxHead = styled.h2`
  font-family: "Zilap Orion Personal Use";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 36px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const BoxPara = styled.p`
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 23px;
  /* or 135% */

  letter-spacing: 0.04em;

  color: #ffffff;
`;
const PartnerBox = ({ Heading, Para }) => {
  return (
    <Box>
      <BoxHead>{Heading}</BoxHead>
      <BoxPara>{Para}</BoxPara>
    </Box>
  );
};

export default PartnerBox;

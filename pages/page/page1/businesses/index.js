// import React from "react";
// import PageLayout from "../../../../components/PageLayout/PageLay";
// import PageWidth from "../../../../components/Width/PageWidth";

// const Businesses = () => {
//   return (
//     <>
//       <div style={{ color: "red" }}>index</div>
//     </>
//   );
// };

// export default Businesses;

import styled from "styled-components";
import Text from "../../../../components/Text/Text";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 2em 10em;
  border-radius: 5px;
`;

const GridItem = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 3rem;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);

  transition: background-color 0.3s ease;

  &:hover {
    background-image: linear-gradient(90deg, #bf5ae0 0%, #a811da 100%);
    background-size: 100% 200%;
    background-position: 0 100%;
    cursor: pointer;
  }
`;

function ServicesGrid() {
  return (
    <>
      <Text
        Text="Ramaera Businesses"
        lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
        font
        size="3.5rem"
        fw="400"
        align="center"
        lh="60px"
        xmsize="4rem"
        xssize="4rem"
        msize="3.2rem"
        padding="0"
      />
      <GridContainer>
        <GridItem>FMCG</GridItem>
        <GridItem>Hotels</GridItem>
        <GridItem>Paperboards & Specialty Papers</GridItem>
        <GridItem>Packaging</GridItem>
        <GridItem>Agri Business</GridItem>
        <GridItem>Information Technology</GridItem>
      </GridContainer>
    </>
  );
}

export default ServicesGrid;

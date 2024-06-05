import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Tv from "./components/Tv";
import Ac from "./components/Ac";
import Ro from "./components/Ro";
import Rod from "./components/Rod";
import Text from "../../../components/Text/Text";

export const Wrapper = styled.div`
  margin: 2% auto 0 auto;
  @media only screen and (max-width: 768px) {
    margin: 10% auto 0 auto;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 2em;
  border-radius: 5px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) =>
    props.active
      ? "linear-gradient(to right, #ffa73d, gold)"
      : " linear-gradient(to right, #fff, #fff)"};
  text-align: center;
  padding: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-image: linear-gradient(to right, #ffa73d, gold);
    background-size: 100% 200%;
    background-position: 0 100%;
    cursor: pointer;
  }
`;

const Brands = () => {
  const [activeItem, setActiveItem] = useState("AC");

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <>
      <Wrapper id="Products">
        <GridContainer>
          <Link href="#AC">
            <GridItem
              active={activeItem === "AC"}
              onClick={() => handleItemClick("AC")}>
              Ramaera AC
            </GridItem>
          </Link>
          <Link href="#TV">
            <GridItem
              active={activeItem === "TV"}
              onClick={() => handleItemClick("TV")}>
              Android LED TV
            </GridItem>
          </Link>
          <Link href="#RO">
            <GridItem
              active={activeItem === "RO"}
              onClick={() => handleItemClick("RO")}>
              Water Purifier RO
            </GridItem>
          </Link>
          <Link href="#ROD">
            <GridItem
              active={activeItem === "ROD"}
              onClick={() => handleItemClick("ROD")}>
              Immersion Rod
            </GridItem>
          </Link>
        </GridContainer>

        {/* <Planetsera /> */}
        {/* <Scooty /> */}
        <Ac />
        <Tv />
        <Ro />
        <Rod />
      </Wrapper>
    </>
  );
};

export default Brands;

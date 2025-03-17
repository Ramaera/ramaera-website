import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Link from "next/link";
import Foot from "../page/common/footer/index";

const Text = styled.p`
  width: 100%;
  font-size: 5vw;
  padding: 5vw;
  font-family: "personal";
  margin-top: 8vw;
  background: linear-gradient(90deg, #e65c00, #f9d423);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    padding: 10vw; /* Adjust the value for mobile view */
    font-size: 10vw; /* Adjust the font size for mobile view */
    margin-top: 20vw; /* Adjust the margin top for mobile view */
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  padding-inline: 30vw;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  border-radius: 5px;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 8vw; /* Adjust the value for mobile view */
  }
`;

const GridItem = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2vw;
  align-items: center;
  background-color: #fff;
  padding: 3vw;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to right, #ffa73d, gold);
    background-size: 100% 200%;
    background-position: 0 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;
const Icon = styled.img`
  height: 5vw;
  width: 5vw;
  @media (max-width: 768px) {
    height: 10vw;
    width: 10vw;
  }
`;

const IT = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          marginTop: "0px",
        }}
      >
        <Text>Information & Technology</Text>
        <GridContainer>
          <Link href="https://www.planetsera.com/">
            <GridItem>
              Spice
              <Icon src="/content/spiceicon.png" alt="spice" />
            </GridItem>
          </Link>
          <Link href="https://www.planetsera.com/">
            <GridItem>
              Water
              <Icon src="/content/spiceicon.png" alt="water" />
            </GridItem>
          </Link>
        </GridContainer>
      </div>
      <hr />
      <Foot />
    </>
  );
};

export default IT;

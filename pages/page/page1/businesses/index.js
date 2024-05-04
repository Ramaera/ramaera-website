import styled from "styled-components";
import Text from "../../../../components/Text/Text";
import Link from "next/link";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Adjust min and max width as needed */
  grid-gap: 1rem;
  padding: 2em;
  border-radius: 5px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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
        <Link href="/fmcg">
          <GridItem>FMCG</GridItem>
        </Link>
        <Link href="/electronics">
          <GridItem>Electronics</GridItem>
        </Link>
        <Link href="/information-&-technology">
          <GridItem>Information Technology</GridItem>
        </Link>
      </GridContainer>
    </>
  );
}

export default ServicesGrid;

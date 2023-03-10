import React from "react"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import PageWidth from "../../../../components/Width/PageWidth"
import { Container } from "./components/Style"
import Item from "./components/Item"
import styled from "styled-components"

const PolyBg = styled.div`
  opacity: 50%;
`
const Image = styled.img`
  height: 80vh;
`
const index = () => {
  const bg = "./background/bb.png"
  const svg1 = "./content/1.png"
  const svg2 = "./content/2.png"
  const svg3 = "./content/3.png"
  const svg4 = "./content/4.png"

  return (
    <PageLayout padding={0}>
      <PageWidth width="1500px">
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Container>
            <Item
              img={svg1}
              number="1600000+"
              desc="Ramaera Group Direct Employees"
            />
            <Item
              img={svg2}
              number="20000"
              desc="FMCG Upcoming Mother Brands"
            />
            <Item img={svg3} number="10000+" desc="Hotels across pan India" />
            <Item
              img={svg4}
              number="5 Million"
              desc="Sustainable Livelihoods"
            />
          </Container>
        </div>
      </PageWidth>
      <div
        style={{ position: "absolute", right: "0", top: "0", zIndex: -1 }}
        data-aos="slide-left"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
      >
        <PolyBg>
          <Image src={"/background/leftPoly.png"} alt="" />
        </PolyBg>
      </div>
    </PageLayout>
  )
}

export default index

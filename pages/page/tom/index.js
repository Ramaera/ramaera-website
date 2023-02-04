import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import Text from "../../../components/Text/Text"
import { bg, Responsive } from "./components/Style"
import Images from "./components/Images"

const index = () => (
  <PageLayout bgColor="#f5f5f5">
    <PageWidth width="1500px" margin="2rem 0 0 0">
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-anchor-placement="top-center"
      >
        <Text
          Text="Striving today for enabling a better tomorrow"
          width="80vw"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          size="55px"
          fw="400"
          align="center"
          lh="65px"
        />
      </div>

      <Responsive>
        <Images />
      </Responsive>
    </PageWidth>
  </PageLayout>
)

export default index
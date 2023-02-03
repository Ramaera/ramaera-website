import React from "react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import PageWidth from "../../../components/Width/PageWidth"
import TextContainer from "./components/TextContainer"
import { Image, Responsive } from "./components/StyleImage"

const bg = "/background/blank.png"

const Buy = () => {
  return (
    <PageLayout bg={bg}>
      <PageWidth scale={"90%"} width="1500px" position="relative">
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          style={{ position: "absolute", left: "0", margin: "10vh 0 0 0" }}
        >
          <Image>
            <img
              src="/content/Packaging.gif"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Image>
        </div>
        <div style={{ width: "100%" }}>
          <img
            src="/background/Line.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
          <div
            data-aos="slide-left"
            // data-aos-offset="2000"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            <Responsive>
              <TextContainer />
            </Responsive>
          </div>
          <img
            src="/background/Line.png"
            alt=""
            style={{ width: "100%", height: "10rem" }}
          />
        </div>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy

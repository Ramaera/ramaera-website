import styled from "styled-components";
import Text from "../../../../../components/Text/Text";

const Txt = styled.div`
  height: 100%;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: auto;
`;
const Bg = styled.div`
  display: flex;
  background-image: url("/background/bg1p2.png");
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 100%;
  width: 100vw;
  margin-top: 20vh;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    background: transparent;
    flex-direction: column-reverse;
  }
`;
const AgriPos = styled.video`
  height: 75vh;
  transform: scale(0.9);
  padding-bottom: 65px;
  @media only screen and (max-width: 768px) {
    height: 50vh;
    padding-bottom: 0px;
  }
`;

const CustomBg = () => {
  return (
    <div
      data-aos="slide-left"
      data-aos-duration="200"
      data-aos-anchor-placement="top-bottom"
    >
      <Bg>
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <div>
            <AgriPos autoPlay loop muted>
              <source src="/content/e-commerce.webm" type="video/webm" />
            </AgriPos>
            {/* <AgriPos
              loading="lazy"
              src="/content/e-commerce.gif"
              alt="e commerce gif"
            /> */}
          </div>
        </div>
        <Txt>
          <Text
            Text="E commerce"
            font
            align="right"
            size="42px"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            lh="55px"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2.4rem"
          />
        </Txt>
      </Bg>
    </div>
  );
};

export default CustomBg;

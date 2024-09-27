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
  background-image: url("/background/bg-capsule.png");
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 1000px;
  min-height: 500px;
  width: 100vw;
  margin-top: 20vh;
  margin-bottom: -300px;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    background: transparent;
    flex-direction: column-reverse;
    height: auto;
    margin-top: 0;
    margin-bottom: unset;
    width: 100%;
  }
`;
const AgriPos = styled.video`
  transform: scale(0.7);
  height: 75vh;
  min-height: 450px;
  @media only screen and (max-width: 768px) {
    height: 50vh;
    min-height: unset;
  }
`;

const CustomBg = () => {
  return (
    <div
      data-aos="slide-left"
      data-aos-duration="200"
      data-aos-anchor-placement="top-center"
    >
      <Bg>
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <div>
            <AgriPos autoPlay loop muted>
              <source src="/content/hotel.webm" type="video/webm" />
            </AgriPos>
            {/*  <AgriPos loading="lazy" src="/content/hotel.gif" alt="hotel gif" /> */}
          </div>
        </div>
        <Txt className="mobText">
          <Text
            Text="HOTEL CAPSULE"
            font
            align="right"
            size="42px"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            lh="55px"
            mlh="40px"
            xmsize="2rem"
            xssize="3vw"
            msize="2.4rem"
            mwidth="100%"
            mmwidth="100%"
          />
        </Txt>
      </Bg>
    </div>
  );
};

export default CustomBg;

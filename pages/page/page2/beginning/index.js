import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"
import CustomBg from "./components/CustomBg"
import Texts from "./components/Texts"

const Beginning = () => {
  return (
    <>
      <PageWidth Left={"left"} width="1500px">
        <div
          data-aos="fade-up"
          data-aos-easing="fade-down"
          data-aos-duration="500"
        >
          <Text
            Text="Ramaera Industries "
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="56px"
            fw="400"
            align="left"
            lh="70px"
            xmsize="4rem"
            xssize="4rem"
            msize="4rem"
          />
          <Text
            Text="has begun with the primary motive of nation orientation and strengthening the vision of a sustainable and prosperous nation. With the idea of encompassing and emboldening our presence in industrial sectors such as FMCG, Hotels, Packaging, Agriculture & IT Businesses. We are consistent in serving you the best with due honesty and world class standards."
            color="#FFF"
            size="24px"
            lh="42px"
            fw="400"
            m="2rem 0 0 0"
            align="left"
            width="1100px"
            xmsize="2.2rem"
            xssize="2rem"
            msize="1.6rem"
            padding=" 0 10vw 0 2vw"
          />
        </div>

        <CustomBg />

        <div
          style={{
            position: "absolute",
            right: "0",
            top: "30vh",
            zIndex: "-2",
          }}
          data-aos="slide-left"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        ></div>
      </PageWidth>
      <Texts />
    </>
  )
}

export default Beginning

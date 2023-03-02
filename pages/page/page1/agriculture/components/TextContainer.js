import styled from "styled-components";
import Flex from "../../../../../components/Styling/Flex";
import Text from "../../../../../components/Text/Text";
import Link from "next/link";
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton";

const StyleTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: 1rem 0 2rem 0;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    top: 10%;
    width: 90vw;
  }
`;
const IconDiv = styled.div`
  @media only screen and (max-width: 768px) {
  }
`;
const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex jc="flex-end" mrcolumn>
        <div>
          <Text
            Text="Agri-business to bestow"
            align="right"
            lh="50px"
            color="#FFF"
            xm="3vw"
            mta="left"
            ms="1.2rem"
            size="2.6rem"
            padding="0"
          />
          <Text
            Text="Nature's Love"
            align="right"
            size="42px"
            lg="linear-gradient(90deg, #F7941E 0%, #72C6EF 50%, #00A651 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)"
            lh="55px"
            mlh="30px"
            xmsize="2rem"
            xssize="3vw"
            msize="2rem"
            mta="center"
            padding="0"
          />
        </div>
        <IconDiv>
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_101_207)">
              <circle cx="75" cy="75" r="45" fill="#579181" />
            </g>
            <path
              d="M50 52.9995C59.1242 59.7653 70.7678 74.0078 72.4955 97.9995C74.5133 82.659 75.8698 76.6245 81.4937 66.4995"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M91.3355 63.1988C93.7276 66.8546 94.9983 71.1304 94.991 75.4995C94.991 87.9263 84.9198 97.9995 72.4955 97.9995C60.0712 97.9995 50 87.9263 50 75.4995C50 63.0728 60.0712 52.9995 72.4955 52.9995C77.0014 52.9995 81.199 54.3248 84.7173 56.6063"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M83.9776 57.4995C81.7235 60.366 81.3996 63.318 81.5031 66.4995C85.7772 66.2745 88.2585 66.0473 91.1761 63.3495C94.339 60.4245 94.7754 58.1745 95.0004 52.9995C88.9266 53.2245 86.8502 53.8433 83.9776 57.4995Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_di_101_207"
                x="0"
                y="0"
                width="150"
                height="150"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.341176 0 0 0 0 0.568627 0 0 0 0 0.505882 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_101_207"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_101_207"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_101_207"
                />
              </filter>
            </defs>
          </svg>
        </IconDiv>
      </Flex>
      <Text
        Text="We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority."
        align="right"
        fw="500"
        size="23px"
        lh="45px"
        width="40rem"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="100vw"
        mta="center"
        padding="0 5vw 0 0 "
      />
      <div style={{ padding: " 2vh 0 0 17.5vw" }}>
        <Link href="/industries#argiculture">
          <TransparentButton
            Text="Read more"
            border="solid #579181 2px"
            height="60px"
            m="2rem 0 0 0"
            br="1.5rem"
            fw="300"
            fontSize="1.2rem"
          />
        </Link>
      </div>
    </StyleTextContainer>
  );
};

export default TextContainer;

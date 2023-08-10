import React, { useState, useEffect } from "react";
import Text from "../../../../components/Text/Text";
import { Fragment } from "react";
import disableScroll from "disable-scroll";

import styled from "styled-components";

const FullFloatingInside = styled.div`
  border-radius: 20px;
  background: linear-gradient(91deg, #000 0%, #3e3e3e 100%);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const FullFloating = styled.div`
  padding: 200px;
  position: fixed;
  z-index: 101;
  height: 100vh;
  width: 100vw;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  @media only screen and (max-width: 768px) {
    padding: 25% 5%;
  }
`;

const Enquiry = ({}) => {
  const [isFloating, showFloating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {/* {imageIndex === 0 && showModal ? <NoticePopup /> : null} */}

      <FullFloatingInside>
        <Text
          Text="Upcoming Project"
          lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
          font
          size="44px"
          lh="20px"
          width="fit"
          fw="500"
          mlh="80px"
          mwidth="100vw"
          align="center"
          xmsize="32px"
          xssize="24px"
          msize="22px"
          mpadding="0 10% 0 0 "
        />
        <Text
          Text="AGRA MART"
          lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
          font
          size="36px"
          lh="20px"
          width="fit"
          mwidth="100vw"
          fw="500"
          mlh="30px"
          align="center"
          xmsize="28px"
          xssize="24px"
          msize="24px"
          mpadding="0 10% 0 0 "
        />
        <Text
          Text="Agra Mart offer a wide range of basic home and personal products under one roof. Our core objective is to offer customers good products at great value."
          padding="0 10vw "
          color="#FFF"
          size="2rem"
          lh="50px"
          fw="400"
          m="1rem 0 3rem 0"
          align="center"
          xmsize="2.2rem"
          xssize="2rem"
          msize="1.3rem"
          mta="center"
          mpadding="0 20% 0 10% "
          mlh="40px"
        />
      </FullFloatingInside>
    </Fragment>
  );
};

export default Enquiry;

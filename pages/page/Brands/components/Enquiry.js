import React, { useState, useEffect } from "react";
import Text from "../../../../components/Text/Text";
import { Fragment } from "react";
import disableScroll from "disable-scroll";
import Button from "@/components/Button/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import EnquiryForm from "../EnquiryForm/VisitLocations";
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

  useEffect(() => {
    isFloating ? disableScroll.on() : disableScroll.off();
  }, [isFloating]);

  return (
    <Fragment>
      {isFloating ? (
        <FullFloating>
          <div
            onClick={() => {
              showFloating(false);
            }}
            style={{ position: "relative" }}>
            <CancelPresentationIcon
              sx={{
                position: "absolute",
                right: 0,
                margin: 1,
                fontSize: 50,
                color: "orange",
                cursor: "pointer",
                zIndex: 10,
                pb: 1,
              }}
            />
          </div>

          <FullFloatingInside>
            {/* <Text
              Text="Enquiry Form"
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
            /> */}
            <EnquiryForm />
          </FullFloatingInside>
        </FullFloating>
      ) : (
        <div
          onClick={() => {
            showFloating(true);
          }}>
          <Button
            Text="Enquiry Now"
            secondary
            lightborder
            width="155px"
            height="40px"
            m="0 0"
            bborder="2px solid white"
            onClick={() => {
              showFloating(true);
            }}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Enquiry;

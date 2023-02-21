import React from "react"
import styled from "styled-components"

const PageLayout = ({
  children,
  bg,
  start,
  padding,
  height,
  adjustBg,
  bgColor,
  Zindex,
  Y,
  resTr,
  mheight,
  mtpadding,
}) => {
  const StyledPageLayout = styled.section`
    //min-width: 100vh;
    min-height: ${height ? height : "100vh"};
    display: flex;
    align-items: center;
    justify-content: ${start ? "flex-start" : "center"};
    flex-direction: column;
    padding-top: ${padding ? padding : "calc(1rem + 1rem)"};
    background: linear-gradient(
      90deg,
      rgb(var(--background-start-rgb)) 0%,
      rgb(var(--background-end-rgb)) 100%
    );
    background-image: url(${bg ? bg : ""});
    background-size: ${adjustBg ? "100% auto" : "100% 100%"};
    background-repeat: no-repeat;
    position: relative;
    background-position: center center;
    overflow-x: hidden;
    overflow-y: ${Y ? "hidden" : ""};
    z-index: ${Zindex ? Zindex : "1"};

    @media (max-width: 1200px) {
      background-size: ${adjustBg ? "100% auto" : "auto 100%"};
      background-position: ${adjustBg ? "center center" : "center top"};
    }

    @media (max-width: 768px) {
      min-height: 100vh;
      min-height: ${mheight ? mheight : ""};
      padding-top: ${mtpadding ? mtpadding : "calc(1rem + 1rem)"};
      overflow: visible;
    }
  `

  return <StyledPageLayout>{children}</StyledPageLayout>
}

export default PageLayout

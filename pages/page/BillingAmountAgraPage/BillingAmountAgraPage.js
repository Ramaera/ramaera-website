import React, { useState } from "react";
import Box from "@mui/material/Box";
import Text from "../../../components/Text/Text";
import Link from "next/link";
import Settings from "../Dashboard/Settings";

const BillingAmountAgraPage = () => {
  const ACCESSTOKEN = window.localStorage.getItem("accessToken");
  if (!ACCESSTOKEN) {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login">
          Login to continue
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        <Text
          Text="Billing Amount Agra Mart"
          lg="linear-gradient(to right, #ffa73d, gold)"
          font
          size="clamp(2.2rem, 1.2vw, 1.5rem)"
          fw="400"
          align="center"
          lh="50px"
          m="0 0 1rem 0"
          xmsize="clamp(2.4rem, 1.5vw, 2rem)"
          xssize="clamp(2.4rem, 1.5vw, 2rem)"
          msize="2rem"
          mwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />

        <div
          style={{
            color: "white",
            fontSize: "50px",
            right: "5%",
            top: "20px",
            zIndex: "10",
            position: "absolute",
            cursor: "pointer",
          }}>
          <Settings />
        </div>

        <Box className="boxGird"></Box>
      </div>
    </>
  );
};

export default BillingAmountAgraPage;

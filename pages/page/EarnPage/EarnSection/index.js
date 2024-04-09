import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import Reward from "../Reward/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 100vh;
  margin-top: 7rem;
  @media (max-width: 768px) {
    margin-top: 5rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const EarnAndGetReward = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;
`;

const ImageWrapper = styled.div`
  // width: 300px;
`;

const EarnSection = () => {
  const EarnReward = "/background/EarnReward.gif";
  const [rewardCodeForm, setRewardCodeForm] = useState(false);

  const rewardHandler = (e) => {
    e.preventDefault();
    setRewardCodeForm(true);
  };

  return (
    <Container>
      {rewardCodeForm ? (
        <Reward
          rewardCodeForm={rewardCodeForm}
          setRewardCodeForm={setRewardCodeForm}
        />
      ) : (
        <EarnAndGetReward>
          <Text
            Text="Earn And Get Reward"
            lg="linear-gradient(to right, #ffa73d, gold)"
            font
            size="clamp(4rem, 2.5vw, 4rem)"
            fw="400"
            align="center"
            lh="70px"
            xmsize="clamp(2.5rem, 5vw, 4rem)"
            xssize="clamp(2.5rem, 5vw, 4rem)"
            msize="2.2rem"
            mwidth="100%"
            mmwidth="100%"
            padding="0"
            mpadding="0"
            mta="center"
            mlh="unset"
          />

          <ImageWrapper>
            <img alt="EarnReward" src={EarnReward} width={350} />
          </ImageWrapper>

          <div style={{ marginTop: "30px" }}>
            <Button
              Text="Get Reward"
              secondary
              lightborder
              height="45px"
              m="0 0 0.5rem 0"
              bborder="2px solid white"
              secondaryWidth="11rem"
              onClick={rewardHandler}
            />
          </div>
        </EarnAndGetReward>
      )}
    </Container>
  );
};

export default EarnSection;

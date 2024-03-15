import React, { useState } from "react";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { CREATE_REWARD } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 100vh;
  margin-top: 100px;

  @media (min-width: 768px) {
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

const CancelButton = styled(Button)`
  background: grey;
`;

const RewardFormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin: auto;
  transform: scale(0.9);
  @media (min-width: 768px) {
    transform: scale(1);
  }
`;

const RewardFormContent = styled.div`
  background-color: red;
  border-radius: 20px;
  width: 100%;
  max-width: 66.666%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 550px;
  padding: 20px;

  h2 {
    font-size: 4rem;
    color: white;
    margin-bottom: 16px;
    text-align: center;
    line-height: 60px;
  }

  span {
    font-size: 1rem;
    color: white;
    line-height: 2px;
  }
`;

const RewardForm = styled.form`
  background-color: white;
  width: 100%;
  max-width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid red;
  border-radius: 20px;
  margin-top: 20px;

  label {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
  }

  input {
    height: 50px;
    width: 100%;
    padding-left: 15px;
    margin-bottom: 15px;

    border: 2px solid black;
    border-radius: 10px;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: green;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background: grey;
  }
`;

const EarnSection = () => {
  // const [createPlanetseraReward] = useMutation(CREATE_REWARD);
  const EarnReward = "/background/EarnReward.gif";
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);
  const [rewardCodeForm, setRewardCodeForm] = useState(false);
  const [code, setCode] = useState("");
  const [loginModal, setLoginModal] = useState(false);

  const rewardHandler = (e) => {
    e.preventDefault();
    setRewardCodeForm(true);
  };

  const clearForm = () => {
    setConfetti(true);
    toast.success("Reward Code Received", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      setCode("");
    }, 1500);
    setTimeout(() => {
      setRewardCodeForm(false);
      setConfetti(false);
    }, 3400);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // const resp = await createPlanetseraReward({
      //   variables: {
      //     rewardCode: code,
      //     userId: user?.data?.id,
      //   },
      // });

      clearForm();
      // router.refresh();
    } catch (err) {
      console.log("err", err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      {confetti && (
        <Confetti numberOfPieces={600} width={width} height={height} />
      )}
      {rewardCodeForm && (
        <RewardFormContainer>
          <RewardFormContent>
            <Text
              Text=" Enter Your Reward Code "
              lg="linear-gradient(to right, #ffa73d, gold)"
              font
              size="clamp(4rem, 2.5vw, 4rem)"
              fw="400"
              align="center"
              lh="70px"
              xmsize="clamp(2rem, 4vw, 3rem)"
              xssize="clamp(2rem, 4vw, 3rem)"
              msize="2.5rem"
              mwidth="100%"
              mmwidth="100%"
              padding="0"
              mpadding="0"
              mta="center"
              mlh="unset"
            />
            <Text
              Text="To Claim Your Gift"
              lg="linear-gradient(to right, #ffa73d, gold)"
              font
              size="clamp(4rem, 2.5vw, 4rem)"
              fw="400"
              align="center"
              lh="70px"
              xmsize="clamp(2.5rem, 5vw, 4rem)"
              xssize="clamp(2.5rem, 5vw, 4rem)"
              msize="2.5rem"
              mwidth="100%"
              mmwidth="100%"
              padding="0"
              mpadding="0"
              mta="center"
              mlh="unset"
            />
            <h2>
              <span>We'll contact you with more details</span>
            </h2>
            <RewardForm onSubmit={(e) => submitHandler(e)}>
              <label htmlFor="reward">Please Enter Reward Code</label>
              <input
                name="reward"
                type="text"
                placeholder="Reward Code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                required
              />
              <SubmitButton type="submit">Submit</SubmitButton>
              <CancelButton onClick={() => setRewardCodeForm(false)}>
                Cancel
              </CancelButton>
            </RewardForm>
          </RewardFormContent>
        </RewardFormContainer>
      )}

      <Container>
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
            msize="2.5rem"
            mwidth="100%"
            mmwidth="100%"
            padding="0"
            mpadding="0"
            mta="center"
            mlh="unset"
          />

          <ImageWrapper>
            <img alt="EarnReward" src={EarnReward} width={400} />
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
      </Container>
    </>
  );
};

export default EarnSection;

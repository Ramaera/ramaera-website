import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import { relative } from "path";

const Container = styled.div`
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
  margin-top: 10rem;
  width: 55%;
  height: 70%;
  background: white;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin-top: 8rem;
    width: 90%;
    height: 600px;
  }
`;

const RewardFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  span {
    font-size: 1rem;
    color: white;
    line-height: 2px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RewardForm = styled(FormWrapper)`
  background-color: ${(props) => props.theme.color};
  color: white;
`;

const Input = styled.input`
  height: 48px;
  width: 80%;
  margin: 15px 0;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContainerReward = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
  background: linear-gradient(90deg, #f9d423 0%, #e65c00 100%);
`;

const FormContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 40;
  border-radius: 3xl;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 60px;
`;

const StyledSpan = styled.span`
  font-size: 16px;
`;

const StyledForm = styled.form`
  background: #ffffff;
  height: 100%;
  width: 500px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 18px;
  margin: 2px 0;
  text-align: left;
`;

const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  max-width: 100%;
  padding-left: 10px;
  margin: 5px 0;
  border: 2px solid #778899;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #f9d423 0%, #e65c00 100%);
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  width: 100%;
  background: grey;
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const Index = ({ rewardCodeForm, setRewardCodeForm }) => {
  //   const [createPlanetseraReward] = useMutation(CREATE_REWARD);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confetti, setConfetti] = useState(false);

  const { width, height } = useWindowSize();
  const rewardHandler = (e) => {
    e.preventDefault();
    setConfetti(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // createPlanetseraReward({
    //   variables: {
    //     name: userName,
    //     email: email,
    //     password: password,
    //     phone: number,
    //     rewardCode: code,
    //   },
    // });
    clearForm();
  };
  const clearForm = () => {
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
      setUserName("");
      setEmail("");
      setNumber("");
      setPassword("");
      setCode("");
    }, 1500);
    setTimeout(() => {
      setConfetti(false);
    }, 3400);
  };

  return (
    <>
      <Container>
        <ToastContainer />

        {confetti ? (
          <ContainerReward>
            <FormContainer>
              <Title>
                Enter Your Reward Code
                <br />
                To Claim Your Gift
                <br />
                <StyledSpan>we'll contact you with more details</StyledSpan>
              </Title>

              <StyledForm onSubmit={submitHandler}>
                <Label htmlFor="reward">Please Enter Reward Code</Label>
                <StyledInput
                  name="reward"
                  type="text"
                  placeholder="Reward Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <SubmitButton type="submit">Submit</SubmitButton>
                <CancelButton onClick={() => setRewardCodeForm(false)}>
                  Cancel
                </CancelButton>
              </StyledForm>
            </FormContainer>
          </ContainerReward>
        ) : (
          // <RewardFormContent>
          //   <Confetti
          //     numberOfPieces={600}
          //     width={Math.min(width * 0.9, height * 0.8)}
          //   />
          //   <Text
          //     Text="Thanks for completing your Registration"
          //     lg="linear-gradient(to right, #ffa73d, gold)"
          //     font
          //     size="clamp(2.8rem, 2vw, 2.8rem)"
          //     fw="400"
          //     align="center"
          //     lh="70px"
          //     xmsize="clamp(2.5rem, 5vw, 4rem)"
          //     xssize="clamp(2.5rem, 5vw, 4rem)"
          //     msize="2.2rem"
          //     mwidth="100%"
          //     mmwidth="100%"
          //     padding="0"
          //     mpadding="0"
          //     mta="center"
          //     mlh="unset"
          //   />
          //   <RewardForm onSubmit={(e) => submitHandler(e)}>
          //     <label
          //       htmlFor="reward"
          //       style={{
          //         fontSize: "1.8rem",
          //         margin: "1rem 0 0.5rem 0",
          //         textAlign: "center",
          //       }}>
          //       Please Enter Reward Code
          //     </label>
          //     <Input
          //       name="reward"
          //       type="text"
          //       placeholder="Reward Code"
          //       value={code}
          //       onChange={(e) => {
          //         setCode(e.target.value);
          //       }}
          //       required
          //     />
          //     <Button
          //       Text="Submit"
          //       type="submit"
          //       secondary
          //       lightborder
          //       height="45px"
          //       m="0 0 0.5rem 0"
          //       bborder="2px solid white"
          //       secondaryWidth="11rem"
          //       onClick={rewardHandler}
          //     />
          //     <Button
          //       Text="Cancel"
          //       padding="0.85rem 1rem"
          //       bg={"grey"}
          //       br="1.2rem"
          //       lightborder
          //       height="45px"
          //       m="0.5rem 0"
          //       bborder="2px solid white"
          //       secondaryWidth="11rem"
          //       onClick={() => {
          //         setRewardCodeForm(false);
          //       }}
          //     />
          //   </RewardForm>
          // </RewardFormContent>
          <FormWrapper>
            <Text
              Text=" Register Here"
              lg="linear-gradient(to right, #ffa73d, gold)"
              font
              size="clamp(3rem, 2vw, 3rem)"
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
            <Input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <Input
              type="number"
              value={number}
              placeholder="Mobile Number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              required
            />
            <Input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <Button
              Text="Complete your Registration"
              type="submit"
              padding="0.85rem 1rem"
              br="1.2rem"
              //   secondary
              lightborder
              height="45px"
              m="0.5rem 0"
              bborder="2px solid white"
              secondaryWidth="11rem"
              navWidth
              onClick={rewardHandler}
            />
            <Button
              Text="Cancel"
              padding="0.85rem 1rem"
              bg={"grey"}
              br="1.2rem"
              lightborder
              height="45px"
              m="0.5rem 0"
              bborder="2px solid white"
              secondaryWidth="11rem"
              onClick={() => {
                setRewardCodeForm(false);
              }}
            />
          </FormWrapper>
        )}
      </Container>
    </>
  );
};

export default Index;

import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import axios from "axios";

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
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 50px;
  }
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
  const router = useRouter();
  //   const [createPlanetseraReward] = useMutation(CREATE_REWARD);
  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [confetti, setConfetti] = useState(false);

  const userIdVar = useSelector((state) => state.logInUser.userId);

  const { width, height } = useWindowSize();
  const rewardHandler = (e) => {
    e.preventDefault();
    setConfetti(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        userId: userIdVar,
        rewardCode: code,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PLANETSERA_URL}/reward-code/submit`,
        postData
      );
      clearForm();
    } catch (error) {
      console.error("Error occurred : ", error);
      toast.error(error.response?.data?.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
      setConfetti(false);
    }, 5000);
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  if (!accessToken) {
    router.push("/Login");
  }

  return (
    <>
      {confetti && (
        <Confetti numberOfPieces={600} width={width} height={height} />
      )}

      {!accessToken ? (
        <h1 style={{ color: "white" }}>Loading....</h1>
      ) : (
        <Container>
          <ToastContainer />

          <ContainerReward>
            <FormContainer>
              <Title>
                Enter Your Reward Code
                <br />
                To Claim Your Gift
                <br />
                <StyledSpan>we'll contact you with more details</StyledSpan>
              </Title>

              <StyledForm onSubmit={(e) => handleSubmit(e)}>
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
        </Container>
      )}
    </>
  );
};

export default Index;

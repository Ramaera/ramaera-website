import React from "react";
import styled from "styled-components";
import Text from "@/components/Text/Text";

const UpcomingProject = () => {
  const StyledSocialMedia = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    right: 6.5rem; /* position the left edge of the element at the middle of the parent */
    transform: translate(0, -50%);
    animation: BALL 4s ease-in-out 1s infinite;

    @keyframes BALL {
      0% {
        top: 50%;
      }
      25% {
        top: 60%;
      }
      50% {
        top: 50%;
      }
      75% {
        top: 55%;
      }
      100% {
        top: 60%;
      }
    }
    @media (max-width: 1350px) {
      right: 2rem;
    }
    @media (max-width: 768px) {
      transform: scale(0.8);
    }
  `;

  const LinkTo = styled.a`
    cursor: pointer;
  `;

  return (
    <StyledSocialMedia>
      <div
        className="glow_button"
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          // background: "linear-gradient(90deg,#E65C00 0%,#F9D423 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "personal",
          color: "white",
          padding: "10px",
          fontSize: "16px",
          flexDirection: "column",
        }}>
        Upcoming Project
        <div
          style={{
            marginTop: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "personal",
            color: "white",
            padding: "10px",
            fontSize: "16px",
          }}>
          My Mart Hyper Market Hyderabad
        </div>
      </div>
    </StyledSocialMedia>
  );
};

export default UpcomingProject;

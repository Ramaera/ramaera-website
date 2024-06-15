const { useEffect, useState } = require("react");
import styled from "styled-components";

const Br = styled.br`
  display: none;
  @media only screen and (max-width: 510px) {
    display: flex;
  }
`;

const CounterDiv = styled.div`
  font-size: 1.6rem;
  padding: 2rem 8rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
    padding: 2rem;
  }
`;

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("07/30/2023").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24 * 16)) / (1000 * 60 * 60) + 16
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  state.hours >= 0 ? state.hours : (state.hours = 0);
  state.minutes >= 0 ? state.minutes : (state.minutes = 0);
  state.seconds >= 0 ? state.seconds : (state.seconds = 0);

  return (
    <div>
      <div style={{ color: "white" }}>
        <span> Registration will close in </span> : <Br />{" "}
        {state.hours || " 00"} Hours {state.minutes || "00"} Minutes{" "}
        {state.seconds || "00"} Seconds
      </div>
    </div>
  );
};

const CounterPage = () => {
  return (
    <CounterDiv>
      {/* <Countdown /> */}
      <h4 style={{ color: "white" }}>
        {/* Registration has been closed for 1st Anniversary Meet. */}
      </h4>
    </CounterDiv>
  );
};
export default CounterPage;

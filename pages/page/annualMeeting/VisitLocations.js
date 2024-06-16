import { VisitForm } from "./VisitForm";
import Button from "../../../components/Button/SubmitButton";
import { VISIT_US_ANNUAL } from "../../../apollo/queries/visitUs";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, ButtonContainer } from "./allJobStyle.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"

const Br = styled.br`
  display: none;
  @media only screen and (max-width: 510px) {
    display: flex;
  }
`;
const CounterDiv = styled.div`
  font-size: 1.6rem;
  padding: 2rem 8rem;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
    padding: 2rem;
  }
`;
const CounterDivMobile = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: none;
  color: white;
  @media only screen and (max-width: 510px) {
    display: flex;
  }
`;
// const Countdown = () => {
//   const [countdownDate, setCountdownDate] = useState(
//     new Date("07/30/2023").getTime()
//   );
//   const [state, setState] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     setInterval(() => setNewTime(), 1000);
//   }, []);

//   const setNewTime = () => {
//     if (countdownDate) {
//       const currentTime = new Date().getTime();

//       const distanceToDate = countdownDate - currentTime;

//       let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
//       let hours = Math.floor(
//         (distanceToDate % (1000 * 60 * 60 * 24 * 16)) / (1000 * 60 * 60) + 16
//       );
//       let minutes = Math.floor(
//         (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
//       );
//       let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

//       const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//       days = `${days}`;
//       setState({ days: days, hours: hours, minutes, seconds });
//     }
//   };
//   state.hours >= 0 ? state.hours : (state.hours = 0);
//   state.minutes >= 0 ? state.minutes : (state.minutes = 0);
//   state.seconds >= 0 ? state.seconds : (state.seconds = 0);

//   return (
//     <div>
//       <div style={{ color: "white" }}>
//         <span> Registration will close in </span> : <Br />{" "}
//         {state.hours || " 00"} Hours {state.minutes || "00"} Minutes{" "}
//         {state.seconds || "00"} Seconds
//       </div>
//     </div>
//   );
// };

const VisitLocations = () => {
  const [clickOnce, setClickOnce] = useState(0);

  const [data, setData] = useState(null);



  const [createGeneralMeetingVisitorForm] = useMutation(VISIT_US_ANNUAL);
  const fromDateVar = useSelector((state) => state.visitingInfo.fromDate);
  const toDateVar = useSelector((state) => state.visitingInfo.toDate);
  const emailVar = useSelector((state) => state.visitingInfo.email);
  const mobileNumberVar = useSelector(
    (state) => state.visitingInfo.mobileNumber
  );
  const nameVar = useSelector((state) => state.visitingInfo.name);
  const nameMore = useSelector((state) => state.visitingInfo.namemore);
  const numberOfPeopleVar = useSelector(
    (state) => state.visitingInfo.numberOfPeople
  );

  const plantNameVar = useSelector((state) => state.visitingInfo.plantName);
  const pwIdVar = useSelector((state) => state.visitingInfo.pwId);
  const reasonVar = useSelector((state) => state.visitingInfo.reason);
  const typeOfVisitVar = useSelector((state) => state.visitingInfo.typeOfVisit);
  const addressVar = useSelector((state) => state.visitingInfo.address);
  const theDate = fromDateVar + " " + toDateVar;

  const addMoreName = nameVar + nameMore;




  const handleSubmit = async (e) => {

        e.preventDefault();

    if(data){
      const ch = data.find(user => user?.pw_id ===pwIdVar.toUpperCase() );

      if (ch?.membership!="ADVANCE"){
        toast.error("ONLY ADVANCE KYC HOLDER(30% Partner are Allowed)")
        return 
      }

  }







    // if (!pwIdVar) {
    //   toast.error("Your PW ID is not Approved or invalid PW ID", {
    //     position: "top-center",
    //     autoClose: 3500,
    //     width: "600px",
    //     fontFamily: "monospace",
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    // }
    // if (clickOnce === 0) {
    try {
      // console.log(
      //   "pwiddd---",
      //   theDate,
      //   emailVar,
      //   mobileNumberVar,
      //   addMoreName,
      //   numberOfPeopleVar,
      //   plantNameVar,
      //   addressVar,
      //   pwIdVar,
      //   reasonVar,
      //   typeOfVisitVar,
      //   addressVar
      // );
      await createGeneralMeetingVisitorForm({
        variables: {
          date: theDate,
          email: emailVar,
          mobileNumber: mobileNumberVar,
          // name: nameVar,
          name: addMoreName,
          numberOfPeople: "1",
          plantName: plantNameVar,
          pwId: pwIdVar,
          reason: reasonVar,
          typeOfVisit: typeOfVisitVar,
          address: addressVar,
        },
      });

      toast.success(
        `Your Response has been submitted, Welcome to the Annual General Meet`,
        {
          position: "bottom-center",
          autoClose: 3500,
          style: { width: "350px", margin: "25px" },
          fontFamily: "monospace",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    
      //setClickOnce(2)
      // clearForm();
    } catch (error) {
      console.log("error---", error.message);
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 3500,
        style: { width: "350px", margin: "25px" },
        fontFamily: "monospace",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const clearForm = () => {
    setTimeout(() => {
      location.reload();
    }, "4200");
  };

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Start the data fetching process
        const response = await axios.get('https://kycramaerabackend.ramaera.com/allSubscribers');
        // Set the data from the response
        setData(response.data);
      } catch (err) {
        // Handle any errors
      
      } 
    };

    // Call the fetch function
    fetchData();
  }, []); // 

  return (
    <>
      {/* <CounterDiv>
        <Countdown />
      </CounterDiv> */}
      {/* <CounterDivMobile>
        <Countdown />
      </CounterDivMobile> */}

      <Container>
        {/* <CounterDiv>
          <div style={{}}>
            Registration has been closed for 1st Anniversary Meet.
          </div>
        </CounterDiv> */}

        <div
          style={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}></div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ToastContainer
            toastClassName="toast-font"
            style={{
              width: "600px",
              textAlign: "center",
              fontFamily:
                "Sans-serif,Times New Roman, Serif,Patrick Hand, cursive",
            }}
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div
            style={{
              position: "absolute",
              top: ".5rem",
              right: ".5rem",
              fontSize: ".8rem",
            }}></div>
          <VisitForm />
          <ButtonContainer>
            <button
              style={{ background: "none", border: "none" }}
              type="submit">
              <Button
                nav
                width="140px"
                height="2.75rem"
                Text="Submit"
                inheight="2.5rem"
              />
            </button>
          </ButtonContainer>
        </form>
      </Container>
    </>
  );
};

export default VisitLocations;

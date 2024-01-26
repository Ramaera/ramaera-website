import { VisitForm } from "./VisitForm";
import "react-toastify/dist/ReactToastify.css";
import { Container, ButtonContainer } from "./allJobStyle.js";

const VisitLocations = ({ ProImg, ProName }) => {
  return (
    <>
      <Container>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            fontSize: ".8rem",
          }}></div>
        <VisitForm ProName={ProName} ProImg={ProImg} />
      </Container>
    </>
  );
};

export default VisitLocations;

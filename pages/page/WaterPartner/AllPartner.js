import { UserForm } from "./UserForm.js";
import Button from "../../../components/Button/SubmitButton.js";
import { CREATE_WATER_DISTRIBUTION_APPLICATIONS } from "../../../apollo/queries/index";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, ButtonContainer } from "./allPartnerStyle.js";
import { useState } from "react";
import { clearForm } from "state/slice/waterApplicationSlice";

const Ideas = () => {
  const dispatch = useDispatch();
  const [clickOnce, setClickOnce] = useState(0);
  const [createApplication] = useMutation(
    CREATE_WATER_DISTRIBUTION_APPLICATIONS
  );

  const nameVar = useSelector((state) => state.waterApplication.name);
  const emailVar = useSelector((state) => state.waterApplication.email);
  const mobileVar = useSelector((state) => state.waterApplication.mobile);
  const altMobileVar = useSelector((state) => state.waterApplication.altMobile);
  const dobVar = useSelector((state) => state.waterApplication.dob);
  const aadhaarVar = useSelector((state) => state.waterApplication.aadhaar);
  const stateVar = useSelector((state) => state.waterApplication.state);
  const districtVar = useSelector((state) => state.waterApplication.district);
  const pincodeVar = useSelector((state) => state.waterApplication.pincode);
  const addressVar = useSelector((state) => state.waterApplication.address);
  const pwidVar = useSelector((state) => state.waterApplication.pwid);
  const firmNameVar = useSelector((state) => state.waterApplication.firmName);
  const firmRegistrationVar = useSelector(
    (state) => state.waterApplication.firmRegistration
  );
  const gstVar = useSelector((state) => state.waterApplication.gst);
  const bankNameVar = useSelector((state) => state.waterApplication.bankName);
  const bankAccountVar = useSelector(
    (state) => state.waterApplication.bankAccount
  );
  const bankIfscVar = useSelector((state) => state.waterApplication.bankIfsc);
  const appliedForVar = useSelector(
    (state) => state.waterApplication.appliedFor
  );
  const distributorAreaVar = useSelector(
    (state) => state.waterApplication.distributorArea
  );

  // console.log(
  // "TEEEE",
  //   nameVar,
  //   emailVar,
  //   mobileVar,
  //   altMobileVar,
  //   dobVar,
  //   aadhaarVar,
  //   stateVar,
  //   districtVar,
  //   pincodeVar,
  //   addressVar,
  //   pwidVar,
  //   firmNameVar,
  //   firmRegistrationVar,
  //   gstVar,
  //   bankNameVar,
  //   bankAccountVar,
  //   bankIfscVar,
  //   appliedForVar,
  //   distributorAreaVar
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createApplication({
        variables: {
          name: nameVar,
          email: emailVar,
          mobile: mobileVar,
          altMobile: altMobileVar,
          dob: dobVar,
          aadhaar: aadhaarVar,
          state: stateVar,
          district: districtVar,
          pincode: pincodeVar,
          address: addressVar,
          pwID: pwidVar,
          firmName: firmNameVar,
          firmRegistration: firmRegistrationVar,
          bankName: bankNameVar,
          bankAccount: bankAccountVar,
          bankIfsc: bankIfscVar,
          gst: gstVar,
          appliedFor: appliedForVar,
          distributorArea: distributorAreaVar,
        },
      });

      toast.success("Application Submitted!");
      dispatch(clearForm());

      setTimeout(() => {
        location.reload();
      }, "4500");
    } catch (error) {
      console.error("Submission error:", error.message);
      toast.error("An error occurred during submission. Please try again.");
    }
  };

  return (
    <Container>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            fontSize: ".8rem",
          }}></div>
        <UserForm />
        <ButtonContainer>
          <button style={{ background: "none", border: "none" }} type="submit">
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
  );
};

export default Ideas;

import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/SubmitButton";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { LOG_IN } from "../../../apollo/queries/index";
import { useMutation } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setAccessToken } from "../../../state/slice/accessTokenSlice";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Container, FormBox, LoginContainer, LoginTitle } from "./style";
import {
  getEmail,
  getName,
  getRole,
  getUserId,
} from "../../../state/slice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const UserLoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [emailVar, setEmail] = useState("");
  const [passwordVar, setPassword] = useState("");
  const [loginUser, { loading, data }] = useMutation(LOG_IN);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        email: emailVar,
        password: passwordVar,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PLANETSERA_URL}/rest-auth/login`,
        postData
      );
      if (response?.data) {
        toast.success("Login Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(getName(response?.data?.user?.name));
        dispatch(getRole(response?.data?.user?.role));
        dispatch(getUserId(response?.data?.user?.id));
        window.localStorage.setItem(
          "accessToken",
          response?.data?.tokens?.accessToken
        );
        router.push("/earn");
      }
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

  /* function myStopFunction() {
    router.push("Dashboard")
  } */
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ marginTop: "20px", marginBottom: "30px", width: "90%" }}>
        <Text
          Text="USER"
          lg="linear-gradient(to right, #ffa73d, gold)"
          font
          size="clamp(2.2rem, 1.2vw, 1.5rem)"
          fw="400"
          align="center"
          lh="50px"
          m="10px 0 0 0"
          xmsize="clamp(2.4rem, 1.5vw, 2rem)"
          xssize="clamp(2.4rem, 1.5vw, 2rem)"
          msize="2rem"
          mwidth="100%"
          mmwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />
        <Text
          Text="LOGIN"
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
          mmwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <LoginContainer>
          <LoginTitle>
            <EmailIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "7px",
              }}
            />
            <input
              type="email"
              placeholder="Email Id"
              required
              onChange={(e) => {
                setEmail(e.target.value);
                //dispatch(getEmail(e.target.value))
              }}
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
              className="loginInput"
            />
          </LoginTitle>
          <LoginTitle>
            <LockIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "6px",
              }}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{
                position: "static",
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
              className="loginInput"
            />
            <span
              style={{
                cursor: "pointer",
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                margin: "6px 0 0 -50px",
              }}
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </LoginTitle>
          <button type="submit" style={{ background: "none", border: "none" }}>
            <Button
              width="150px"
              padding="0.85rem 1rem"
              height="2.75rem"
              Text="Login"
              inheight="2rem"
              sh="none"
              m="30px 0 0 0"
            />
          </button>

          <h5>
            If not a User ?{" "}
            <Link href={"/Register"}>
              <span style={{ color: "orange" }}>Click Here For Register</span>{" "}
            </Link>
          </h5>
        </LoginContainer>
      </form>
    </>
  );
};

export default UserLoginForm;

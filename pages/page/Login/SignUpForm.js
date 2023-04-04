import Text from "../../../components/Text/Text"
import Button from "../../../components/Button/SubmitButton"
import EmailIcon from "@mui/icons-material/Email"
import LockIcon from "@mui/icons-material/Lock"
import { ADD_USER } from "../../../apollo/queries/signUp"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
// import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"
import {
  Li,
  P,
  Container,
  FormBox,
  LoginTitlee,
  LoginContainer,
  LoginTitle,
  Access,
  Details,
} from "./style"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import Link from "next/link"
import Settings from "../Dashboard/Settings"

const SignUpForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [nameVar, setNameVar] = useState("")
  const [emailVar, setEmailVar] = useState("")
  const [passwordVar, setPasswordVar] = useState("")
  const [roleVar, setRoleVar] = useState("")
  const [signup, { loading, data }] = useMutation(ADD_USER)
  if (loading) {
  }
  if (data) {
    //console.log(data)
  }
  let ACCESSTOKEN
  if (typeof window !== "undefined") {
    ACCESSTOKEN = localStorage.getItem("accessToken")
  }
  if (!ACCESSTOKEN) {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login"
        >
          Login to continue
        </Link>
      </>
    )
  }
  const handleSubmit = async (e) => {
    //console.log(nameVar, emailVar, passwordVar, roleVar)
    e.preventDefault()
    try {
      const data1 = await signup({
        variables: {
          email: emailVar,
          password: passwordVar,
          name: nameVar,
          role: roleVar,
        },
      })
      toast.success("User Created ", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setTimeout(() => {
        router.push("/Dashboard")
      }, "3200")
    } catch (err) {
      if (err) {
        toast.error("Please check your email and password", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }
  }
  /* function myStopFunction() {
    router.push("Dashboard")
  } */
  return (
    <Container>
      <div
        style={{
          color: "white",
          fontSize: "50px",
          right: "2%",
          top: "-200px",
          zIndex: "10",
          position: "absolute",
          cursor: "pointer",
        }}
      >
        <Settings />
      </div>
      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <Text
          Text="Create User"
          lg="linear-gradient(to right, #FFA73D, gold)"
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
        <div style={{ height: "50px" }}></div>
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
                color: "#FF8800",
                marginTop: "7px",
              }}
            />
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setNameVar(e.target.value)}
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
              className="loginInput"
            />
          </LoginTitle>
          <LoginTitlee>
            <div>
              <EmailIcon
                style={{
                  position: "absolute",
                  transform: "translateX(1vmax)",
                  fontSize: "30px",
                  color: "#FF8800",
                  marginTop: "7px",
                }}
              />
              <select
                required
                placeholder="Role"
                onChange={(e) => setRoleVar(e.target.value)}
                style={{
                  width: "380px",
                  height: "45px",
                  paddingLeft: "60px",
                  marginTop: "0",
                }}
                className="loginInput"
              >
                <option value={""} disabled selected>
                  Select Role Type
                </option>
                <option value={"ADMIN"}>ADMIN</option>
                <option value={"EXECUTIVE"}>PROJECT TEAM</option>
                <option value={"HR"}>HR</option>
                <option value={"SALES"}>SALES</option>
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <Access style={{ position: "absolute" }}>
                <span
                  style={{
                    position: "absolute",
                    margin: "right",
                    marginTop: "-30px",
                    display: "flex",
                  }}
                >
                  &#63;
                </span>
                <Details>
                  <h2
                    style={{
                      textAlign: "center",
                      textDecorationLine: "underline",
                    }}
                  >
                    Role Access
                  </h2>
                  <P>Admin</P>
                  <Li>Visit Us Responses</Li>
                  <Li>Project (Idea) Responses</Li>
                  <Li>Contact Us Responses</Li>
                  <Li>Distributor Channel Responses</Li>
                  <Li>Contact Us Responses</Li>
                  <P>HR</P>
                  <Li>Visit Us Responses</Li>
                  <P>Sales</P>
                  <Li>Distributor Channel Responses</Li>
                  <P>Project Team</P>
                  <Li>Project (Idea) Responses</Li>
                </Details>
              </Access>
            </div>
          </LoginTitlee>
          <LoginTitle>
            <EmailIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#FF8800",
                marginTop: "7px",
              }}
            />
            <input
              type="email"
              placeholder="Email Id"
              required
              onChange={(e) => setEmailVar(e.target.value)}
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
                color: "#FF8800",
                marginTop: "6px",
              }}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setPasswordVar(e.target.value)}
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
                right: "560px",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </LoginTitle>
          <button type="submit" style={{ background: "none", border: "none" }}>
            <Button
              Text="Create User"
              width="170px"
              padding="0.85rem 1rem"
              height="2.75rem"
              inheight="2rem"
              sh="none"
              m="10px 0 20px 0"
            />
          </button>
        </LoginContainer>
      </FormBox>
    </Container>
  )
}
export default SignUpForm

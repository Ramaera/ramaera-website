import Text from "../../../components/Text/Text"
import Button from "../../../components/Button/SubmitButton"
import EmailIcon from "@mui/icons-material/Email"
import LockIcon from "@mui/icons-material/Lock"
import { ADD_USER } from "../../../apollo/queries/signUp"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { Container, FormBox, LoginContainer, LoginTitle } from "./style"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
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
    console.log(data)
  }

  const handleSubmit = async (e) => {
    console.log(nameVar, emailVar, passwordVar, roleVar)

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
      window.localStorage.setItem("accessToken", data1.data.login.accessToken)
      dispatch(setAccessToken(data1.data.login.accessToken))

      //router.push("/Dashboard")
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
      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <Text
          Text="Create User"
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
                color: "#ff8800",
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
              type="text"
              placeholder="Role"
              required
              onChange={(e) => setRoleVar(e.target.value)}
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
                color: "#ff8800",
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
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              <VisibilityOffIcon />
            </span>
          </LoginTitle>
          <button type="submit" style={{ background: "none", border: "none" }}>
            <Button
              Text="Create User"
              width="150px"
              padding="0.85rem 1rem"
              height="2.75rem"
              inheight="2rem"
              sh="none"
              m="50px 0 0 0"
            />
          </button>
        </LoginContainer>
      </FormBox>
    </Container>
  )
}

export default SignUpForm

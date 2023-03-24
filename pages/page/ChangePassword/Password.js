import Text from "../../../components/Text/Text"
import Button from "../../../components/Button/SubmitButton"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import LockIcon from "@mui/icons-material/Lock"
import LockResetIcon from "@mui/icons-material/LockReset"
import { useRouter } from "next/router"
import { Container, FormBox, LoginContainer, LoginTitle } from "./style"
import { useMutation } from "@apollo/client"
import { CHANGE_PASSWORD } from "apollo/queries/changePassword"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Password = () => {
  const router = useRouter()

  const [changePassword] = useMutation(CHANGE_PASSWORD)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newConfirmPassword, setNewConfirmPassword] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    if (newPassword === newConfirmPassword) {
      changePassword({
        variables: {
          OldPassword: oldPassword,
          NewPassword: newConfirmPassword,
        },
      })
      toast.success("Password Changed", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setTimeout(() => {
        router.push("/Dashboard")
      }, "2000")
    } else {
      toast.error("Passwords does not match", {
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
  return (
    <Container>
      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <Text
          Text="UPDATE PASSWORD"
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
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />

        <LoginContainer>
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
          <LoginTitle>
            <LockOpenIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "7px",
              }}
            />
            <input
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Old Password"
              required
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
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
              type="password"
              placeholder="New Password"
              required
              onChange={(e) => setNewPassword(e.target.value)}
              id="password"
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
            />
          </LoginTitle>
          <LoginTitle>
            <LockResetIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "6px",
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              id="confirmPassword"
              onChange={(e) => setNewConfirmPassword(e.target.value)}
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
            />
          </LoginTitle>
          <button type="submit" style={{ background: "none", border: "none" }}>
            <Button
              width="150px"
              padding="0.85rem 1rem"
              height="2.75rem"
              Text="Update"
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

export default Password

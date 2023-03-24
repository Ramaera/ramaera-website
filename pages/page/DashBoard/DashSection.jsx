import Link from "next/link"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import { useDispatch, useSelector } from "react-redux"
import LogoutIcon from "@mui/icons-material/Logout"
import LockResetIcon from "@mui/icons-material/LockReset"
import PersonIcon from "@mui/icons-material/Person"
import BadgeIcon from "@mui/icons-material/Badge"

const DashSection = () => {
  const nameVar = useSelector((state) => state.logInUser.name)
  const roleVar = useSelector((state) => state.logInUser.role)

  let ACCESSTOKEN
  const dispatch = useDispatch()
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

  const logMeOut = () => {
    dispatch(setAccessToken(""))
    window.localStorage.setItem("accessToken", "")
  }
  try {
    return (
      <>
        <div className="container heading-container">
          <h1 className="heading-text">Dashboard</h1>
          <label class="dropdown">
            <div class="dd-button">Dropdown</div>
            <AccountCircleIcon style={{ fontSize: "50px", color: "white" }} />
            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li style={{ cursor: "default" }}>
                <span style={{ color: "black" }}>
                  <BadgeIcon fontSize={"small"} />
                  {nameVar ? nameVar : "Name : "}
                </span>
              </li>
              <li class="divider"></li>
              <li style={{ cursor: "default" }}>
                <span style={{ color: "black" }}>
                  <PersonIcon fontSize={"small"} />
                  {roleVar ? ("Role : ", roleVar) : "Role : "}
                </span>
              </li>
              <li className="divider"></li>
              <li>
                <Link href="/Dashboard/ChangePassword">
                  <LockResetIcon fontSize={"small"} />
                  Change Password
                </Link>
              </li>
              <li class="divider"></li>

              <li>
                <Link onClick={() => logMeOut()} href="/Login">
                  <LogoutIcon fontSize={"small"} />
                  Logout
                </Link>
              </li>
            </ul>
          </label>
        </div>
        <div className="container table-container">
          <div className="basis-2/12 table-2"></div>
          <div className="basis-8/12 table-8">
            <table id="myTable">
              <thead>
                <tr className="header">
                  <th>Serial No.</th>
                  <th>Dashboard</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Project (Idea) Responses Data</td>
                  <td>
                    <Link
                      href="/SubmitProjectResponses"
                      className="btn success"
                    >
                      Responses
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Contact Us Responses Data</td>
                  <td>
                    <Link href="/ContactUsResponses" className="btn success">
                      Responses
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Distributer Channel Responses Data</td>
                  <td>
                    <Link
                      href="/DistributionChannelResponses"
                      className="btn success"
                    >
                      Responses
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="basis-2/12 table-2"></div>
        </div>
      </>
    )
  } catch {
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
}

export default DashSection

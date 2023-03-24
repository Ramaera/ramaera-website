import Link from "next/link"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import { useDispatch, useSelector } from "react-redux"
import LogoutIcon from "@mui/icons-material/Logout"
import LockResetIcon from "@mui/icons-material/LockReset"
import PersonIcon from "@mui/icons-material/Person"
import BadgeIcon from "@mui/icons-material/Badge"
import { Typography } from "@mui/material"
import Button from "../../../components/Button/SubmitButton"

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
            <AccountCircleIcon
              style={{ fontSize: "50px", color: "white", cursor: "pointer" }}
            />
            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li style={{ cursor: "default" }}>
                <span style={{ color: "black" }}>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <BadgeIcon style={{ marginRight: "10px" }} />
                    {nameVar ? `Name : ${nameVar}` : "Name : "}
                  </Typography>
                </span>
              </li>
              <li class="divider"></li>
              <li style={{ cursor: "default" }}>
                <span style={{ color: "black" }}>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <PersonIcon style={{ marginRight: "10px" }} />
                    {roleVar ? `Role : ${roleVar}` : "Role : "}
                  </Typography>
                </span>
              </li>
              <li className="divider"></li>
              <li>
                <Link href="/Dashboard/ChangePassword">
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <LockResetIcon style={{ marginRight: "10px" }} />
                    Change Password
                  </Typography>
                </Link>
              </li>
              <li class="divider"></li>

              <li>
                <Link onClick={() => logMeOut()} href="/Login">
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <LogoutIcon style={{ marginRight: "10px" }} />
                    Logout
                  </Typography>
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
                  <td className="dashboardText">
                    Project (Idea) Responses Data
                  </td>
                  <td>
                    <Link
                      href="/SubmitProjectResponses"
                      // className="btn success"
                    >
                      <button
                        style={{ background: "none", border: "none" }}
                        type="submit"
                      >
                        <Button
                          nav
                          width="auto"
                          height="auto"
                          Text="Responses"
                          inheight="auto"
                          fontSize="auto"
                          padding=" 15px 10px"
                        />
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="dashboardText">Contact Us Responses Data</td>
                  <td>
                    <Link
                      href="/ContactUsResponses"
                      //className="btn success"
                    >
                      <button
                        style={{ background: "none", border: "none" }}
                        type="submit"
                      >
                        <Button
                          nav
                          width="auto"
                          height="auto"
                          Text="Responses"
                          inheight="auto"
                          fontSize="auto"
                          padding=" 15px 10px"
                        />
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="dashboardText">
                    Distributer Channel Responses Data
                  </td>
                  <td>
                    <Link
                      href="/DistributionChannelResponses"
                      // className="btn success"
                    >
                      <button
                        style={{ background: "none", border: "none" }}
                        type="submit"
                      >
                        <Button
                          nav
                          width="auto"
                          height="auto"
                          Text="Responses"
                          inheight="auto"
                          fontSize="auto"
                          padding=" 15px 10px"
                        />
                      </button>
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

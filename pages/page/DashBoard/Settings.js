import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/Logout"
import LockResetIcon from "@mui/icons-material/LockReset"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import PersonIcon from "@mui/icons-material/Person"
import BadgeIcon from "@mui/icons-material/Badge"
import { Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "state/slice/userSlice"
import Link from "next/link"
import { useRouter } from "next/router"
import GridViewIcon from "@mui/icons-material/GridView"
const Settings = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const nameVar = useSelector((state) => state.logInUser.name)
  const roleVar = useSelector((state) => state.logInUser.role)
  const logMeOut = () => {
    dispatch(logout())
  }
  return (
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
        {router.pathname !== "/Dashboard" && (
          <>
            <li className="divider"></li>
            <li>
              <Link href="/Dashboard">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <GridViewIcon style={{ marginRight: "10px" }} />
                  Dashboard
                </Typography>
              </Link>
            </li>
          </>
        )}
        {roleVar === "ADMIN" && (
          <>
            <li className="divider"></li>
            <li>
              <Link href="/Dashboard/CreateUser">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <AddCircleOutlineIcon style={{ marginRight: "10px" }} />
                  Create User
                </Typography>
              </Link>
            </li>
          </>
        )}
        <li class="divider"></li>
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
  )
}

export default Settings

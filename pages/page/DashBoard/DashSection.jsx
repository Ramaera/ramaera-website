import Link from "next/link"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import { useDispatch } from "react-redux"

let ACCESSTOKEN

const DashSection = () => {
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
  return (
    <>
      <div className="container heading-container">
        <h1 className="heading-text">Dashboard Details </h1>
        <label class="dropdown">
          <div class="dd-button">Dropdown</div>
          <AccountCircleIcon style={{ fontSize: "50px", color: "white" }} />
          <input type="checkbox" class="dd-input" id="test" />

          <ul class="dd-menu">
            <li>Name</li>
            <li class="divider"></li>
            <li>Change Password</li>
            <li class="divider"></li>
            <li>Role</li>
            <li className="divider"></li>

            <li>
              <Link onClick={() => logMeOut()} href="/Login">
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
                <th>DashBoard</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Data</td>
                <td>
                  <Link href="/SubmitProjectResponses" className="btn success">
                    View All
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Contact Data</td>
                <td>
                  <Link href="/ContactUsResponses" className="btn success">
                    View All
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Distributer Data</td>
                <td>
                  <Link
                    href="/DistributionChannelResponses"
                    className="btn success"
                  >
                    View All
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
}

export default DashSection

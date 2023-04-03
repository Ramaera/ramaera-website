import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Button from "../../../components/Button/SubmitButton"
import Settings from "./Settings"

const DashSection = () => {
  const roleVar = useSelector((state) => state.logInUser.role)

  let ACCESSTOKEN
  useEffect(() => {
    if (typeof window !== "undefined") {
      ACCESSTOKEN = localStorage.getItem("accessToken")
    }
  }, [])

  useEffect(() => {
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
  }, [ACCESSTOKEN])

  try {
    return (
      <>
        <div className="container heading-container">
          <h1 className="heading-text">Dashboard</h1>
          <Settings />
        </div>
        <div className="container table-container">
          <div className="basis-2/12 table-2"></div>
          <div className="basis-8/12 table-8">
            <table id="myTable">
              <thead>
                <tr className="header">
                  <th>S. No.</th>
                  <th>Dashboard</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {roleVar === "ADMIN" ? (
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
                ) : null}
                {roleVar === "ADMIN" ? (
                  <tr>
                    <td>2</td>
                    <td className="dashboardText">Visit Us Responses</td>
                    <td>
                      <Link
                        href="/VisitUsResponses"
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
                ) : null}
                {roleVar === "ADMIN" ? (
                  <tr>
                    <td>3</td>
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
                ) : null}
                {roleVar === "ADMIN" || roleVar === "SALES" ? (
                  <tr>
                    <td>{roleVar === "ADMIN" ? "4" : "1"}</td>
                    <td className="dashboardText">
                      Distributor Channel Responses Data
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
                ) : null}
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
  } catch (err) {
    console.log(err.message)
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

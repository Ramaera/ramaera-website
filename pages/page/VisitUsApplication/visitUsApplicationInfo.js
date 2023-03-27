import { useState } from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useQuery } from "@apollo/client"
import { GET_ALL_VISITORS } from "../../../apollo/queries/visitUs"
import { useDispatch, useSelector } from "react-redux"
import { changeVisitUsData } from "../../../state/slice/applicantDataSlice"
import Link from "next/link"
import Button from "../../../components/Button/SubmitButton"
import LogoutIcon from "@mui/icons-material/Logout"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"

const VisitUsApplicationInfo = () => {
  const projectData = useSelector((state) => state.applicationData.projectData)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_ALL_VISITORS)
  const [anchorEl, setAnchorEl] = useState(false)

  if (loading) {
    return "Loading..."
  }
  const ACCESSTOKEN = window.localStorage.getItem("accessToken")
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
  const dataPush = async () => {
    try {
      dispatch(changeVisitUsData(data.findAllVisitorsList))
    } catch (err) {
      console.log(err)
    }
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const columns = [
    {
      field: "number",
      headerName: " Details",
      width: 150,
      editable: false,
      selection: false,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <Link href={`/VisitUsResponses/${params.value}`}>
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="auto"
              height="auto"
              Text="View Details"
              inheight="auto"
              fontSize="auto"
              padding=" 5px 8px"
            />
          </button>
          {/* <button>View Details</button> */}
        </Link>
      ),
    },
    {
      field: "name",
      headerName: " Name",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "reason",
      headerName: "Reason for Visit",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 300,
      flex: 1,
    },
    {
      field: "plantName",
      headerName: "Location of Visit",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "typeOfVisit",
      headerName: "Type of Visit",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "pwId",
      headerName: "PWID",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "numberOfPeople",
      headerName: "Number Of People",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "mobileNumber",
      headerName: "Phone Number",
      minWidth: 200,
      flex: 1,
    },
  ]

  const rows = []
  const logMeOut = () => {
    dispatch(setAccessToken(""))
    window.localStorage.setItem("accessToken", "")
  }
  if (data) {
    dataPush()
    data.findAllVisitorsList.forEach((item, index) => {
      console.log("SDffd", item)
      rows.push({
        id: index,
        number: index + 1,
        name: item.name,
        email: item.email,
        mobileNumber: item.mobileNumber,
        reason: item.reason,
        numberOfPeople: item.numberOfPeople,
        pwId: item.pwId,
        typeOfVisit: item.typeOfVisit,
        plantName: item.plantName,
        address: item.address,
        date: item.date,
        time: item.time,
      })
    })

    return (
      <>
        <div>
          <Text
            Text="Visit Us Responses"
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

          <AccountCircleIcon
            onClick={handleMenu}
            style={{
              color: "white",
              fontSize: "50px",
              right: "5%",
              top: "20px",
              position: "absolute",
              cursor: "pointer",
            }}
          />

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link onClick={() => logMeOut()} href="/Login">
              <MenuItem>
                <LogoutIcon fontSize={"medium"} />
                <div style={{ fontWeight: "500", fontSize: "12px" }}>
                  LogOut
                </div>
              </MenuItem>
            </Link>
            <Link href="/Dashboard">
              <MenuItem>
                <div style={{ fontWeight: "500", fontSize: "12px" }}>
                  Dashboard
                </div>
              </MenuItem>
            </Link>
          </Menu>

          <Box className="boxGird">
            <DataGrid
              slots={{
                toolbar: GridToolbar,
              }}
              //   components={{ Toolbar: GridToolbar }}
              //   componentsProps={{
              //   toolbar: {
              //   printOptions: { disableToolbarButton: true },
              //   csvOptions: { disableToolbarButton: true },            }
              //  }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 8,
                  },
                },
              }}
              pageSizeOptions={[8]}
              disablecolumnSelectionOnClick
              displayRowCheckbox={false}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </>
    )
  } else {
    return <div onClick={location.reload()}></div>
  }
}

export default VisitUsApplicationInfo
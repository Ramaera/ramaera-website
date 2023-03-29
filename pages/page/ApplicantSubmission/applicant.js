import React, { useState } from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Container } from "./style"
import { useQuery } from "@apollo/client"
import { GET_APPLICATIONS } from "../../../apollo/queries"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { changeAppData } from "../../../state/slice/applicantDataSlice"
import Button from "../../../components/Button/SubmitButton"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import LogoutIcon from "@mui/icons-material/Logout"
import { logout } from "../../../state/slice/userSlice"
import Settings from "../Dashboard/Settings"

const Applicant = () => {
  let ACCESSTOKEN

  const applicationData = useSelector((state) => state.applicationData.appData)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_APPLICATIONS)
  const [anchorEl, setAnchorEl] = useState(false)

  if (loading) {
    return "Loading..."
  }

  ACCESSTOKEN = localStorage.getItem("accessToken")

  if (!ACCESSTOKEN) {
    //console.log("eerihugouverbdf this is me")
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href="/Login"
        >
          Login to continue
        </Link>
      </>
    )
  }

  const dataPush = async () => {
    try {
      dispatch(changeAppData(data.applicants))
    } catch (err) {
      //console.log(err)
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
        <Link href={`/DistributionChannelResponses/${params.value}`}>
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
      field: "applicant",
      headerName: "Applicant",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      minWidth: 120,
      flex: 1,
    },
    {
      field: "district",
      headerName: "District",
      minWidth: 160,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
    },

    {
      field: "applicantAddress",
      headerName: "Address",
      minWidth: 300,
      flex: 1,
      sortable: false,
    },

    {
      field: "mobileNumber",
      headerName: "Mobile",
      minWidth: 150,
      flex: 1,
      sortable: false,
    },

    {
      field: "extraInfo",
      headerName: "Info",
      minWidth: 150,
      flex: 1,
      sortable: false,
    },
  ]
  const rows = []

  if (data) {
    dataPush()
    data.applicants.forEach((item, index) => {
      rows.push({
        id: index,
        number: index + 1,
        name: item.name,
        email: item.email,
        applicant: item.applicantType,
        state: item.State,
        district: item.District,
        status: item.status,
        applicantAddress: item.applicantAddress,
        mobileNumber: item.mobileNumber,
        extraInfo: item.extraInfo,
      })
    })

    return (
      <>
        <Container>
          <Text
            Text="Distribution Channel Responses"
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

          <div
            style={{
              color: "white",
              fontSize: "50px",
              right: "5%",
              top: "20px",
              zIndex: "10",
              position: "absolute",
              cursor: "pointer",
            }}
          >
            <Settings />
          </div>

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
              disablecolumnSelectionOnClick={false}
              displayRowCheckbox={false}
              //onClick={routeChange}
              disableRowSelectionOnClick
            />
          </Box>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <div
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => location.reload()}
        >
          Click here to Get Data
        </div>
      </>
    )
  }
}

export default Applicant

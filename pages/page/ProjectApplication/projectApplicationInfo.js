import { useState } from "react"
import { DataGrid ,GridToolbar} from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useQuery } from "@apollo/client"
import { GetProjectApplications } from "../../../apollo/queries/idea"
import { useDispatch, useSelector } from "react-redux"
import { changeProjectData } from "../../../state/slice/applicantDataSlice"
import Link from "next/link"
import Button from "../../../components/Button/SubmitButton"

const ProjectApplicationInfo = () => {
  const projectData = useSelector((state) => state.applicationData.projectData)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GetProjectApplications)
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
      dispatch(changeProjectData(data.AllProjectDetails))
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
      filterable:false,
      sortable:false,
      renderCell: (params) => (
        <Link href={`/SubmitProjectResponses/${params.value}`}>
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
      flex:1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 250,
      flex:1,
    },
    {
      field: "contact",
      headerName: "Contact No.",
      minWidth: 200,
      flex:1,
    },
    {
      field: "project",
      headerName: "Project Name",
      minWidth: 300,
      flex:1,
    },
    {
      field: "createAt",
      headerName: "Created At",
      minWidth: 150,
      flex:1,
    },
  ]

  const rows = []
  if (data) {
    dataPush()
    data.AllProjectDetails.forEach((item, index) => {
      rows.push({
        id: index,
        number: index + 1,
        name: item.name,
        email: item.email,
        contact: item.mobileNumber,
        project: item.yourProduct,
        createdAt: item.createAt,
      })
    })

    return (
      <>
        <div>
          <Text
            Text="Project Application List"
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
            <MenuItem onClick={handleClose}>Name</MenuItem>
            <a href="/PasswordChange">
              <MenuItem onClick={handleClose}>Change Password</MenuItem>
            </a>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Box className="boxGird">
            <DataGrid
              components={{ Toolbar: GridToolbar }}
              componentsProps={{
              toolbar: {
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: true },            }
             }}
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

export default ProjectApplicationInfo

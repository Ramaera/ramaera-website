import { useState } from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useQuery } from "@apollo/client"
import { GET_PROJECT_APPLICATIONS } from "../../../apollo/queries/idea"
import { useDispatch, useSelector } from "react-redux"
import { changeProjectData } from "../../../state/slice/applicantDataSlice"
import Link from "next/link"
import Button from "../../../components/Button/SubmitButton"
import LogoutIcon from "@mui/icons-material/Logout"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
const ProjectApplicationInfo = () => {
  const projectData = useSelector((state) => state.applicationData.projectData)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_PROJECT_APPLICATIONS)
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
      filterable: false,
      sortable: false,
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
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact No.",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "project",
      headerName: "Project Name",
      minWidth: 300,
      flex: 1,
    },
    {
      field: "director",
      headerName: "Director",
      minWidth: 200,
      flex: 1,
    },
    // {
    //   field: "createAt",
    //   headerName: "Created At",
    //   minWidth: 150,
    //   flex:1,
    // },
    {
      field: "city",
      headerName: "City",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "dob",
      headerName: "dob",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "occupation",
      headerName: "occupation",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "yourProjectType",
      headerName: "Project Type",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "youAre",
      headerName: "you Are",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "typeOfPartnership",
      headerName: "Partnership Type",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "fundingType",
      headerName: "Funding Type",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "receivingMode",
      headerName: "Receiving Mode",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "goal",
      headerName: "Goal",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "yourProjectTitle",
      headerName: "Project Title",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "brief",
      headerName: "Brief",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "marketProblem",
      headerName: "Market Problem",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "solution",
      headerName: "Solution",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "businessModel",
      headerName: "Business Model",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "sizeOfMarket",
      headerName: "Market Size",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "currentTransaction",
      headerName: "Current Transaction",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "competitiveLandscape",
      headerName: "Competitive Landscape",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "financialProjection",
      headerName: "Financial Projection",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "fundNeed",
      headerName: "Fund Need",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "equityStructure",
      headerName: "Equity Structure",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "exitOption",
      headerName: "Exit Option",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "selectFundingType",
      headerName: "Funding Type",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "fundingStage",
      headerName: "Funding Stage",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "selectFundingTypeAgain",
      headerName: "Funding Type Again",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "fundingAmount",
      headerName: "Funding Amount",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "fundingDate",
      headerName: "Funding Date",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "linkedinProfile",
      headerName: "Linkedin Profile",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "twitterProfile",
      headerName: "Twitter Profile",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "facebookProfile",
      headerName: "Facebook Profile",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "instagramProfile",
      headerName: "Instagram Profile",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "websiteURL",
      headerName: "Website URL",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "thanksNote",
      headerName: "Thanks Note",
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
    data.AllProjectDetails.forEach((item, index) => {
      //console.log("SDffd", item)
      rows.push({
        id: index,
        number: index + 1,
        name: item.name,
        email: item.email,
        contact: item.mobileNumber,
        project: item.yourProduct,
        //createdAt: item.createAt,
        city: item.City,
        state: item.State,
        country: item.Country,
        dob: item.dob,
        occupation: item.occupation,
        yourProjectType: item.yourProjectType,
        youAre: item.youAre,
        typeOfPartnership: item.typeOfPartnership,
        fundingType: item.fundingType,
        fundingStage: item.fundingStage,
        receivingMode: item.receivingMode,
        goal: item.goal,
        yourProjectTitle: item.yourProjectTitle,
        brief: item.brief,
        marketProblem: item.marketProblem,
        solution: item.solution,
        businessModel: item.businessModel,
        sizeOfMarket: item.sizeOfMarket,
        currentTransaction: item.currentTransaction,
        competitiveLandscape: item.competitiveLandscape,
        financialProjection: item.financialProjection,
        fundNeed: item.fundNeed,
        equityStructure: item.equityStructure,
        exitOption: item.exitOption,
        selectFundingType: item.selectFundingType,
        selectFundingTypeAgain: item.selectFundingTypeAgain,
        fundingAmount: item.fundingAmount,
        fundingDate: item.fundingDate,
        linkedinProfile: item.linkedinProfile,
        twitterProfile: item.twitterProfile,
        facebookProfile: item.facebookProfile,
        instagramProfile: item.instagramProfile,
        websiteURL: item.websiteURL,
        thanksNote: item.thanksNote,
        director: item.director,
      })
    })

    return (
      <>
        <div>
          <Text
            Text="Project Idea Responses"
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

export default ProjectApplicationInfo

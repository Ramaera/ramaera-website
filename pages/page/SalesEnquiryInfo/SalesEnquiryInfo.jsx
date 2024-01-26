///Users/apple/Documents/Ramaera-website/ramaera-website/ramaera-website/pages/page/ContactInfo/contactInfo.js

import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Text from "../../../components/Text/Text";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useQuery } from "@apollo/client";
import { GET_SALES_ENQUIRY } from "../../../apollo/queries/salesEnquiry";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeSalesEnquiryData } from "../../../state/slice/applicantDataSlice";
import { logout } from "../../../state/slice/userSlice";
import Button from "../../../components/Button/SubmitButton";
import { setAccessToken } from "../../../state/slice/accessTokenSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import Settings from "../Dashboard/Settings";

const SalesEnquiryInfo = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_SALES_ENQUIRY);
  // console.log("data sales", data);
  const [anchorEl, setAnchorEl] = useState(false);

  if (loading) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
        }}>
        Loading...
      </p>
    );
  }

  const ACCESSTOKEN = window.localStorage.getItem("accessToken");
  if (!ACCESSTOKEN) {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login">
          Login to continue
        </Link>
      </>
    );
  }

  const dataPush = async () => {
    try {
      dispatch(changeSalesEnquiryData(data.salesEnquiry));
    } catch (err) {
      //console.log(err)
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Link href={`/SalesEnquiryResponses/${params.value}`}>
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
      field: "mobileNumber",
      headerName: "Mobile No.",
      minWidth: 280,
      flex: 1,
    },
    {
      field: "product",
      headerName: "Product",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      minWidth: 350,
      flex: 1,
    },
  ];

  const rows = [];

  if (data) {
    dataPush();
    data.salesEnquiry.forEach((item, index) => {
      rows.unshift({
        id: index,
        number: index + 1,
        name: item.name,
        email: item.email,
        mobileNumber: item.mobileNumber,
        product: item.product,
        remarks: item.remarks,
      });
    });

    return (
      <>
        <div>
          <Text
            Text="Sales Enquiry Responses"
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
            }}>
            <Settings />
          </div>

          <Box className="boxGird">
            <DataGrid
              slots={{
                toolbar: GridToolbar,
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
    );
  } else {
    return <div onClick={location.reload()}></div>;
  }
};

export default SalesEnquiryInfo;

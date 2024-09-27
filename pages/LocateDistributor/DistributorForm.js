import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Text from "../../components/Text/Text";
import { data } from "./Data";

const DistributorForm = () => {
  const columns = [
    {
      field: "number",
      headerName: "S.No",
      width: 150,
      editable: false,
      selection: false,
      filterable: false,
      sortable: false,
    },
    {
      field: "type",
      headerName: " Type",
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
      field: "area",
      headerName: " Area",
      minWidth: 200,
      flex: 1,
    },
    // {
    //   field: "zone",
    //   headerName: "Zone",
    //   minWidth: 200,
    //   flex: 1,
    // },
    {
      field: "business",
      headerName: "Business Name",
      minWidth: 300,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact No.",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      width: "max-content",
      minWidth: 1000,
      flex: 1,
    },
  ];

  const rows = [];

  if (data) {
    data.forEach((item, index) => {
      rows.push({
        id: index,
        number: index + 1,
        type: item.type,
        state: item.state,
        area: item.area,
        // zone: item.zone,
        business: item.business,
        name: item.name,
        email: item.email,
        contact: item.mobile,
        address: item.address,
      });
    });

    return (
      <>
        <div style={{ marginTop: "20px" }}>
          <Text
            Text="Locate a Stockist or Distributor"
            lg="linear-gradient(to right, #ffa73d, gold)"
            font
            size="clamp(2.2rem, 1.2vw, 1.5rem)"
            fw="400"
            align="center"
            lh="50px"
            m="0 0 1rem 0"
            xmsize="clamp(2.4rem, 1.5vw, 2rem)"
            xssize="clamp(2.4rem, 1.5vw, 2rem)"
            msize="1.8rem"
            mwidth="100%"
            padding="0"
            mpadding="10px"
            mta="center"
            mlh="unset"
          />

          <Box className="boxGird" sx={{ width: "90vw" }}>
            <DataGrid
              slotProps={{
                toolbar: {
                  printOptions: { disableToolbarButton: true }, // hide export button
                  csvOptions: { disableToolbarButton: true },
                  // showQuickFilter: true, //for searching
                },
              }}
              slots={{
                toolbar: GridToolbar,
              }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              pageSizeOptions={[20]}
              disablecolumnSelectionOnClick
              displayRowCheckbox={false}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </>
    );
  }
};

export default DistributorForm;

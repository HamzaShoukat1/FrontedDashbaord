
import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid, type GridColDef ,GridToolbar} from "@mui/x-data-grid";
import { Header } from "../../RootLayer/index";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../context/themeContext";




function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex:0.5 },
    {field: "registrarId",headerName:"Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
     {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
      {
      field: "city",
      headerName: "City",
      flex: 1,
    },
 
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="Lists of Contacts For Future Reference" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          disableRowSelectionOnClick
          showToolbar
        />
      </Box>
    </Box>
  );
}

export default Contacts;

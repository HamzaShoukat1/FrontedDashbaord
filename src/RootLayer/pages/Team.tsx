import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Header } from "../../RootLayer/index";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../context/themeContext";

  //  Access Level Chip (Reusable)
const AccessLevelChip = ({ access, colors }: any) => {
  const config: any = {
    admin: {
      icon: <AdminPanelSettingsOutlinedIcon />,
      bg: colors.greenAccent[600],
    },
    manager: {
      icon: <SecurityOutlinedIcon />,
      bg: colors.greenAccent[700],
    },
    user: {
      icon: <LockOpenOutlinedIcon />,
      bg: colors.greenAccent[800],
    },
  };

  if (!config[access]) return null;

  return (
    <Box
      mt="6px"
      mx="auto"
      px="10px"
      py="5px"
      display="flex"
      alignItems="center"
      gap="6px"
      width="fit-content"
      borderRadius="6px"
      backgroundColor={config[access].bg}
    >
      {config[access].icon}
      <Typography variant="body2" color={colors.gray[100]}>
        {access}
      </Typography>
    </Box>
  );
};


function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params) => (
        <AccessLevelChip access={params.value} colors={colors} />
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the team members" />

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
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default Team;

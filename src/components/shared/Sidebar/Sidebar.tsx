import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import DialerSipOutlinedIcon from "@mui/icons-material/DialerSipOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import profileImg from "../../../assets/profile.jpeg"
import { tokens } from "../../../context/themeContext";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavItems from "../Sidebar/Navitems"
import EastIcon from '@mui/icons-material/East';
import {  useLocation} from "react-router-dom";
function sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [iscollapsed, setiscollapsed] = useState(false);
  const { pathname } = useLocation()

  return (
    <Box
      sx={{
        // Entire sidebar background
        "& .ps-sidebar-container": {
          backgroundColor: `${colors.primary[400]} !important`,
        },




        // Hover (remove white)
        "& .ps-menu-button:hover": {
          backgroundColor: `${colors.primary[400]} !important`,
          color: `${colors.gray[100]} !important`,
        },
        // for selected color change 
        "& .ps-menu-button.ps-active": {
          backgroundColor: `${colors.primary[600]} !important`,
          color: `${colors.greenAccent[500]} !important`,
        },


      }}


    >
      <Sidebar collapsed={iscollapsed}
        rootStyles={{ height: "100vh" }}
      >
        <Menu>
          <MenuItem
            onClick={() => setiscollapsed((prev) => !prev)}
            icon={iscollapsed ? <EastIcon /> : undefined}
            style={{
              color: colors.gray[100],
              margin: "10px 0 20px 0",
            }}
          >
            {!iscollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  ADMINS
                </Typography>

                <IconButton>
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* //User  */}
          {!iscollapsed && (
            <Box mb="25px" textAlign={"center"}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",

                  cursor: "pointer", borderRadius: "100%",
                }} src={profileImg} />
              </Box>
              <Box>
                <Typography variant="h2" color={colors.gray[100]} fontWeight={"bold"}>Hamza</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>Admin Panel</Typography>
              </Box>
            </Box>
          )}

          {/* //Menu items  */}

          <Box paddingLeft={iscollapsed ? undefined : "10%"}>
            <NavItems title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              currentPath={pathname}

            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >Data</Typography>
            <NavItems title="Manage Team"
              to="/team"
              icon={<PeopleOutlineOutlinedIcon />}
              currentPath={pathname}
              

            />
            <NavItems title="Contacts Information"
              to="/contacts"
              icon={<DialerSipOutlinedIcon />}
                            currentPath={pathname}


            />
            <NavItems title="Invoices Balances"
              to="/invoices"
              icon={<RecordVoiceOverOutlinedIcon />}
              currentPath={pathname}


            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >Pages</Typography>
            <NavItems title="Profile Form"
              to="/form"
              icon={<PeopleOutlineOutlinedIcon />}
              currentPath={pathname}


            />
            <NavItems title="Calender"
              to="/calender"
              icon={<CalendarMonthIcon />}
              currentPath={pathname}


            />
            <NavItems title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineIcon />}
              currentPath={pathname}

            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >Charts</Typography>
            <NavItems title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              currentPath={pathname}

            />
            <NavItems title="Line Chart"
              to="/line"
              icon={<TimelineIcon />}
              currentPath={pathname}


            />
            <NavItems title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineIcon />}
              currentPath={pathname}


            />
            <NavItems title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              currentPath={pathname}


            />








          </Box>


        </Menu>


      </Sidebar>
    </Box>
  )
}

export default sidebar;

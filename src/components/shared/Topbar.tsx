import {Box,IconButton,useTheme} from "@mui/material"
import { useContext } from "react"
import { ColorsModeContext,tokens } from "../../context/themeContext"
import {InputBase} from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';




function Topbar() {
  const theme = useTheme()

  const colors = tokens(theme.palette.mode)
  const colorMode  =  useContext(ColorsModeContext)


  return (
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* //Search */}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
          
          <InputBase sx={{ml: 2, flex:1 }} placeholder="search" />
          <IconButton type="button" sx={{p: 1}}>
            <SearchIcon />
          </IconButton>

        </Box>

        {/* //Icons  */}
        <Box display="flex ">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon />
            ): (
              <LightModeOutlinedIcon/>

            )}

          </IconButton>

            <IconButton>
              <NotificationsActiveOutlinedIcon />
            
          </IconButton>
            <IconButton>
              <AdminPanelSettingsOutlinedIcon/>
            
          </IconButton>
            <IconButton>
              <PersonOutlineOutlinedIcon />
            
          </IconButton>

        </Box>

      </Box>

  )
}

export default Topbar
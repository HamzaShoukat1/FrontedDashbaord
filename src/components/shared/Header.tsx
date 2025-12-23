import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../context/themeContext";

type headerProps = {
    title: string
subtitle: string


}

function Heaer({title,subtitle}:headerProps) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)



  return (
   <Box mb={"30px"}>
    <Typography variant="h2" fontWeight="bold" sx={{mb: "5px"}}color={colors.gray[100]}>
        {title}
    </Typography>
    <Typography
    variant="h5"  
    color={colors.greenAccent[400]}
    >{subtitle}</Typography>
   </Box>
  )
}

export default Heaer
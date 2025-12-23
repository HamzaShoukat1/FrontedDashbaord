import {  Typography, useTheme } from "@mui/material"
import { tokens } from "../../../context/themeContext"
import type { ElementType, ReactNode } from "react"
import { Link } from "react-router-dom"
import {  MenuItem  } from "react-pro-sidebar";


type navprops = {
    title: string,
    to: string,
    icon: ReactNode, 
    // agr component hoto ElementType in icon 
    currentPath:string
    


}
const Item = ({title,to,icon,currentPath}:navprops)=> {
    
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem

        active={currentPath === to}
        style={{color: colors.gray[100]}}
        icon={icon}
        component={<Link to={to}/>}
        >
        <Typography>{title}</Typography>
        </MenuItem>
    )
}

export default  Item
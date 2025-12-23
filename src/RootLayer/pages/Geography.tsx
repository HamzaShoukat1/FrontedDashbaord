import { Box, useTheme } from '@mui/material'
import Header from '../../components/shared/Header'
import ChoroPlath from '../../components/shared/ChoroPlath'
import { tokens } from '../../context/themeContext'

export default function Geography() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
 <Box>
          <Header title="Geography Chart" subtitle="Simple Geography Charts" />
          <Box height={"75vh"} border={`1px solid ${colors.gray[100]}`} borderRadius={"4px"}>
            <ChoroPlath />

          </Box>

    </Box>  )
}

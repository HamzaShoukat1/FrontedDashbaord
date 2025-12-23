import PieChart from '../../components/shared/PieChart'
import Header from '../../components/shared/Header'
import { Box } from '@mui/material'

export default function Pie() {
  return (
    <Box  m={"20px"}>
          <Header title="Pie Chart" subtitle="Simple Pie Charts" />

          <Box  height={"75vh"}>
            <PieChart />

          </Box>

      

    </Box>
  )
}

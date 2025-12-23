import BarCharts from "../../components/shared/BarCharts"
import { Box } from "@mui/material"
import Header from "../../components/shared/Header"
export default function Bar() {
  return (
    <Box m={"20px"}>
    <Header title="Bar Chart" subtitle="Simple Bar Charts" />

    <Box height={"75vh"}>
      <BarCharts />

    </Box>

      </Box>
  )
}

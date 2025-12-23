import LineChart from "../../components/shared/LineChart"
import Header from "../../components/shared/Header"
import { Box } from "@mui/material"

export default function Line() {
  return (
    <Box>
          <Header title="Line Chart" subtitle="Simple Line Charts" />
          <Box height={"75vh"}>
            <LineChart />

          </Box>

    </Box>
  )
}


import {ResponsiveBar} from "@nivo/bar"
import { useTheme } from "@mui/material"
import { tokens } from "../../context/themeContext"
import { mockBarData as data } from "../../data/mockData"
export default function BarCharts({isDashboard = false}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
       <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
              keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke:colors.gray[100]
                    }
                },
                legend: {
                    text:{
                        fill:colors.gray[100]
                    }
                },
                ticks: {
                    line: {
                        stroke:colors.gray[100],
                        strokeWidth:1

                    },
                    text: {
                        fill: colors.gray[100]
                    }
                }
            },
            legends: {
                text: {
                    fill:colors.gray[100]
                }
            }

        }}
        indexBy="country"
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        axisBottom={{ legend: isDashboard ? undefined : 'country (indexBy)', legendOffset: 32 }}
        axisLeft={{ legend: isDashboard ? undefined : 'food', legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
  )
}

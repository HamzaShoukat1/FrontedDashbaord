import { Box,useTheme,Typography } from "@mui/material"
import Header from "../../components/shared/Header"
import {Accordion} from "@mui/material"
import {AccordionSummary} from "@mui/material"
import {AccordionDetails} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../context/themeContext"

export default function FAQ() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[400]}>An Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequuntur, non, odio sed magnam doloribus ducimus odit reiciendis mollitia dolores atque vel distinctio totam iure facere quo placeat soluta delectus.
          </Typography>
        </AccordionDetails>


      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[400]}>An Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequuntur, non, odio sed magnam doloribus ducimus odit reiciendis mollitia dolores atque vel distinctio totam iure facere quo placeat soluta delectus.
          </Typography>
        </AccordionDetails>


      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[400]}>An Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequuntur, non, odio sed magnam doloribus ducimus odit reiciendis mollitia dolores atque vel distinctio totam iure facere quo placeat soluta delectus.
          </Typography>
        </AccordionDetails>


      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[400]}>An Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequuntur, non, odio sed magnam doloribus ducimus odit reiciendis mollitia dolores atque vel distinctio totam iure facere quo placeat soluta delectus.
          </Typography>
        </AccordionDetails>


      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[400]}>An Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequuntur, non, odio sed magnam doloribus ducimus odit reiciendis mollitia dolores atque vel distinctio totam iure facere quo placeat soluta delectus.
          </Typography>
        </AccordionDetails>


      </Accordion>
      
    </Box>
  )
}

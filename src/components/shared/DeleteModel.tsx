import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useTheme } from '@mui/material'
import { tokens } from '../../context/themeContext'

export default function DeleteModel({isDeleteDialogOpen,setIsDeleteDialogOpen,selectedEvent,handleDeleteEvent}:any) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box>
           <Dialog
        sx={{ "& .MuiDialog-paper": { backgroundColor: colors.primary[300], borderRadius: 2 } }}
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle color={colors.greenAccent?.[400] || "red"}>Delete Event</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{selectedEvent?.title}"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteEvent} variant="contained" >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

import {  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, useTheme, Typography } from "@mui/material";
import { tokens } from "../../context/themeContext";

export default function ClickModel({ isCreateDialogOpen, setIsCreateDialogOpen, title, setTitle, handleCreateEvent }: any) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    handleCreateEvent(); // actually call the function
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { backgroundColor: colors.primary[300], borderRadius: 2 } }}
      open={isCreateDialogOpen}
      onClose={() => setIsCreateDialogOpen(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle color={colors.greenAccent[400]}>Create New Event</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            label="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setIsCreateDialogOpen(false)}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={!title}>
            <Typography color="white">Submit</Typography>
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

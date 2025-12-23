import { memo, useCallback, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import type { EventApi, DateSelectArg, EventClickArg } from "@fullcalendar/core";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,

  useTheme,
} from "@mui/material";

import Header from "../../components/shared/Header";
import { tokens } from "../../context/themeContext";
import { formatDate } from "@fullcalendar/core";
import ClickModel from "../../components/shared/ClickModel";
import DeleteModel from "../../components/shared/DeleteModel";

export default function Calendar() {
  // const MemoVersionClickModel = memo(ClickModel)
  // const MemoizedDeleteModel = memo(DeleteModel);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  /** Sidebar events */
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  /** CREATE EVENT Modal state */
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateSelectArg | null>(null);
  const [title, setTitle] = useState("");

  /** DELETE EVENT Modal state */
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);

  /* ================================
     HANDLE DATE SELECTION (CREATE)
  ================================= */
  const handleDateSelect = useCallback((selectInfo: DateSelectArg)=> {
     
    setSelectedRange(selectInfo)
    setIsCreateDialogOpen(true)
  

},[])

   //  CREATE EVENT
 const handleCreateEvent = useCallback(() => {
    if (!title || !selectedRange) return;

    const calendarApi = selectedRange.view.calendar;
    calendarApi.unselect();

    calendarApi.addEvent({
      title,
      start: selectedRange.startStr,
      end: selectedRange.endStr,
      allDay: selectedRange.allDay,
    });

    setTitle("");
    setIsCreateDialogOpen(false);
  }, [title, selectedRange]);

    // HANDLE EVENT CLICK (OPEN DELETE MODAL)
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    setSelectedEvent(clickInfo.event);
    setIsDeleteDialogOpen(true);
  }, []);


  /* ================================
     CONFIRM DELETE EVENT
  ================================= */
  const handleDeleteEvent = useCallback(() => {
    if (selectedEvent) selectedEvent.remove();
    setSelectedEvent(null);
    setIsDeleteDialogOpen(false);
  }, [selectedEvent]);

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Production-ready FullCalendar" />

      <Box display="flex" justifyContent="space-between">
        {/* ===================== SIDEBAR ===================== */}
        <Box
          sx={{
            flex: "1 1 20%",
            backgroundColor: colors.primary[400],
            p: 2,
            borderRadius: 1,
          }}
        >
          <Typography variant="h5">Events</Typography>

          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  my: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start!, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* ===================== CALENDAR ===================== */}
        <Box flex="1 1 100%" ml={2}>
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listWeek",
            }}
            initialView="dayGridMonth"
            selectable
            editable
            dayMaxEventRows
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1", title: "All Day Event", date: "2025-01-14" },
              { id: "2", title: "Timed Event", date: "2025-01-28" },
            ]}
          />
        </Box>
      </Box>

      {/* ===================== CREATE EVENT MODAL ===================== */}
      <ClickModel title={title} setTitle={setTitle} isCreateDialogOpen={isCreateDialogOpen} setIsCreateDialogOpen={setIsCreateDialogOpen}  handleCreateEvent={handleCreateEvent}/> 
      {/* ===================== DELETE EVENT MODAL ===================== */}
   <DeleteModel isDeleteDialogOpen={isDeleteDialogOpen} setIsDeleteDialogOpen={setIsDeleteDialogOpen} selectedEvent={selectedEvent} handleDeleteEvent={handleDeleteEvent}/>
    </Box>
  );
}

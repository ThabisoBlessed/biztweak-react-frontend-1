import React, { useEffect, useState } from "react";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import "./CalendarFull.css";
import { ICalendarEvent } from "../../model/calendar-event.model";
import { EventFrequency } from "../../model/enum/event-frequency-enum";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllCompanies } from "../../services/business/company.service";
import { addEvent, getAllEvents } from "../../services/lms/event.service";

interface DemoAppState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}

export const CalendarFull = () => {
  const eventAPIs: EventApi[] = [];
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(eventAPIs);
  const initEvents: any[] = [];
  const [existingEvents, setExistingEvents] = useState(initEvents);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give calendar some time to init
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event._def.publicId);
    console.log(INITIAL_EVENTS[Number(clickInfo.event._def.publicId) - 1]);
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
      console.log(clickInfo);
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  const handleEventAdd = async (e: any) => {
    console.log("added", e);
    const newEvent = {} as ICalendarEvent;
    newEvent.title = e.event._def.title;
    newEvent.start_date = e.event._instance.range.start;
    newEvent.end_date = e.event._instance.range.end;
    newEvent.description = `${e.event._def.allDay}`;
    newEvent.type = "test";
    newEvent.frequency = EventFrequency.weekly;

    console.log(newEvent);

    const eventResult = await addEvent(newEvent);
    if (eventResult.data.package) {
      const event = eventResult.data.package.data;
      console.log(event);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* {renderSidebar} */}
          <div className="demo-app-main bg-white">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              select={handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={handleEventClick}
              eventsSet={handleEvents} // called after events are initialized/added/changed/removed
              eventAdd={handleEventAdd} // called after event added
              eventChange={function () {}}
              eventRemove={function () {}}
            />
          </div>
        </div>
      )}
    </>
  );
};

const renderEventContent = (eventContent: EventContentArg) => {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
};

const renderSidebarEvent = (event: EventApi) => {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start!, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
};

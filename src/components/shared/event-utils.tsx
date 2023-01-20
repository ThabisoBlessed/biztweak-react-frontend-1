import { EventInput } from "@fullcalendar/core";
import { ICalendarEvent } from "../../model/calendar-event.model";
import { getAllEvents } from "../../services/lms/event.service";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
let initialEvents: any[] = [];

console.log("event utils")

const getExistingEvents = async () => {
  const events = await getAllEvents();
  if (events.data.package) {
    const eventsResult: ICalendarEvent[] = events.data.package.data;
    for (let index = 0; index < eventsResult.length; index++) {
      const event = eventsResult[index];
      const eventToShow = {
        id: String(event.id),
        title: event.title,
        start: new Date(event.start_date).toISOString().replace(/T.*$/, ''),
        end: new Date(event.end_date).toISOString().replace(/T.*$/, '')
      };
      initialEvents.push(eventToShow);
    }
  }
};

const events = getExistingEvents();

export const INITIAL_EVENTS: EventInput[] = initialEvents;

console.log(INITIAL_EVENTS)

export function createEventId() {
  return String(eventGuid++);
}

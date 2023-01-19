import { EventFrequency } from "./enum/event-frequency-enum";

export interface ICalendarEvent {
  title: string;
  description: string;
  type: string;
  start_date: Date;
  end_date: Date;
  frequency: EventFrequency;
}

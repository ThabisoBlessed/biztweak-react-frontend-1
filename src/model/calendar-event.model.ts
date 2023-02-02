import { EventFrequency } from "./enum/event-frequency-enum";

export interface ICalendarEvent {
  id: number;
  title: string;
  description: string;
  type: string;
  startDate: Date;
  endDate: Date;
  frequency: EventFrequency;
  date: Date;
}

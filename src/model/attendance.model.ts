import { IUser } from "./user.model";

export interface IAttendance {
  category: string;
  type: string;
  date: string;
  attended: boolean;
  user?: IUser;
  id?: number;
}

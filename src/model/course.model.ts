import { IUser } from "./user.model";

export interface ICourse {
  id?: string;
  title: string;
  description: string;
  category: string;
  intro_video: any;
  start_datetime: string;
  expiry_datetime: string;
  business_phase: string;
  score: number;
  user: IUser;
  logo: any;
}

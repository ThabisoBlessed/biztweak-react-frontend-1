import { IUser } from "./user.model";

export interface ICourse {
  id: number;
  title: string;
  description: string;
  category: string;
  introVideo: any;
  startDatetime: string;
  expiryDatetime: string;
  businessPhase: string;
  score: number;
  user: IUser;
  logo: any;
}

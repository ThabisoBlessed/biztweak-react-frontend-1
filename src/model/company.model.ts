import { IUser } from "./user.model";

export interface ICompany {
  id: number;
  name: string;
  logo: string;
  location: string;
  phase: string;
  registered: boolean;
  registrationNumber: string;
  registrationDate: string;
  productsOrServices: string;
  industry: string;
  employees: number;
  monthlyTurnover: number;
  annualTurnover: number;
  rating: any;
  date: string;
  user: IUser;
  report: any;
  score: number;
  assessment?: any;
}

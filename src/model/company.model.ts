import { IUser } from "./user.model";

export interface ICompany {
  id: number;
  name: string;
  logo: string;
  location: string;
  phase: string;
  registered: boolean;
  registration_number: string;
  registration_date: string;
  products_or_services: string;
  industry: string;
  employees: number;
  monthly_turnover: number;
  annual_turnover: number;
  rating: any;
  date: string;
  user: IUser;
  report: any;
}

import { ICompany } from "./company.model";
import { UserRole } from "./enum/user-roles.enum";

export interface IUser {
    id: number;
    fullNames: string;
    email: string;
    phone: string;
    education: string,
    workExperience: string,
    workExperience2: string,
    location: string,
    role: string;
    registered: string;
    photo: File;
    marketNewsletter: any;
    productUpdatesAndCommunityAnnouncements: any;
    bio: string;
    companies?: ICompany[]
    assessments: any;
}
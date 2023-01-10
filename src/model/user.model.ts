import { UserRole } from "./enum/user-roles.enum";

export interface IUser {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    education: string,
    work_experience: string,
    work_experience2: string,
    location: string,
    role: string;
    registered: string;
    photo: string;
    market_newsletter: any;
    product_updates_and_community_announcements: any;
}
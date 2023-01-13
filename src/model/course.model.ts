export interface ICourse {
  id?: string;
  title: string;
  description: string;
  category: string;
  intro_video: File;
  start_datetime: string;
  expiry_datetime: string;
  business_phase: string;
  score: number;
}

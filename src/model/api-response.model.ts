/**
 * Global API response.
 * Takes in a type(model) for the return data.
 */
export interface IApiResponse<Ttype> {
  data: Ttype;
  currentPage: number;
  statusCode: number;
  success: boolean;
  message: string;
  totalPages: number;
  totalRecords: number;
  errors: string[];
}

import axios from "axios";
import * as constants from "../constants";
import {
  ILoginErrorResponse,
  ILoginRequest,
  ILoginResponse,
} from "../model/login.model";

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns
 */
export const userLogin = async (
  login: ILoginRequest
): Promise<ILoginResponse | ILoginErrorResponse> => {
  try {
    return await axios.post(constants.baseUrl + `/email-auth`, { email: login.email, password: login.password });
  } catch (error: any) {
    console.log(JSON.stringify(error));
    return error;
  }
};

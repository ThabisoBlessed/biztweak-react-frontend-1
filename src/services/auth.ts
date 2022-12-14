import axios from "axios";
import * as constants from "../constants";
import {
  IAuthErrorResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from "../model/auth.model";

/**
 * Login by email
 * @param {string} email
 * @param {string} password
 * @returns {Promise<IRegisterRequest | IAuthErrorResponse>} response
 */
export const userLogin = async (
  login: ILoginRequest
): Promise<ILoginResponse | IAuthErrorResponse> => {
  try {
    return await axios.post(constants.baseUrl + `/email-auth`, {
      email: login.email,
      password: login.password,
    });
  } catch (error: any) {
    return error;
  }
};

/**
 * Register by email
 * @param {string} fullname
 * @param {string} email
 * @param {string} password
 * @returns {Promise<IRegisterRequest | IAuthErrorResponse>} response
 */
export const userRegister = async (
  register: IRegisterRequest
): Promise<IRegisterRequest | IAuthErrorResponse> => {
  try {
    return await axios.post(constants.baseUrl + `/email-register`, {
      fullname: register.fullname,
      email: register.email,
      password: register.password,
    });
  } catch (error: any) {
    return error;
  }
};

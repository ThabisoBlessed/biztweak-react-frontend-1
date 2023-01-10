import axios from "axios";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";

/**
 * Creates a new user
 *
 * @param {any} user
 * @returns {any} result
 */
export const addUser = async (company: any): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.post(
      constants.baseUrl + `/companies`,
      {
        name: company.name,
        logo: company.logo,
        registration_date: company.registration_date,
        registration_number: company.registration_number,
        registered: company.registered,
        location: company.location,
        employees: company.employees,
        annual_turnover: company.annual_turnover,
        monthly_turnover: company.monthly_turnover,
        products_or_services: company.products_or_services,
        phase: company.phase,
        industry: company.industry,
      },
      config
    );
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a list of users
 *
 * @returns {any} users
 */
export const listUsers = async (): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.get(
      constants.baseUrl + `/companies/my-companies`,
      config
    );
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets the logged in user
 *
 * @returns {any} user
 */
export const getCurrentUser = async (userId: number): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.get(constants.baseUrl + `/users/${userId}`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets the logged in user
 * @param {string} oldPassword
 * @param {string} newPassword
 * @returns {any} user
 */
export const updatePassword = async (
  oldPassword: string,
  newPassword: string,
  userId: number
): Promise<any> => {
  try {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(
            /['"\\]+/g,
            ""
          ),
      },
    };

    return await axios.put(
      constants.baseUrl + `/users/${userId}/password`,
      {
        password: newPassword,
        old_password: oldPassword,
      },
      config
    );
  } catch (error: any) {
    return error;
  }
};

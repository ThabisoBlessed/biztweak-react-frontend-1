import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";
import { IAttendance } from "../../model/attendance.model";

/**
 * Creates a new attendance
 *
 * @param {any} attendance
 * @returns {any} result
 */
export const addAttendance = async (attendance: IAttendance): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/attendances`, attendance, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets an attendance by ID
 *
 * @returns {any} attendance
 */
 export const getAttendance = async (id: number): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/attendances/${id}`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets all attendances
 *
 * @returns {any} attendances
 */
 export const getAllAttendances = async (): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/attendances`, config);
  } catch (error: any) {
    return error;
  }
};


/**
 * Deletes an attendance by ID
 *
 * @returns {any} attendance
 */
 export const deleteAttendance = async (id: number): Promise<any> => {
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

    return await axios.delete(constants.baseUrl + `/attendances/${id}`, config);
  } catch (error: any) {
    return error;
  }
};
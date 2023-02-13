import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "./../../constants";

/**
 * Gets a list of mentors
 * @returns {Promise<any>} response
 */
 export const getAllMentors = async (): Promise<any> => {
    try {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
        }
      }
  
      return await axios.get(constants.baseUrl + `/users?role=MENTORS`, config);
    } catch (error: any) {
      return error;
    }
};
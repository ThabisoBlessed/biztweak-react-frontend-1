import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "./../../constants";

/**
 * Create new Entrepreneur
 * @returns {Promise<any>} response
 */
 export const createEntrepreneur = async (): Promise<any> => {
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
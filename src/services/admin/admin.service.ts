import axios from "axios";
import * as constants from "./../../constants";
import { LOCALSTORAGE_KEYS } from "../../config";

/**
 * Gets a list of users
 * @returns {Promise<Assessment[]>} response
 */
 export const getAllUsers = async (): Promise<any> => {
    try {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
        }
      }
  
      return await axios.get(constants.baseUrl + `/users
      `, config);
    } catch (error: any) {
      return error;
    }
};
import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";

/**
 * Creates a new company
 *
 * @param {any} company
 * @returns {any} result
 */
export const addCompany = async (company: any): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/companies`, {}, config);
  } catch (error: any) {
    return error;
  }
};

import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../config";
import * as constants from "../constants";

/**
 * Gets a list of assessement questions
 * @returns {Promise<Assessment[]>} response
 */
export const getAssessmentQuestions = async (): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.get(constants.baseUrl + `/assessments`, config);
  } catch (error: any) {
    return error;
  }
};
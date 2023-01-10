import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";

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

/**
 * Updates assessment questions
 * 
 * @param {string} answers 
 * @returns {any} result
 */
export const updateAssessmentQuestions = async (answers: string, companyId: string): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.put(constants.baseUrl + `/companies/${companyId}`, {answers}, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Updates an assessment question
 * 
 * @param {string} answer 
 * @param {number} id 
 * @returns {any} result
 */
 export const updateAssessmentQuestion = async (id: number, answer: any): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.post(constants.baseUrl + `/assessments/${id}`, {answer}, config);
  } catch (error: any) {
    return error;
  }
};
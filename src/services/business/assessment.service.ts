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
 * Updates assessment questions (not working yet)
 * 
 * @param {string} answers 
 * @returns {any} result
 */
export const updateAssessmentQuestions = async (answers: string): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.post(constants.baseUrl + `/assessments`, {answers}, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Updates an assessment question
 * 
 * @param {string} answer 
 * @param {string} id 
 * @returns {any} result
 */
 export const updateAssessmentQuestion = async (id: string, answer: any): Promise<any> => {
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
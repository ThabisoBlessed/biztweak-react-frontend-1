import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";

/**
 * Gets a list of assessement questions
 * @returns {Promise<Assessment[]>} response
 */
export const getAssessmentQuestions = async (phaseId: number): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.get(constants.baseUrl + `/assessments/questions/${phaseId}`, config);
  } catch (error: any) {
    return error;
  }
};


/**
 * Gets a list of business phases
 * @returns {Promise<any>} response
 */
 export const getBusinessPhases = async (): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.get(constants.baseUrl + `/phases`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a list of business industries
 * @returns {Promise<any>} response
 */
 export const getBusinessIndustry = async (): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.get(constants.baseUrl + `/industries`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Add assessment questions
 * 
 * @param {string} answers 
 * @returns {any} result
 */
export const addAssessmentQuestions = async (answers: string, companyId: number, phaseId: number): Promise<any> => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + String(localStorage.getItem(LOCALSTORAGE_KEYS.accessToken)).replace(/['"\\]+/g, '')
      }
    }

    return await axios.post(constants.baseUrl + `/assessments`, { companyId: companyId, questionsAndAnswers: answers }, config);
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
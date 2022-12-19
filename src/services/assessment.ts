import axios from "axios";
import * as constants from "../constants";
import { Assessment } from "../model/assessment.model";

/**
 * Gets a list of assessement questions
 * @returns {Promise<Assessment>} response
 */
export const getAssessments = async (): Promise<Assessment> => {
  try {
    return await axios.get(constants.baseUrl + `/assessments`, {});
  } catch (error: any) {
    return error;
  }
};
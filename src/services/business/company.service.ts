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

    return await axios.post(constants.baseUrl + `/companies`, {
      name: company.name,
      logo: company.logo,
      registration_date: company.registration_date,
      registration_number: company.registration_number,
      registered: company.registered,
      location: company.location,
      employees: company.employees,
      annual_turnover: company.annual_turnover,
      monthly_turnover: company.monthly_turnover,
      products_or_services: company.products_or_services,
      phase: company.phase,
      industry: company.industry,
    }, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a list of companies for the current user
 *
 * @returns {any} result
 */
 export const listCompaniesForLoggedInUser = async (): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/companies/my-companies`, config);
  } catch (error: any) {
    return error;
  }
};
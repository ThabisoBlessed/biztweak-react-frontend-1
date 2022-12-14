import axios from "axios";
import * as constants from "../constants";


/**
 * Uploads file to bucket
 * @param formData 
 * @returns 
 */
export const login = async (email: string, password: string, token: string) => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    return await axios.post(constants.baseUrl + `/storage-uploadFile`, email, config);
  } catch (error) {
    return error;
  }
};
import axios from "axios";
import * as constants from "../constants";


/**
 * Uploads file to bucket
 * @param formData 
 * @returns 
 */
export const uploadFile = async (formData: FormData, token: string) => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    return await axios.post(constants.baseUrl + `/storage-uploadFile`, formData, config);
  } catch (error) {
    return error;
  }
};
import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";
import { ICalendarEvent } from "../../model/calendar-event.model";

/**
 * Creates a new event
 *
 * @param {any} event
 * @returns {any} result
 */
export const addEvent = async (event: ICalendarEvent | any): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/events`, event, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets an event by ID
 *
 * @returns {any} event
 */
 export const getEvent = async (id: number): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/events/${id}`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets all events
 *
 * @returns {any} events
 */
 export const getAllEvents = async (): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/events`, config);
  } catch (error: any) {
    return error;
  }
};


/**
 * Deletes an event by ID
 *
 * @returns {any} event
 */
 export const deleteEvent = async (id: number): Promise<any> => {
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

    return await axios.delete(constants.baseUrl + `/events/${id}`, config);
  } catch (error: any) {
    return error;
  }
};
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
 * Gets a event by ID
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
 * Creates a new event video
 *
 * @param {any} video
 * @returns {any} result
 */
 export const addEventVideo = async (video: any, eventId: number): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/events/${eventId}/video`, video, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Creates a new event audio
 *
 * @param {any} audio
 * @returns {any} result
 */
 export const addEventAudio = async (video: any, eventId: number): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/events/${eventId}/audio`, video, config);
  } catch (error: any) {
    return error;
  }
};
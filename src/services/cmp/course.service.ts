import axios from "axios";
import { LOCALSTORAGE_KEYS } from "../../config";
import * as constants from "../../constants";
import { ICourse } from "../../model/course.model";

/**
 * Creates a new course
 *
 * @param {any} course
 * @returns {any} result
 */
export const addCourse = async (course: ICourse | any): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/courses`, course, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a list of courses for the current user
 *
 * @returns {any} result
 */
 export const listCoursesForLoggedInUser = async (): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/courses/my-courses`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets a course by ID
 *
 * @returns {any} course
 */
 export const getCourse = async (id: number): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/courses/${id}`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Gets all courses
 *
 * @returns {any} courses
 */
 export const getAllcourses = async (): Promise<any> => {
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

    return await axios.get(constants.baseUrl + `/courses`, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Creates a new course video
 *
 * @param {any} video
 * @returns {any} result
 */
 export const addCourseVideo = async (video: any, courseId: number): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/courses/${courseId}/video`, video, config);
  } catch (error: any) {
    return error;
  }
};

/**
 * Creates a new course audio
 *
 * @param {any} audio
 * @returns {any} result
 */
 export const addCourseAudio = async (video: any, courseId: number): Promise<any> => {
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

    return await axios.post(constants.baseUrl + `/courses/${courseId}/audio`, video, config);
  } catch (error: any) {
    return error;
  }
};
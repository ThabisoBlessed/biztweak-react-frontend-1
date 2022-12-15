// Map for localStorage keys
export const LOCALSTORAGE_KEYS = {
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expireTime: "spotify_token_expire_time",
  timestamp: "spotify_token_timestamp",
  user: "user",
};

/**
 * Saves values to local storage
 * @param {key} key
 * @param {any} value
 */
export const setLocalStorageValue = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Gets values from local storage
 * @param {key} key
 */
 export const getLocalStorageValue = (key: string) => {
  localStorage.getItem(key);
};

// Map to retrieve localStorage values
export const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
  user: window.localStorage.getItem(LOCALSTORAGE_KEYS.user),
};

/**
 * Checks access token
 * 
 * @returns {boolean} loggedIn
 */
export const isLoggedIn = () => {
  if (LOCALSTORAGE_VALUES.accessToken) {
    return true;
  }
  return false;
};

/* eslint-disable valid-jsdoc */
import Axios, { AxiosRequestConfig } from "axios";

const Request = {
  /**
   * Prepares request options
   *
   * @param {AxiosRequestConfig} axiosOpts
   * @param {string} authToken
   * @return {Object}
   */

  /**
   * Makes a GET request
   *
   * @param {string} endpoint
   * @param {AxiosRequestConfig | null} options
   */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(endpoint: string, options?: AxiosRequestConfig | null) {
    return (await Axios.get(endpoint, options || {})).data;
  },

  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */

  async post(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData;
    let requestOptions;

    if (options) {
      const { data, ...rest } = options;

      postData = data;
      requestOptions = rest;
    }

    return (await Axios.post(endpoint, postData, requestOptions)).data;
  },
};

export default Request;

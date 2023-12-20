import { API_HEADERS, HTTP_METHOD, MOCK } from 'constants/index';

/**
 * @class HttpsService
 * Manages the common data
 */
export default class HttpsService<T> {
  private fullPath: string;
  constructor(path: string) {
    this.fullPath = MOCK.API + path;
  }

  /**
   * @description Call api post data
   * @body {object} data
   * @returns data after request
   */
  post = async (data: T): Promise<T> => {
    try {
      const response = await fetch(this.fullPath, {
        method: HTTP_METHOD.POST,
        mode: 'cors',
        cache: 'no-cache',
        headers: API_HEADERS,
        body: JSON.stringify(data)
      });
      return response.json();
    } catch (error) {
      return error;
    }
  };

  /**
   * @description get data detail from server
   * @param {String} path request path
   * @query {filter, page, sortBy}
   * @returns data after request
   */
  get = async (query?: string): Promise<T[]> => {
    try {
      const url = `${this.fullPath}?${query}`;
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return error;
    }
  };

  /**
   * @description delete data at server
   * @param {String} path
   * @returns data after request
   */
  delete = async (id: string): Promise<T> => {
    try {
      const response = await fetch(this.fullPath + `/${id}`, {
        method: HTTP_METHOD.DELETE
      });
      return response.json();
    } catch (error) {
      return error;
    }
  };

  /**
   * Call api put data
   * @param {String} path
   * @body {object} data
   */
  put = async (data: T, id: string): Promise<T> => {
    try {
      const response = await fetch(`${this.fullPath}/${id}`, {
        method: HTTP_METHOD.PUT,
        headers: API_HEADERS,
        body: JSON.stringify(data)
      });
      return response.json();
    } catch (error) {
      return error;
    }
  };
}

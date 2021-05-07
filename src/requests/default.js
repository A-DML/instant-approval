import axios from 'axios'
import { API_TOKEN } from '@/constants'
import Vue from 'vue'

export const API_HOST = process.env.VUE_APP_BACKEND_HOST

/**
 * Default axios request function already configured.
 *
 * @param method
 * @param url
 * @param data
 * @param header
 * @returns {Promise<any>}
 */
export function request(method, url, data = {}, header = {}) {
    console.log(999);
    
  return (
    axios
      .request({
        url,
        method,
        data,
        // This is cause GET cannot send data so we have to be sure it is a param
        params: method === 'GET' ? data : {},
        baseURL: `${API_HOST}/workplace/api/`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem(API_TOKEN)}`,
          ...header
        }
      })
      // Reducing the stress of getting data from response by doing it
      // here at the upper house.
      .then(({ data }) => data)
      .catch(error => {
        // Handling Validation Error
        if (error.response && error.response.status === 417) {
          const errors = error.response.data.error
          Vue.notify({
            type: 'error',
            title: 'Form Validation Error',
            duration: 10000,
            text: Object.keys(errors)
              .map(key => ` * <strong>${key}</strong>: ${errors[key]}`)
              .join('<br />')
          })
        }
        // So not to break the promise, we are throwing the error to
        // still be handled by anything expecting it
        throw error
      })
  )
}

/**
 * Make a get request to the API server.
 *
 * @param url
 * @param query
 * @returns {Promise<any>}
 */
export function get$(url, query = {}) {
  return request('GET', url, query)
}

/**
 * Make a post request to the API server.
 *
 * @param url
 * @param data
 * @param header
 * @returns {Promise<any>}
 */
export function post$(url, data = {}, header = {}) {
  return request('POST', url, data, header)
}

/**
 * Make a patch request to the API server.
 *
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function patch$(url, data = {}) {
  return request('PATCH', url, data)
}

/**
 * Make a delete request to the API server.
 *
 * @param url
 * @returns {Promise<any>}
 */
export function delete$(url) {
  return request('DELETE', url)
}

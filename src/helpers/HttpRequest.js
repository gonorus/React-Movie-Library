import axios from 'axios';
import Console from './Console';

/**
 * Get Http Request function with Promise using axios
 * @param {String} address
 * @param  {*} params
 * @returns
 */
export function GetRequest (address, ...params) {
  return new Promise(
    (resolve, reject) => {
      Console.Debug(`[Get Request] => ${address}`, ...params);
      axios
        .get(address, ...params)
        .then((response) => {
          Console.Debug(`[Get Response] => ${address}`, response);
          resolve(response);
        })
        .catch((error) => {
          Console.Error(`[Get Error] => ${address}`, error);
          reject(error);
        });
    }
  );
}

/**
 * Post Http Request function with Promise using axios
 * @param {String} address
 * @param  {*} params
 * @returns
 */
export function PostRequest (address, ...params) {
  return new Promise(
    (resolve, reject) => {
      Console.Debug(`[Post Request] => ${address}`, ...params);
      axios
        .post(address, ...params)
        .then((response) => {
          Console.Debug(`[Post Response] => ${address}`, response);
          resolve(response);
        })
        .catch((error) => {
          Console.Error(`[Post Error] => ${address}`, error);
          reject(error);
        });
    }
  );
}

/**
 * Put Http Request function with Promise using axios
 * @param {String} address
 * @param  {*} params
 * @returns
 */
export function PutRequest (address, ...params) {
  return new Promise((resolve, reject) => {
    Console.Debug(`[Put Request] => ${address}`, ...params);
    axios
      .put(address, ...params)
      .then((response) => {
        Console.Debug(`[Put Response] => ${address}`, response);
        resolve(response);
      })
      .catch((error) => {
        Console.Error(`[Put Error] => ${address}`, error);
        reject(error);
      });
  });
}

/**
 * Delete Http Request function with Promise using axios
 * @param {String} address
 * @param  {*} params
 * @returns
 */
export function DeleteRequest (address, ...params) {
  return new Promise((resolve, reject) => {
    Console.Debug(`[Delete Request] => ${address}`, ...params);
    axios
      .delete(address, ...params)
      .then((response) => {
        Console.Debug(`[Delete Response] => ${address}`, response);
        resolve(response);
      })
      .catch((error) => {
        Console.Error(`[Delete Error] => ${address}`, error);
        reject(error);
      });
  });
}

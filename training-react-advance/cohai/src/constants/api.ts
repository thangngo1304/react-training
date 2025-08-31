export const BASE_API = '';
export const STATISTICAL_API = process.env.VITE_API_ENDPOINT || BASE_API;
export const API_KEY = process.env.AIRTABLE_API_KEY || BASE_API;

export const API_PATH = {
  USER: '/user',
  AUTHOR: '/author',
  PROJECT: '/project',
};

export const USER_LOGIN = 'userLogin';

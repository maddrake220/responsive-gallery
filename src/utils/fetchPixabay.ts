import axios from "axios";

export const URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}`;

export const SEARCH_TERM = `&q=`;

export const IMAGE_TYPE = `&image_type=`;

export const ORDER = `&order=`;

export const ORIENTATION = `&orientation=`;

export const PER_PAGE = `&per_page=`;

export const PAGE = `&page=`;

export const LANG = `&lang=`;
export const LANG2 = `&lang=`;
export const LANG3 = `&lang=`;
export const LANG4 = `&lang=`;

export async function fetchPixabay(parameters: string) {
  try {
    const response = await axios.get(parameters);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
}

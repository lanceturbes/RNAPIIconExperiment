import {API_URL} from '../../../config/env';

/**
 * Fetches a list of all available icons from the API
 *
 * @returns A list of all available icons
 */
const getIconList = async () => {
  const response = await fetch(`${API_URL}/icons`);
  const data = await response.json();
  return data;
};

export default getIconList;

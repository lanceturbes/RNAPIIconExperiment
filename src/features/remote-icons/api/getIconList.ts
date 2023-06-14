import axios from 'axios';

import {API_URL} from '../../../config/env';
import iconListSchema from '../utils/iconListSchema';

/**
 * Fetches a list of all available icons from the API
 *
 * @returns A list of all available icons
 */
const getIconList = async () => {
  const response = await axios.get(`${API_URL}/icons`, {responseType: 'json'});
  return iconListSchema.parse(response.data);
};

export default getIconList;

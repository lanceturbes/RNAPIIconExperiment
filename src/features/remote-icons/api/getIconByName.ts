import axios from 'axios';
import {z} from 'zod';

import {API_URL} from '../../../config/env';
import {IconName} from '../types';

/**
 * Fetches an icon by name from the API
 *
 * @param name The name of the icon
 * @returns The SVG icon as a string
 */
const getIconByName = async (name: IconName) => {
  const response = await axios.get(`${API_URL}/icons/${name}`, {
    responseType: 'text',
  });
  return z.string().parse(response.data);
};

export default getIconByName;

import {API_URL} from '../../../config/env';
import {IconName} from '../types';

/**
 * Fetches an icon by name from the API
 *
 * @param name The name of the icon
 * @returns The SVG icon as a string
 */
const getIconByName = async (name: IconName) => {
  const response = await fetch(`${API_URL}/icons/${name}.svg`);
  const data = await response.text();
  return data;
};

export default getIconByName;

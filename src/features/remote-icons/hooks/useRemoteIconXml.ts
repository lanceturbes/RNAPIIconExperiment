import {IconName} from '../types';
import useRemoteIcon from './useRemoteIcon';

const strokeRegex = /stroke="#[0-9a-f]{6}"/g;
const fillRegex = /fill="#[0-9a-f]{6}"/g;

const fallbackIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z" data-name="menu-arrow-circle"/></g></svg>';

const useRemoteIconXml = (
  iconName: IconName,
  style: {fill: string; stroke: string},
) => {
  const {data, isLoading, isError} = useRemoteIcon(iconName);

  const xml =
    isLoading || isError
      ? fallbackIcon
      : data
          .replace(fillRegex, `fill="${style.fill}"`)
          .replace(strokeRegex, `stroke="${style.stroke}"`);

  return {xml, isLoading, isError};
};

export default useRemoteIconXml;

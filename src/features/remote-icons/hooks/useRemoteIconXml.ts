import {IconName} from '../types';
import useRemoteIcon from './useRemoteIcon';

const strokeRegex = /stroke="#[0-9a-f]{6}"/g;
const fillRegex = /fill="#[0-9a-f]{6}"/g;

const useRemoteIconXml = (
  iconName: IconName,
  style: {fill: string; stroke: string},
) => {
  const {data, isLoading, isError} = useRemoteIcon(iconName);

  const xml =
    data && !isLoading
      ? data
          .replace(fillRegex, `fill="${style.fill}"`)
          .replace(strokeRegex, `stroke="${style.stroke}"`)
      : '<svg></svg>';

  return {xml, isLoading, isError};
};

export default useRemoteIconXml;

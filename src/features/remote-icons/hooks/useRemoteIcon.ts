import {useQuery} from '@tanstack/react-query';
import {getIconByName} from '../api';
import {IconName} from '../types';

function useRemoteIcon(iconName: IconName) {
  return useQuery(['remote-icon', iconName], () => getIconByName(iconName));
}

export default useRemoteIcon;

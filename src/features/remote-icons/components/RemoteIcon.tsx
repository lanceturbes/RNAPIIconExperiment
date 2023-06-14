import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Text} from 'react-native';

import {RemoteIconProps} from '../types';
import {useRemoteIconXml} from '../hooks';

const RemoteIcon = ({fill, stroke, size, iconName}: RemoteIconProps) => {
  const {xml, isError, isLoading} = useRemoteIconXml(iconName, {fill, stroke});

  if (isLoading || isError) {
    return <Text style={{color: 'white'}}>Fallback for {iconName}</Text>;
  }

  return <SvgXml xml={xml} width={size} height={size} />;
};

export default RemoteIcon;

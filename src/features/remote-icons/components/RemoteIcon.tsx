import React from 'react';
import {Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {RemoteIconProps} from '../types';
import {useRemoteIconXml} from '../hooks';

const RemoteIcon = ({fill, stroke, size, iconName}: RemoteIconProps) => {
  const {xml, isError} = useRemoteIconXml(iconName, {fill, stroke});

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return <SvgXml xml={xml} width={size} height={size} />;
};

export default RemoteIcon;

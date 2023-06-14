import React from 'react';
import {Text} from 'react-native';

import {RemoteIconProps} from '../types';
import {useRemoteIconXml} from '../hooks';

const RemoteIcon = ({fill, stroke, size, iconName}: RemoteIconProps) => {
  const {xml, isError} = useRemoteIconXml(iconName, {fill, stroke});

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <div
      style={{width: size, height: size, fill, stroke}}
      dangerouslySetInnerHTML={{__html: xml.substring(xml.indexOf('<svg'))}}
    />
  );
};

export default RemoteIcon;

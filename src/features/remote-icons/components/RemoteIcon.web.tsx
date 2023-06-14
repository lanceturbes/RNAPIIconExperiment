import React from 'react';
import {Text} from 'react-native';
import {sanitize} from 'dompurify';

import {RemoteIconProps} from '../types';
import {useRemoteIconXml} from '../hooks';

const RemoteIcon = ({fill, stroke, size, iconName}: RemoteIconProps) => {
  const {xml, isError, isLoading} = useRemoteIconXml(iconName, {fill, stroke});

  if (isLoading || isError || !xml) {
    return <Text style={{color: 'white'}}>Fallback for {iconName}</Text>;
  }

  const svgTxt = xml.substring(xml.indexOf('<svg'));
  const sanitizedSvgTxt = sanitize(svgTxt, {USE_PROFILES: {svg: true}});

  return (
    <div style={{width: size, height: size}}>
      <div
        style={{fill, stroke}}
        dangerouslySetInnerHTML={{__html: sanitizedSvgTxt}}
      />
    </div>
  );
};

export default RemoteIcon;

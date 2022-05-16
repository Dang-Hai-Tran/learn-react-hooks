import React from 'react';
import './MagicBox.scss';
import useMagicColor from '../../hooks/useMagicColor';

const MagicBox = () => {
  const { color } = useMagicColor();
  return <div className="container-magicBox" style={{ backgroundColor: color }}></div>;
};

export default MagicBox;

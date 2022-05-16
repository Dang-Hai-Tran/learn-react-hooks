import { useEffect, useRef, useState } from 'react';

const randomColor = () => {
  const listColor = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
  ];
  const randomIdx = Math.floor(Math.random() * listColor.length);
  return listColor[randomIdx];
};
const useMagicColor = () => {
  const [color, setColor] = useState();
  // colorRef save the value of the current color and we cant compare it with next color.
  const colorRef = useRef();
  useEffect(() => {
    const colorInterval = setInterval(() => {
      let newColor = colorRef.current;
      while (newColor === colorRef.current) {
        newColor = randomColor();
      }
      setColor(newColor);
      colorRef.current = newColor;
    }, 2000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return { color };
};

export default useMagicColor;

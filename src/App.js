import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';

function App() {
  const [colors, setColors] = useState(() => {
    const data = JSON.parse(localStorage.getItem('colorList'));
    return data || ['deeppink', 'green'];
  });
  return (
    <div className="app">
      <div className="container">
        {colors.map((color, index) => (
          <ColorBox key={`colorBox--${index}`} color={color} index={index} colors={colors} setColors={setColors} />
        ))}
      </div>
    </div>
  );
}

export default App;

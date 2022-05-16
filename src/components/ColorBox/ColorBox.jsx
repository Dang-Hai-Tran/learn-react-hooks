import './ColorBox.scss';

const randomColor = () => {
  const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomNum = Math.floor(Math.random() * colorList.length);
  return colorList[randomNum];
};

const ColorBox = (props) => {
  const { color, index, colors, setColors } = props;
  const handleClick = () => {
    const newColors = [...colors];
    newColors[index] = randomColor();
    setColors(newColors);
  };
  localStorage.setItem('colorList', JSON.stringify(colors));
  return <div className={`colorBox ${color}`} onClick={handleClick}></div>;
};

export default ColorBox;

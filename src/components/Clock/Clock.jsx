import useClock from '../../hooks/useClock';
import './Clock.scss';

const Clock = () => {
  const { timeString } = useClock();

  return (
    <div className="container-clock">
      <h1>{timeString}</h1>
    </div>
  );
};

export default Clock;

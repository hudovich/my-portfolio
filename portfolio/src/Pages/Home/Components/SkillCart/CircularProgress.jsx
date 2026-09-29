import s from './CircularProgress.module.css';

const CircularProgress = ({ n = 0 }) => {

  return (
    <div className={s.circular} style={{ '--target-percent': `${n}%` }}>
      {n} %
    </div>
  );
};

export default CircularProgress;
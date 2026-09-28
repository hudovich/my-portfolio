const CircularProgress = ({ n = 0 }) => {
  return (
    <div 
      style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: `conic-gradient(from 90deg, #0082C2 0% ${n}%,transparent ${n}% 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        fontSize: '30px',
        color: '#fff'
      }}
    >{n}%</div>
  );
};

export default CircularProgress;
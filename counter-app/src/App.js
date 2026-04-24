import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonColor = count > 10 ? 'red' : 'green';

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Счётчик: {count}</h1>
      <button
        onClick={incrementCount}
        style={{
          backgroundColor: buttonColor,
          color: 'white',
          fontSize: '20px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        Увеличить
      </button>
      <p style={{ marginTop: '20px', color: '#666' }}>
        {count > 10 && 'Кнопка стала красной! 🚨'}
      </p>
    </div>
  );
};

function App() {
  return <Counter />;
}

export default App;
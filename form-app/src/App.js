import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Значение поля:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Введите текст"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default App;
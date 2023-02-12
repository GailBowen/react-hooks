import React, { useState } from 'react';

function App() {

  const [bob, setBob] = useState(4);

  const [theme, setTheme] = useState('blue');


  function decrementCount() {
    setBob(beforeVal => beforeVal - 1);
    setTheme('red');
  }

  function augumentCount() {
    setBob(beforeVal => beforeVal + 1);
    setTheme('green');
  }

  return (
   <>
    <button onClick={decrementCount}>-</button>&nbsp;
    <span>{bob}</span>&nbsp;
    <span>{theme}</span>&nbsp;
    <button onClick={augumentCount}>+</button>
   </>
  );
}

export default App;

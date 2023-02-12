import React, { useState } from 'react';

function App() {

  const [bob, setBob] = useState(0);

  console.log('🐈 ~ file: App.js:7 ~ bob', bob);

  function decrementCount() {
    setBob(beforeVal => beforeVal - 1);
  }

  function augumentCount() {
    setBob(beforeVal => beforeVal + 1);
  }

  return (
   <>
    <button onClick={decrementCount}>-</button>&nbsp;
    <span>{bob}</span>&nbsp;
    <button onClick={augumentCount}>+</button>
   </>
  );
}

export default App;

import React, { useState, useMemo } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'     
  }

  // const themeStyles = {
  //   backgroundColor: 'red',
  //   color:'white'     
  // }
 
  return (
   <>
   <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
   </>
  );
}

function slowFunction(num) {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;

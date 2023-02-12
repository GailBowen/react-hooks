import React, { useState, useEffect } from 'react';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('goodbye');
    }
  },[]);

  return (
  <div>{windowWidth}</div>
  );
}

export default App;

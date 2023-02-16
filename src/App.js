//FIRST LINE DEVELOP!
import React, { useState} from 'react';
//Gail testing 666

//gail change in master

import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext();

export default function App() {
 const [darkTheme, setDarkTheme] = useState(true);

 function toggleTheme() {
   setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }
  
 
  return (
   <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* <FunctionContextComponent /> */}
        <ClassContextComponent />
      </ThemeContext.Provider>
   </>
  );
}





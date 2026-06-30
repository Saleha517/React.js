import React from 'react';
import { createContext } from 'react';
import ChildC from './components/ChildC';

const Data = createContext();
const name = "Sualeha";
function App() {
  return (
    <Data.Provider value ={name}>
      <ChildC />
    </Data.Provider>
  );
}

export default App;
export {Data};

// import React from 'react';
// import { createContext } from 'react';

// import ChildC from './components/ChildC';

// const Data = createContext();
// const Data1 = createContext();

// const name = "Sualeha";
// const mname = "saleha";
// function App() {
//   return (
//     <Data1.Provider value={mname}> 
//     <Data.Provider value ={name}>
//       <ChildC />
//     </Data.Provider>
//     \</Data1.Provider>
//   );
// }

// export default App;
// export {Data, Data1};


import React, { useMemo } from 'react'
import { useState } from 'react'
import { useCallback } from 'react';

const App = () => {


  const [count,setCount] = useState(0);
  const calculate = useCallback(() => {
  console.log("calculatingg");
    return 10+20;
  },[])

  return (
    <div>
      <h1>{calculate()}</h1>
      <h1>{count}</h1>
      <button type='button' onClick={() => setCount(count + 1)} className='btn btn-primary'>Increament</button>

      <button type='button' onClick={() => setCount(count - 1)} className='btn btn-danger '>Decreament</button>

    </div>
  )
}

export default App

 
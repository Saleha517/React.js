import React from 'react';
import { useRef, useState } from 'react';

const App = () => {
    
   const [count, setCount] = useState(0);
   const countRef = useState(0);

   const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log("Count", countRef.current);
   };
  return (
    <div>
      <h3>{count}</h3>

      <button type='button' className='btn btn-primary' onClick={() => setCount(count + 1)}>
        Add
      </button>

      <button type='button' className='btn btn-primary' onClick={handleClick}>
        Click Me
      </button>

    </div>
  );
};

export default App;


// import { render } from '@testing-library/react';
// import React from 'react';
// import { useRef, useState } from 'react';

// const App = () => {
//     const [count, setCount] = useState(0);
//     const renderCount = useRef(0);

//     renderCount.current++;

//   return (
//     <div>
//       <h2>{count}</h2>
//       <h3>{renderCount.current}</h3>

//       <button type='button' className='btn btn-primary' onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>
//     </div>
//   )
// }

// export default App;

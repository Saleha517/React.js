import React from "react";
import useCounter from "./useCounter";
const App = () => {

  const [count ,increament, decreament] = useCounter(23);

  return(
    <div>
      <h3>{count}</h3>
      <button type="button" className="btn-btn-primary" onClick={increament}>Add</button>
       <button type="button" className="btn-btn-primary" onClick={decreament}>min</button>
    </div>
  );
};

export default App;
import { useState } from "react";


const useCounter = (value) =>{
  const [count,setCount] = useState(value);

 function Increament() {
  setCount(count + 1);
 }


 function Decreament() {
  setCount(count - 1);
 }


 return [count,Increament, Decreament];

};
export default useCounter;
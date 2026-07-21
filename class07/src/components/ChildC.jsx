import React, { useContext } from 'react'
import { Data,Data1 } from '../App'

function ChildC() {

  const name = useContext(Data);
  const mname = useContext(Data1);

  return (
    <h1>
      My name is {name} and also my name is {mname}.
    </h1>
  )
}

export default ChildC;

                                                                                                                                                                                                                                                                                                                                                                                              
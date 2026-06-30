import React from 'react'
import { Data } from '../App'

function ChildC() {
  return (
    <Data.Consumer>{(name) => <h1>My name is {name}</h1>}</Data.Consumer>
  )
}

export default ChildC;
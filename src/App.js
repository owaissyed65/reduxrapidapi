import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { option } from './option';

const App = () => {

  

  const [value, setValue] = useState("")
  console.log(value)
  return (
    <div className='cont'>
      <input type="text" name="" id="" />
      <Dropdown options={option} onChange={(e) => { setValue(e.value); }} placeholder="Select an Language" />
    </div>
  )
}

export default App

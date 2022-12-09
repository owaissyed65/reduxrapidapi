import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { transChoose, translateAfter } from './option';

const App = () => {



  const [translateDrop, setTranslateDrop] = useState({});
  const [transAfter, setTranAfter] = useState({});
  const [transAfterValue, setTranAftervalue] = useState({ trnstr: '' });
  const [transBeforeValue, setTranBeforeValue] = useState({ trnstr: '' });
  console.log(translateDrop)
  return (
    <div className='cont'>
      <h2>Translate {Object.keys(translateDrop).length !== 0 ? translateDrop.label : "English"} language to {Object.keys(transAfter).length !== 0 ? transAfter.label : "Urdu"}</h2>
      <div className='cont-child'>
        <textarea name="trnstr" cols="30" rows="5" placeholder='Enter Text' onChange={(e) => {
          setTranAftervalue({
            ...transAfterValue, [e.target.name]: e.target.value
          })
        }}></textarea>
        <Dropdown className='drop' options={transChoose} value={transChoose[9].label} onChange={(e) => { setTranslateDrop({ ...e }); }} placeholder="Select an Language" />
      </div>
      <div className='cont-child'>
        <textarea name="" id="" cols="30" rows="5" readOnly placeholder='Translation'></textarea>
        <Dropdown className='drop' options={translateAfter} onChange={(e) => {
          setTranBeforeValue({
            ...transBeforeValue, [e.target.name]: e.target.value
          })
        }} placeholder="Select an Language" />
      </div>
      <div className='cont-child-btn'><button >Translate</button></div>
    </div>

  )
}

export default App

import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { transChoose, translateAfter } from './option';
import axios from 'axios';



const App = () => {
  const [translateDrop, setTranslateDrop1] = useState({});
  const [transAfter, setTranAfter] = useState({});
  const [transBeforeValue, setTranBeforeValue] = useState({ trnstr: '' });
  const [transAfterValue, setTranAftervalue] = useState({ trnstr: '' });


  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", Object.keys(translateDrop).length !== 0 ? translateDrop.value : "en");
  encodedParams.append("target_language", Object.keys(transAfter).length !== 0 ? transAfter.value : "ur");
  encodedParams.append("text", transBeforeValue.trnstr);

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '6af76e1e6fmsh269791c74654f5bp1e1f2djsne23387fa9761',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams
  };

  const translateLang = async () => {
    const asyncFunct = async () => {
      const response = await axios.request(options);
      return response;
    }
    const response = await asyncFunct();
    setTranAftervalue({ trnstr: response.data.data.translatedText })
    setTranBeforeValue({ trnstr: '' })
  }

  return (
    <div className='cont'>
      <h2 style={{ color: "White" }}>Translate {Object.keys(translateDrop).length !== 0 ? translateDrop.label : "English"} language to {Object.keys(transAfter).length !== 0 ? transAfter.label : "Urdu"}</h2>
      <div className='cont-child'>
        <textarea name="trnstr" cols="30" rows="5" placeholder='Enter Text' onChange={(e) => {
          setTranBeforeValue({
            ...transAfterValue, [e.target.name]: e.target.value
          })
        }}></textarea>
        <Dropdown className='drop' options={transChoose} value={transChoose[0].label} onChange={(e) => { setTranslateDrop1({ ...e }); }} placeholder="Select an Language" />
      </div>
      <div className='cont-child'>
        <textarea name="trnstr" value={transAfterValue.trnstr} id="" cols="30" rows="5" readOnly placeholder='Translation' onChange={(e) => {
          setTranAftervalue({
            ...transAfterValue, [e.target.name]: e.target.value
          })
        }}></textarea>
        <Dropdown className='drop' options={translateAfter} value={translateAfter[0].label} onChange={(e) => { setTranAfter({ ...e }) }} placeholder="Select an Language" />
      </div>
      <div className='cont-child-btn'><button onClick={translateLang}  >Translate</button></div>
    </div>

  )
}

export default App

import React from 'react';
import { useState } from 'react'
import './App.css'
import Navlinkbar from './navlink'
import Welcomepage from './welcomepage';

function App(){
    let [xx, setXx] = useState(1)
    function change(){
        setXx(4)
}
  return (
        <>
            <Navlinkbar setXx= {setXx} xx = {xx} change ={change}/>
            <Welcomepage/>
            
        </>
  )
}
export default App

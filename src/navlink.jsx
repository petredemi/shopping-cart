import React from 'react';
import { useState } from 'react'
import { Link, Outlet, useParams, useOutletContext, NavLink } from 'react-router-dom';
import './App.css'
import { Button } from './components';

export default function Navlinkbar({setXx, xx , change}){
    let [clik, setClik] = useState(false)
    let [disp, setDisp] = useState('none')
    let [tt, setTT] = useState(0) //to spinach
    let [tot, setTot] = useState(0) //TOTAL basket
    let [quant, setQuant] = useState(0)
//    let [troley, setTroley]= useState('')
    let [basket, setBasket] = useState(new Map()) //mineral basket
    let [bsk, setBsk] = useState([]) // array of items in basket
    let [bskl, setBskL] = useState(0) // basket lenght used to del item from basket
 // let quantity = 0
    function cart(){
        if(!clik){
          disp = 'block'
            setDisp('block')
            setClik(true)
        }else{
            setDisp('none')
            setClik(false);
        }
    }
    function EmtyBasket(){
        basket.clear();
        setDisp('none')
        setBsk([])
        setQuant(0)
        setTot(0)
    }
  return (
        <>
        <nav>
            <div className="orinoco">Orinoco Store</div>
          <div className="headerbar">

            <div className="links">
                <NavLink 
                    to="/welcomepage"
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                    } 
                    ><div className='home link' >Home</div>           
                </NavLink>
                <NavLink to= {{ pathname: 'clothes'}}
                    className={({ isActive }) =>
                    isActive ? "active" : "" } 
                ><div className='link'>Clothes</div></NavLink>
                <NavLink  to= {{ pathname: 'minerals'}}
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                    } 
                ><div className='link'>Minerals</div></NavLink>
                <NavLink to ={{ pathname:'groceries'}}
                 className={({ isActive }) =>
                    isActive ? "active" : ""
                }
                ><div className='link' >Groceries</div></NavLink>
            </div> 
                <div className='shopcart'>
                    <h5>shoppings</h5>
                    <img src="cart4.svg" alt=""  height={'35px'} width={'45px'} onClick={cart}/>
                    <div className="qa">
                        <div className="quant">{quant}</div>
                    </div>
                </div>
            </div>
            <div className="checkOutCart">
                <div className="checkOut" style={{display: disp}}>
                    <div className='bsk' >
                        {bsk}
                    </div>
                    <div className='total'>Total: {tot.toFixed(2)}£</div>
                    <Button color={'white'} background={'black'} margin={10} text={'clear'} handelClick={EmtyBasket}/>

                </div>
            </div>
        </nav>
      <Outlet context = {{tt, setTT, tot, setTot, quant, setQuant, basket, setBasket, 
            bsk, setBsk, bskl, setBskL}}/>
   
    </>
  )
};
  

import React from 'react';
import { useState } from 'react'
import { Link, Outlet, useParams, useOutletContext, NavLink } from 'react-router-dom';
import './App.css'
import { Button } from './components';
import Homepage from './homepage'

function Appp(){
    const {name} = useParams();
    let [clik, setClik] = useState(false)
    let [disp, setDisp] = useState('none')
    let tryx = 'hyjhtyjty'
    console.log(tryx)
  let total = 0
  let quantity = 0
    useOutletContext(quantity)
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
        setDisp('none');
    //    total = 0;
 //       setQuantity(0);
        setCos([]);
    }
  return (
        <>
        <nav>
          <div className="headerbar">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                    }><h3>Home</h3>           
                </NavLink>
                <NavLink to= 'spinach'
                 className={({ isActive }) =>
                    isActive ? "active" : ""}
                >spinach</NavLink>
                <Link to= {{ pathname: 'popeye'}}>popeye</Link>
                <Link  to= {{ pathname: '/products'}}><h3>Our Products</h3></Link> 
                <div className='shopcart'>
                    <h5>shoppings</h5>
                    <img src="cart4.svg" alt=""  height={'35px'} width={'45px'} onClick={cart}/>
                    <div className="qa">
                        <div className="quant">{quantity}</div>
                    </div>
                </div>
            </div>
            <div className="checkOutCart">
                <div className="checkOut" style={{display: disp}}>
                    <div className='bsk' >
                        fgf
                    </div>
                    <div className='total'>Total: {total}£</div>
                    <Button color={'white'} background={'black'} margin={10} text={'clear'} handelClick={EmtyBasket}/>

                </div>
            </div>
        </nav>
        <Outlet/>
        <h2>Wellcome in our store</h2>
        <h3>{tryx}</h3>
        <p>
        People have held many beliefs about minerals throughout history, including that they have magical 
        powers and can influence human health and emotions. These beliefs have been important in religion, 
        science, and medicine. 


        </p>
        <p> 
        Minerals are naturally occurring substances with distinct chemical and physical properties. 
        They are made up of geometric groups of elements that stack on top of each other to form a crystal lattice. 
        The shape of the crystal lattice varies from mineral to mineral
        </p>

        <div className="colectie">
            <img src="colectie-minerale.jpg"  alt=""/>
        </div>
        <div className="contact">Contact: &nbsp;<a href="mailto: petrudem@yahoo.com" style={{color:'blue'}}>petrudem@yahoo.com</a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target = '_blank'>
                <div className="lin">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                </div>
            </a> 
        </div>
        <Homepage/>
        <footer>©2025  PetruD  Webdesign</footer>
    </>
  )
}


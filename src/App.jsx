import { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'

function App(){
  return (
    <>

          <div className="headerbar">
                <Link to="/"><h3>Home</h3></Link>
                <Link to="products"><h3>Our Products</h3></Link>
                <div className='shopcart'>
                    <Link to="products"><h5>go shopping</h5></Link>
                    <img src="cart4.svg" alt=""  height={'35px'} width={'45px'}/>
                    <div className="qa">
                        <div className="quant">0</div>
                    </div>
                </div>
            </div>

        <h2>Wellcome in our store</h2>
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
        <footer>©2025  PetruD  Webdesign</footer>
    </>
  )
}
export default App

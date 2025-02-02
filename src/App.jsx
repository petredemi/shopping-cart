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
                    <img src="src/assets/cart4.svg" alt=""  height={'35px'} width={'45px'}/>
                    <div className="qa">
                        <p className="quant">0</p>
                    </div>
                </div>
            </div>

        <h2>Wellcome in our store</h2>
        <div className="colectie">
            <img src="src/images/colectie-minerale.jpg"  alt=""  />
        </div>
        <footer>© PetruD  Webdesign</footer>
    </>
  )
}
export default App

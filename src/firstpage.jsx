import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './stylefiles/general.css'
import Product from './products.jsx'
import items from './data.jsx'


function Firstpage (){
    let [qx, setQx] = useState(0)
    let [q1, setQ1] = useState(0)
    let [q2, setQ2] = useState(0)
    let [q3, setQ3] = useState(0)
    let [q4, setQ4] = useState(0)


    let [basket, setBasket] = useState(new Map())
    let [bsk, setBsk] = useState([])
    let [clik, setClik] = useState(false)
    let [ disp, setDisp] = useState('none')
    let  total = 0;
    let quantity = 0;
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

    function addCart(x, sX, y){
      setQx(x + qx)
      if(!basket.has(items[y])){
            basket.set(items[y], x)
            let t = x * items[y].price
            bsk.push( <div key={items[y].name}>{items[y].name} &nbsp; {items[y].price} {'£ each'}&nbsp;  {x} {'pcs'}  &nbsp; total: {t} {'£'}</div>)
      }else {
            basket.set(items[y], basket.get(items[y]) + x)
            let t = basket.get(items[y]) * items[y].price 
            bsk[y] = <div key={items[y].name} >{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t} {'£'}</div>
        }
         sX(0)
    }
    if(basket.size != 0){
        for ( let [key, value] of basket){
            total = total + key.price * value
            quantity = quantity + value
            }
        }
    console.log(quantity)
    function add(x, sX){
        if(x < 10){
                sX(x + 1)
        }
    }
    function sub(x, sX){
        if(x === 0) return
            sX(x - 1)
    }
    function EmtyBasket(){
        basket.clear();
    }
    return (
        <>
            <div className="headerbar">
                <Link to="/"><h3>Home</h3></Link>
                <h3>Our products</h3>
                <div className='shopcart'>
                    <h5>my shoppings </h5>
                    <img src="src/assets/cart4.svg" alt=""  height={'35px'} width={'45px'} onClick={cart}/>
                    <div className="qa">
                        <p className="quant">{quantity}</p>
                    </div>
                </div>
            </div>
            <div className="checkOutCart">
                <div className="checkOut" style={{display: disp}}>
                    <div className='bsk'>{bsk}</div>
                    <div className='total'>Total: {total} £</div>
                </div>
            </div>
            <h4>add products in the shopping cart</h4>
            <div className="content">
                <Product price={items[0].price} text='Pirite Cristals' idInput='pirite' picture={items[0].picture} Click={() => addCart(q1, setQ1, 0)} add={() =>add(q1, setQ1)} sub={() => sub(q1, setQ1)} q={q1}/>
                <Product price={items[1].price} text='Cuart Cristals' idInput='cuart' picture={items[1].picture} Click={ () =>addCart(q2, setQ2, 1)} add={() => add(q2, setQ2)} sub={()=> sub(q2, setQ2)} q={q2}/>    
                <Product price={items[2].price} text='Stibnite Crystals' idInput='stibina' picture={items[2].picture} Click={ () =>addCart(q3, setQ3, 2)} add={() => add(q3, setQ3)} sub={()=> sub(q3, setQ3)} q={q3}/>    
                <Product price={items[3].price} text='Fluoride Cristals' idInput='florina' picture={items[3].picture} Click={ () =>addCart(q4, setQ4, 3)} add={() => add(q4, setQ4)} sub={()=> sub(q4, setQ4)} q={q4}/>                
            </div>
            <footer>© PetruD  Webdesign</footer>
        </>
    )
}
export default Firstpage 
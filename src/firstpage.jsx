import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './stylefiles/general.css'
import {Product, Button, BskPM} from './products.jsx'
import items from './productsdatabase.jsx'



function Firstpage (){
 //   let [qx, setQx] = useState(0)  //number of items in basket
    let [q1, setQ1] = useState(0)   
    let [q2, setQ2] = useState(0)
    let [q3, setQ3] = useState(0)
    let [q4, setQ4] = useState(0)

    let [basket, setBasket] = useState(new Map())
    let [bsk, setBsk] = useState([])
    let [clik, setClik] = useState(false)
    let [disp, setDisp] = useState('none')
    let [bskl, setBskL] = useState(0)
    let [adstate, setAdState] = useState(0)

    let total = 0;
    let quantity = 0;
    let t = 0
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
    function removeItems(x){
        if(basket.size === 1){
            EmtyBasket()
            setDisp('none')
        }
        basket.delete(items[x])
        delete bsk[x]
        setBskL(basket.size)
    }
    console.log(bskl)
    console.log(basket.size)
    console.log(bsk)
    function addCart(x, sX, y){
      //let t = 0
        if(basket.size === 0){
        }
        if(!basket.has(items[y])){
            basket.set(items[y], x)
            t = x * items[y].price
            bsk[y] = <div key={items[y].idInput}>
            <div className='itembasket'>{items[y].name} &nbsp; {items[y].price} {'£ each'} &nbsp;  {x} {'pcs'}  &nbsp; total: {t} {'£'}</div>
            <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
            <BskPM add={() => ad(y)} sub={() => su(y)}/>
            </div>
            sX(0)
        }else {
            basket.set(items[y], basket.get(items[y]) + x)
            t = basket.get(items[y]) * items[y].price 
            bsk[y] = <div key={items[y].idInput}>
            <div className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t} {'£'}</div>
            <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
            <BskPM add={() => ad(y)} sub={() => su(y)}/>
            </div>
            sX(0)
        }
    }
    if(basket.size != 0){
        for ( let [key, value] of basket){
            total = total + key.price * value
            quantity = quantity + value
            }
        }
    function add(x, sX){
        if(x < 10){
                sX(x + 1)
                console.log(basket)

        }
    }
    function sub(x, sX){
        if(x === 0) return
            sX(x - 1)
    }
    function EmtyBasket(){
        basket.clear();
    //    setQx(0)
        setBsk([])
    }
    function ad(y){
        if(basket.get(items[y]) < 10){
       basket.set(items[y], basket.get(items[y])+ 1)
       t = basket.get(items[y]) * items[y].price 
       bsk[y] = <div key={items[y].idInput}>
        <div className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t} {'£'}</div>
       <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
       <BskPM add={() => ad(y)} sub={() => su(y)}/>
       </div>
        if(basket.size != 0){
            let b = 0
            for ( let [key, value] of basket){
                total = total + key.price * value
           ///     quantity = basket.get(key) * key.price; 
            }     
            for (const x of basket.values()){
                    b += x
                }
          //  quantity = basket.get(items[y]) * items[y].price; 

            setAdState(b)
                console.log(adstate)
        }
        console.log(basket)
        }
    }
    function su(y){
        if( basket.get(items[y]) > 0){
        basket.set(items[y], basket.get(items[y]) - 1)
        t = basket.get(items[y]) * items[y].price 
        bsk[y] = <div key={items[y].idInput}>
        <div className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t} {'£'}</div>
        <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
        <BskPM add={() => ad(y)} sub={() => su(y)}/>
        </div>
        if(basket.size != 0){
            let b = 0;
            for ( let [key, value] of basket){
                total = total + key.price * value
                quantity = quantity + value
                }

            for (const x of basket.values()){
                    b += x
                }
            setAdState(b)

            }
        console.log(basket)
        }
    }
    return (
        <>
            <div className="headerbar">
                <Link to="/"><h3>Home</h3></Link>
                <h3 style={{color:'red'}}>Our Products</h3>
                <div className='shopcart'>
                    <h5>shoppings </h5>
                    <img src="cart4.svg" alt=""  height={'35px'} width={'45px'} onClick={cart}/>
                    <div className="qa">
                        <div className="quant">{quantity}</div>
                    </div>
                </div>
            </div>
            <div className="checkOutCart">
                <div className="checkOut" style={{display: disp}}>
                    <div className='bsk' >
                        {bsk.map((item) => (item))}
                    </div>
                    <div className='total'>Total: {total} £</div>
                    <Button color={'white'} background={'black'} margin={10} text={'clear'} handelClick={EmtyBasket}/>
                </div>
            </div>
            <h4>add products in the shopping cart</h4>
            <div className="content">
                <Product price={items[0].price} text='Pirite Cristals' idInput='pirite' picture={items[0].picture} Click={() => addCart(q1, setQ1, 0)} add={() =>add(q1, setQ1)} sub={() => sub(q1, setQ1)} q={q1}/>
                <Product price={items[1].price} text='Cuart Cristals' idInput='cuart' picture={items[1].picture} Click={ () =>addCart(q2, setQ2, 1)} add={() => add(q2, setQ2)} sub={()=> sub(q2, setQ2)} q={q2}/>    
                <Product price={items[2].price} text='Stibnite Crystals' idInput='stibina' picture={items[2].picture} Click={ () =>addCart(q3, setQ3, 2)} add={() => add(q3, setQ3)} sub={()=> sub(q3, setQ3)} q={q3}/>    
                <Product price={items[3].price} text='Fluoride Cristals' idInput='florina' picture={items[3].picture} Click={ () =>addCart(q4, setQ4, 3)} add={() => add(q4, setQ4)} sub={()=> sub(q4, setQ4)} q={q4}/>                
            </div>
            <BskPM/>
            <footer>©2025 PetruD  Webdesign</footer>
        </>
    )
}
export default Firstpage 
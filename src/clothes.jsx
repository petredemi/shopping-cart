import React from "react"
import { useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';
import './stylefiles/general.css'
import {Product, Button, BskPM} from './components.jsx'
import items from './productsdatabase.jsx'

function Clothes(){

    let [q1, setQ1] = useState(0)  // set number of items
    let [q2, setQ2] = useState(0)
    let [q3, setQ3] = useState(0)
    let [q4, setQ4] = useState(0)
    let [adstate, setAdState] = useState(0)
    let [c, setC] = useState([]) //set an item in the cos/basket
    let {tot, setTot, quant, setQuant, basket, setBasket, bsk, setBsk, bskl, setBskL} = useOutletContext()
    let totalprice = 0
    let t = 0
    function removeItems(x){
        if(basket.size === 1){
            EmtyBasket()
        }
        basket.delete(items[x])
        delete bsk[x]
        setBskL(basket.size)
        
        if(basket.size != 0){
            let b = 0;
            totalprice = 0
            for ( let [key, value] of basket){
                totalprice = totalprice + key.price * value

                }
            for (const x of basket.values()){
                    b += x
                }
            setQuant(b)
            setAdState(b)
            setTot(totalprice)
            }
    }
    function addCart(x, sX, y){
        if(basket.size === 0){
        }
        if(!basket.has(items[y])){
            basket.set(items[y], x)
            t = x * items[y].price
            bsk[y] = <div key={items[y].idInput}>
                <div className='itembasket'>{items[y].name} &nbsp; {items[y].price} {'£ each'} &nbsp;  {x} {'pcs'}  &nbsp; total: {t.toFixed(2)} {'£'}</div>
                <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
                <BskPM add={() => ad(y)} sub={() => su(y)}/>
            </div>
            c[y] = <div key={items[y].idInput}>
                    <div key={items[y].name} className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t.toFixed(2)} {'£'}</div>
                </div>
            let b = 0
                for (const x of basket.values()){
                    b += x
                }   
                setQuant(b)
            sX(0)
        }else {
            basket.set(items[y], basket.get(items[y]) + x)
            t = basket.get(items[y]) * items[y].price 
            bsk[y] = <div key={items[y].idInput}>
                <div className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t.toFixed(2)} {'£'}</div>
                <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
                <BskPM add={() => ad(y)} sub={() => su(y)}/>
            </div>
            c[y] = <div key={items[y].idInput}>
                    <div key={items[y].name} className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t.toFixed(2)} {'£'}</div>
                </div>
            let b = 0
            for (const x of basket.values()){
                     b += x
                }   
            sX(0)
            setQuant(b)
        }
        if(basket.size != 0){
        for ( let [key, value] of basket){
            totalprice = totalprice + key.price * value
           }
            setTot(totalprice)
        }
    }
    function add(x, sX){
        let b = 0
        if(x < 10){
                sX(x + 1)
                console.log(basket)
            for (const x of basket.values()){
                    b += x
                }
            setAdState(b)
        }
    }
    function sub(x, sX){
        let b = 0
        if(x === 0) return
            sX(x - 1)
            for (const x of basket.values()){
                b += x
            }
        setAdState(b)
    }
    function EmtyBasket(){
        basket.clear();
        setBsk([])
        setQuant(0)
        setTot(0)
    }
    function ad(y){
        if(basket.get(items[y]) < 10){
       basket.set(items[y], basket.get(items[y])+ 1)
       t = basket.get(items[y]) * items[y].price 
       bsk[y] = <div key={items[y].idInput}>
            <div className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t.toFixed(2)} {'£'}</div>
            <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
            <BskPM add={() => ad(y)} sub={() => su(y)}/>
       </div>
        if(basket.size != 0){
            let b = 0
            totalprice = 0
            for ( let [key, value] of basket){
                totalprice = totalprice + key.price * value
            }
            for (const x of basket.values()){
                    b += x
                }
            setQuant(b)
            setAdState(b)
            setTot(totalprice)
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
        <div className='itembasket'>{items[y].name} &nbsp; {items[y].price}{'£ each'} &nbsp;{basket.get(items[y])} {'pcs'} &nbsp; total: {t.toFixed(2)} {'£'}</div>
        <Button color={'white'} background={'red'} text={'del'} padding={3} margin={0} handelClick={() => removeItems(y)}/>
        <BskPM add={() => ad(y)} sub={() => su(y)}/>
        </div>
        if(basket.size != 0){
            let b = 0;
            totalprice = 0
            for ( let [key, value] of basket){
                totalprice = totalprice + key.price * value
                }
            for (const x of basket.values()){
                    b += x
                }
            setQuant(b)
            setAdState(b)
            setTot(totalprice)
            }
        }
    }

    return(
    <>
        <div>
             <h2>Choose clothes which suit your personal style</h2>
        </div>
        <div className="presentation">
            <p>
            Oure mission is to provide oure customers with stylish 
            and comfortable clothing that reflects their personal style.
            We've created a welcoming and comfortable environment for you to 
            browse and find your perfect pieces. Our knowledgeable staff is here 
            to assist you and help you find the perfect outfit.
        </p>
        </div>
        <div className="content">
                <Product price={items[10].price} text= {items[10].name} idInput= {items[10].idInput} picture={items[10].picture} high ={'230px'} Click={() => addCart(q1, setQ1, 10)} add={() =>add(q1, setQ1)} sub={() => sub(q1, setQ1)} q={q1}/>
                <Product price={items[11].price} text= {items[11].name} idInput= {items[11].idInput} picture={items[11].picture} high={'230px'} Click={ () =>addCart(q2, setQ2, 11)} add={() => add(q2, setQ2)} sub={()=> sub(q2, setQ2)} q={q2}/>    
                <Product price={items[12].price} text= {items[12].name} idInput= {items[12].idInput} picture={items[12].picture} high={'230px'} Click={ () =>addCart(q3, setQ3, 12)} add={() => add(q3, setQ3)} sub={()=> sub(q3, setQ3)} q={q3}/>    
                <Product price={items[13].price} text= {items[13].name} idInput= {items[13].idInput} picture={items[13].picture} high={'230px'} Click={ () =>addCart(q4, setQ4, 13)} add={() => add(q4, setQ4)} sub={()=> sub(q4, setQ4)} q={q4}/>                
        </div>
        <div className="contact">Contact:<a href="mailto: petrudem@yahoo.com" style={{color:'blue'}}>petrudem@yahoo.com</a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target = '_blank'>
                    <div className="lin">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                    </div>
                </a> 
            </div>
        <footer>©2025  PetruD  Webdesign</footer>

    </>
    )
}
export default Clothes
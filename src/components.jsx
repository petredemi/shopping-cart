import { useState } from "react";

function Button({ color, background, text, margin, padding, handelClick}){
    const btnStyle ={
        color: color,
        backgroundColor: background,
        width: 'fit-content',
        margin: margin + 'px',
        padding: padding + 'px',
    }
    return (
        <>
            <button style = {btnStyle} onClick={handelClick}>{text}</button>
        </>
    )
}
function BtnPlusMinus({color, text, handelClick}){
        const btnStyle = {
            color: color,
        }
        return(
            <>
                <button style={btnStyle} onClick={handelClick} >{text}</button>
            </>
        )
    }
function BskPM({add, sub}){
    return (
        <>
            <div className="bskbtn">
                <button onClick={add}> + </button>
                <div> &nbsp; &nbsp; </div>
                <button onClick={sub}> -</button>

            </div>
    </>
    )
}
function ChooseQuantity({add, sub, q}){
        return (
            <>
                <div className="btnPlusMinus">
                    <BtnPlusMinus color={'green'} text={'+'} handelClick = {add} />
                    <div className="qx">{q}</div>
                    <BtnPlusMinus color={'red'} text={'-'} handelClick={sub}/>
                </div>
            </>
        )
    }
function Product({text, price, picture, high, Click, add, sub, q, kg}){
    return(
        <>
        <div className="prod" >
            <div className="picture">
                <img src= {picture} width={'200px'} height={high} alt="" />
            </div>
            <div className="description">{text}</div>
            <div className="val" >
                <div className="price">{price}</div>
                <div className="currency">&nbsp; £{kg}</div>
            </div>
            <li>
                <ChooseQuantity add = {add}  sub={sub} q={q}/>
                <Button color={'white'} background={'black'} text={'add'} margin = {10} handelClick={Click}/>
            </li>
        </div>
        </>
    )
}

export {Product, Button, BskPM}
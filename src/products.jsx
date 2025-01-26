
function Button({ color, background, text, handelClick}){
    const btnStyle ={
        color: color,
        backgroundColor: background,
        width: '80px',
        margin: '10px'
    }
    return (
        <>
            <button style = {btnStyle} onClick={handelClick}>{text}</button>
        </>
    )
}
function Product({text, price, picture, idInput}){
    const prodStyle = {
        display: 'flex',
    }
    return(
        <>
        <div className="prod" >
            <div className="picture">
                <img src= {'src/images/'+ picture} width={'200px'} alt="" />
            </div>
            <div className="description">{text}</div>
            <div className="val" >
                <div className="price">{price}</div>
                <div className="currency">£</div>
            </div>
            <li>
                <label htmlFor= {idInput}>
                    <input type="number" id= {idInput} name={idInput} min= {0} max={10}/>
                </label>
                <Button color = 'white' background='black' text={'add '}/>
            </li>
        </div>
        </>
    )
}
function Products (){
    return(
        <>
            <h4>my Products</h4>
            <div className="content">
                <Product price={30} text='Pirite Cristals' idInput='pirite' picture={'pirita.jpg'}/>
                <Product price={40} text='Cuart Cristals' idInput='cuart' picture={'cuart.jpg'}/>
            </div>
            <footer>© PetruD  Webdesign</footer>

        </>
    )
}

export default Products
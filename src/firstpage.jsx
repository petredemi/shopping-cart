import './stylefiles/general.css'

let q = 0;

function Firstpage (){
    return (
        <>
            <div className="headerbar">
                <h3>Home</h3>
                <h3>Our products</h3>
                <div className='shopcart'>
                    <h5>my shoppings </h5>
                    <img src="src/assets/cart4.svg" alt=""  height={'35px'} width={'45px'}/>
                    <div className="qa">
                        <p className="quant">{q}</p>
                    </div>
                </div>

            </div>
            <h1>Wellcome in our store</h1>
            <footer>© PetruD  Webdesign</footer>
        </>

    )
}
export default Firstpage 
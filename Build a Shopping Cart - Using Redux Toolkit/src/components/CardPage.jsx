import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const CardPage = () => {

    const {cart, totalQuantity, totalPrice} = useSelector((state) => state.allCart);

  return (
    <div className='container justify-content-center'>

        <div className='cart-page-wrapper'>
                <div className="card">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col">
                                        <h4 className='shopping-cart'><b>Shopping Cart</b></h4>
                                    </div>
                                    <div className="col align-self-center text-right text-muted">
                                        {cart.length} items
                                    </div>
                                </div>
                            </div>  


                            {cart?.map( (data) => (
                                <div className="row border-top border-bottom" key={data.id}>
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid" src={data.img} alt='cart-item-1'/></div>
                                    <div className="col">
                                        <div className="row text-muted">{data.title}</div>
                                        <div className="row">description: .....</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">{data.quantity}</a><a href="#">+</a>
                                        
                                    </div>
                                    <div className="col">&euro; {data.price} </div>
                                    <div className="col"><p className="close">&#10005;</p></div>
                                </div>
                            </div>
                            ))}
                            
                            


                            <div className="back-to-shop">
                                <Link to={'/'}><p className="text-muted">Back to shop</p></Link>
                            </div>
                        </div>



                        <div className="col-md-4 summary">
                            <div><h5><b>Summary</b></h5></div>
                            <hr/>
                            <div className="row">
                                <div className="col" >ITEMS (pcs):</div>
                                <div className="col text-right">{totalQuantity}</div>
                            </div>
                       
                            <div className="row" >
                                <div className="col" id='total-price'>TOTAL PRICE: </div>
                                <div className="col text-right">&euro; {totalPrice}</div>
                            </div>
                            <button className="btn-checkout">CHECKOUT</button>
                        </div>


                    </div>           
                </div>       
            </div>


    </div>
  )
}

export default CardPage
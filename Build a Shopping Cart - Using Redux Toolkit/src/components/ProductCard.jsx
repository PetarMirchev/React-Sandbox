import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';


const ProductCard = () => {

  const items = useSelector( (state) => state.allCart.items);

  //console.log(items);

  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='row'>
        {items.map((item) => (
          <div className='col-4' key={item.id}>
            <div className="card">
                <img src={item.img} className="card-img-top" alt="product-pic"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title} </h5>
                        <p className="card-text">Some quick example text to build on the card title and card's content.</p>
                        <p className="card-text">price: {item.price}</p>
                        <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
                          Add to Cart
                        </button>                        
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
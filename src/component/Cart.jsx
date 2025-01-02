import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action';
// import Nevbar from './Nevbar';

const Cart = () => {
  const cartState = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleRemove = (product) => {
    dispatch(delCart(product));
  };

  return (
    <div className="container mt-4">
      {/* <Nevbar/> */}
      {cartState.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        cartState.map((item) => (
          <div key={item.id} className="row border p-3 my-2 rounded shadow-sm">
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{ maxHeight: '150px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <h4>{item.title}</h4>
              <p>Price: ₹{item.price * item.qty}</p> {/* Price based on quantity */}
              <p>Quantity: {item.qty}</p>
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-danger me-2"
                onClick={() => handleRemove(item)}
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleAdd(item)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

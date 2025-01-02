import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { addCart } from "../redux/action"
import { useDispatch } from 'react-redux';
 
 
 

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [id]);

    const Loading = () => {
        return (
            <>
           
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />

                </div>
            </>
        )
    }



    const ShowProduct = () => (
        <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h1 className="display-5">{product.title}</h1>
                <p className="lead">{product.description}</p>
                <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h2 className="my-4">₹{product.price}</h2>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)} >Add to Cart</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
            </div>
        </>
    );

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default Product;

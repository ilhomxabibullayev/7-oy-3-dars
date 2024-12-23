import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { addToCart } from '../redux/actions';
import './Product.css';
import Like from '../image/like.svg';
import Liked from '../image/liked.svg';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
        <div className='product'>
            <div className="container product__container">
                <div className='product__card'>
                    <div className='product__block'>
                        {}
                        <img 
                            className='product__like' 
                            src={liked ? Liked : Like} 
                            alt="Like" 
                            onClick={handleLikeToggle} 
                        />
                    </div>
                    <img className='product__image2' src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <Link className='product__btn' to={'/product-details/' + product.id}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;

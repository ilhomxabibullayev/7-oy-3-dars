import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions';
import './Home.css';
import Hero from '../../components/Hero';
import Smaller from '../../components/Smaller';
import Category from '../../components/Category';
import Product from '../../components/Product';
import Smaller2 from '../../components/Smaller2';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch(setProducts(data.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Smaller />
      <Category />
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <Smaller2 />
      <Discount />
      <Sale />
    </>
  );
};

export default Home;

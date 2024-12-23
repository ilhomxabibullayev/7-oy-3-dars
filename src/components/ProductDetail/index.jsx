import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.products);

  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p> {}
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

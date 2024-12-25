import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favorite' element={<Favorite />} />
        </Routes>
    );
};

export default Router;

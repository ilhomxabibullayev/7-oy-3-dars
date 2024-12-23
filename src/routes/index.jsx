import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productId' element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Router

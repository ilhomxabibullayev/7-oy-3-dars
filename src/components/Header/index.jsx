import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'
import Logo from '../../image/logo.svg'
import Search from '../../image/search.svg'
import Favorite from '../../image/favorite.svg'
import Cart from '../../image/cart.svg'
import User from '../../image/user.svg'

const Headr = () => {
  return (
    <div className='header'>
      <div className='container header__container'>
        <div className='header__logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='header__input'>
          <img src={Search} alt="" />
          <input type="text" placeholder='Search ' />
        </div>
        <ul className='header__list'>
          <li className='header__item'>
            <NavLink to="/" className='header__link'>Home</NavLink>
          </li>
          <li className='header__item'>
            <NavLink to="/about" className='header__link'>About</NavLink>
          </li>
          <li className='header__item'>
            <NavLink to="/contact" className='header__link'>Contact</NavLink>
          </li>
          <li className='header__item'>
            <NavLink to="/blog" className='header__link'>Blog</NavLink>
          </li>
        </ul>
        <div className='header__icon'>
          <NavLink to="/favorite" ClassName="header__link"><img src={Favorite} alt="" /></NavLink>
          <NavLink to="/cart" ClassName="header__link"><img src={Cart} alt="" /></NavLink>
          <NavLink to="/user" ClassName="header__link"><img src={User} alt="" /></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Headr

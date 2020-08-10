import React from 'react';
import { MdAccountBalance, MdTrendingUp, MdStars } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './css/Navbar.css';

const SIZE = '32px';

export const Navbar = () => {
  return (
    <nav className="nav__container">
      <Link to='/'><MdAccountBalance color='#1e253a' size={SIZE} /></Link>
      <Link to='/stats'><MdTrendingUp color='#1e253a' size={SIZE} /></Link>
      <Link to='/transactions'><MdStars color='#1e253a' size={SIZE} /></Link>
    </nav>
  );
}
import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header>
      <Link to='/movies'><h1>Movie Buff</h1></Link>
    </header>
  )
}

export default Header;

import { Outlet, Link } from 'react-router-dom';
import './navbar.styles.scss';

import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link
          className='logo-container'
          to='/'
        >
          <img
            src={logo}
            alt='shop & shop'
          />
        </Link>

        <ul className='nav-links-container'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/shop'
            >
              Shop
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/contact'
            >
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/auth'
            >
              Sign In
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/cart'
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

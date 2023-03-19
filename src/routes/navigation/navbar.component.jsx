import { useUserContext } from '../../context/user.context';

import { useCartContext } from '../../context/cart.context';

import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firbase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import logo from '../../assets/images/logo.png';
import './navbar.styles.scss';

const Navbar = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();

  const signOutHandler = async () => {
    await signOutUser();
  };

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

          {currentUser ? (
            <li className='nav-item'>
              <span
                className='nav-link'
                onClick={signOutHandler}
              >
                Sign Out
              </span>
            </li>
          ) : (
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/auth'
              >
                Sign In
              </Link>
            </li>
          )}

          <CartIcon />
        </ul>

        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

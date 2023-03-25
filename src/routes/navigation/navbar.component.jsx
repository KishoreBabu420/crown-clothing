import { useUserContext } from '../../context/user.context';

import { useCartContext } from '../../context/cart.context';

import { Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import logo from '../../assets/images/logo.png';
import {
  LogoContainer,
  NavbarContainer,
  NavLinksContainer,
  NavLink,
} from './navbar.styles';

const Navbar = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavbarContainer>
        <LogoContainer
          className='logo-container'
          to='/'
        >
          <img
            src={logo}
            alt='shop & shop'
          />
        </LogoContainer>

        <NavLinksContainer>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/shop'
            >
              Shop
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/contact'
            >
              Contact
            </NavLink>
          </li>

          {currentUser ? (
            <li className='nav-item'>
              <NavLink
                as='span'
                className='nav-link'
                onClick={signOutHandler}
              >
                Sign Out
              </NavLink>
            </li>
          ) : (
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/auth'
              >
                Sign In
              </NavLink>
            </li>
          )}

          <CartIcon />
        </NavLinksContainer>

        {isCartOpen && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;

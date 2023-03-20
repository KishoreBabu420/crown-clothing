import './cart-dopdown.styles.scss';

import { useCartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem
            {...cartItem}
            key={cartItem.id}
          />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;

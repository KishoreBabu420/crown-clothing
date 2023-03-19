import { useCartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useCartContext();
  const toggleCartContainer = () => setIsCartOpen(!isCartOpen);
  return (
    <div
      className='cart-icon-container'
      onClick={toggleCartContainer}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;

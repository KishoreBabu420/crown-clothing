import { useCartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { CartIconContainer } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartContext();
  const toggleCartContainer = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartContainer}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </CartIconContainer>
  );
};

export default CartIcon;

import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import { useCartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cartItems, cartTotal } = useCartContext();

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      ))}
      <Total>Total:$ {`${cartTotal}`}</Total>
    </CheckOutContainer>
  );
};

export default Checkout;

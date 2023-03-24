import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ name, quantity, imageUrl, price }) => {
  return (
    <CartItemContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

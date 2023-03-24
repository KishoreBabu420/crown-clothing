import { CheckOutItemContainer, ImageContainer } from './checkout-item.styles';
import { useCartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity, route } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useCartContext();

  const clearItemHandler = (cartItem) => clearItemFromCart(cartItem);

  const removeItemHandler = (cartItem) => removeItemFromCart(cartItem);
  const addItemHandler = (cartItem) => addItemToCart(cartItem);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => removeItemHandler(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => addItemHandler(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemHandler(cartItem)}
      >
        &#10005;
      </div>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;

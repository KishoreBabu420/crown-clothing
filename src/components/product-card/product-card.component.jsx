import Button from '../button/button.component';
import {
  Footer,
  ProductCardContainer,
  Name,
  Price,
} from './product-card.styles';

import { useCartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartContext();

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType='inverted'
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

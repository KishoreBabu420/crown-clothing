import { Link } from 'react-router-dom';

import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link
          className='title'
          to={title}
        >
          {title.toUpperCase()}
        </Link>
      </Title>

      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

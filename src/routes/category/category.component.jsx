import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContainer, CategoryTitle } from './category.styles';

import { useCategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './category.styles.scss';

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
    <div className='category-container'>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
};

export default Category;
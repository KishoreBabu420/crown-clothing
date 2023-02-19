import './category-item.styles.scss';

const Category = ({ id, title, imageUrl }) => {
  return (
    <div
      className='category-container'
      key={id}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;

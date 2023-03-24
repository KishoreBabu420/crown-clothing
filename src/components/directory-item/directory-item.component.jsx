import {
  DirectoryBodyContainer,
  DirectoryContainer,
  BackgroundImage,
} from './directory-item.styles';

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <DirectoryContainer>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;

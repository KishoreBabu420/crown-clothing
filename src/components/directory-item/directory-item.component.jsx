import {
  DirectoryBodyContainer,
  DirectoryContainer,
  BackgroundImage,
} from './directory-item.styles';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
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

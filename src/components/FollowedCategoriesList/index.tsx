import React from 'react';

import {
  Container,
  CategoryItemContainer,
  CategoryItemImage,
  CategoryItemName,
  CategoryItemStatus,
  RedCircle,
  CategoryItemInfo,
} from './styles';

import data from './data';

interface ICategoryItemProps {
  item: typeof data[0];
}

const FollowedCategoriesList: React.FC = () => {
  const CategoryItem: React.FC<ICategoryItemProps> = ({ item }) => (
    <CategoryItemContainer>
      <CategoryItemImage source={item.source} />
      <CategoryItemName numberOfLines={1}>{item.name}</CategoryItemName>
      <CategoryItemStatus>
        <RedCircle />
        <CategoryItemInfo>51.9K</CategoryItemInfo>
      </CategoryItemStatus>
    </CategoryItemContainer>
  );

  return (
    <Container>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </Container>
  );
};

export default FollowedCategoriesList;

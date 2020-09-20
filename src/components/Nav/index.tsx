import React, { useState } from 'react';

import { Container, Button, Title } from './styles';

const Nav: React.FC = () => {
  const [isCategoriesSelected, setIsCategoriesSelected] = useState(true);
  const [isLiveChannelsSelected, setIsLiveChannelsSelected] = useState(false);

  function handlePress(id: 'categories' | 'live-channels') {
    if (id === 'categories') {
      setIsCategoriesSelected(true);
      setIsLiveChannelsSelected(false);
    } else {
      setIsLiveChannelsSelected(true);
      setIsCategoriesSelected(false);
    }
  }

  return (
    <Container>
      <Button
        onPress={() => handlePress('categories')}
        selectedTitle={isCategoriesSelected}
        activeOpacity={1}>
        <Title selectedTitle={isCategoriesSelected}>Categories</Title>
      </Button>

      <Button
        onPress={() => handlePress('live-channels')}
        selectedTitle={isLiveChannelsSelected}
        activeOpacity={1}>
        <Title selectedTitle={isLiveChannelsSelected}>Live Channels</Title>
      </Button>
    </Container>
  );
};

export default Nav;

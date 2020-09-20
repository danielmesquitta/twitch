import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Button, Title } from './styles';
import { IBrowse, IStore } from '~/@types/store';
import { changeContent } from '~/store/modules/browse/actions';

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const browse = useSelector<IStore, IBrowse>(state => state.browse);

  const [isCategoriesSelected, setIsCategoriesSelected] = useState(true);
  const [isLiveChannelsSelected, setIsLiveChannelsSelected] = useState(false);

  useEffect(() => {
    switch (browse.content) {
      case 'categories':
        setIsCategoriesSelected(true);
        setIsLiveChannelsSelected(false);
        break;
      case 'live-channels':
        setIsCategoriesSelected(false);
        setIsLiveChannelsSelected(true);
        break;
    }
  }, [browse.content]);

  return (
    <Container>
      <Button
        onPress={() => dispatch(changeContent('categories'))}
        selectedTitle={isCategoriesSelected}
        activeOpacity={1}>
        <Title selectedTitle={isCategoriesSelected}>Categories</Title>
      </Button>

      <Button
        onPress={() => dispatch(changeContent('live-channels'))}
        selectedTitle={isLiveChannelsSelected}
        activeOpacity={1}>
        <Title selectedTitle={isLiveChannelsSelected}>Live Channels</Title>
      </Button>
    </Container>
  );
};

export default Nav;

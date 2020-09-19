import React, { useMemo } from 'react';

import { Container, Main } from './styles';

import Header from '~/components/Header';
import Heading from '~/components/Heading';
import Title from '~/components/Title';
import CategoriesList from '~/components/CategoriesList';
import LiveListHorizontal from '~/components/LiveListHorizontal';

import { IFollowingItem } from '~/@types/interfaces';
import { FlatList } from 'react-native-gesture-handler';

const Discover: React.FC = () => {
  const { followingItems, stickyHeaderIndices } = useMemo(() => {
    const followingItems: IFollowingItem[] = [
      { render: () => <Heading>Discover</Heading> },

      { render: () => <LiveListHorizontal /> },

      {
        render: () => <Title>Live Channels We Think You'll Like</Title>,
        isTitle: true,
      },
      { render: () => <LiveListHorizontal /> },

      {
        render: () => <Title>Categories we think you'll like</Title>,
        isTitle: true,
      },
      { render: () => <CategoriesList /> },

      {
        render: () => <Title>Recommended Just Chatting Channels</Title>,
        isTitle: true,
      },
      { render: () => <LiveListHorizontal /> },

      {
        render: () => <Title>All aboard the Hype Train</Title>,
        isTitle: true,
      },
      { render: () => <LiveListHorizontal /> },

      {
        render: () => <Title>Clips we think you'll like</Title>,
        isTitle: true,
      },
      { render: () => <LiveListHorizontal /> },
    ];

    const stickyHeaderIndices: number[] = [];
    followingItems.forEach(
      (item, index) => item.isTitle && stickyHeaderIndices.push(index)
    );

    return {
      followingItems,
      stickyHeaderIndices,
    };
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <FlatList<IFollowingItem>
          data={followingItems}
          renderItem={({ item }) => item.render()}
          keyExtractor={(_, index) => String(index)}
          stickyHeaderIndices={stickyHeaderIndices}
          onRefresh={() => {}}
          refreshing={false}
        />
      </Main>
    </Container>
  );
};

export default Discover;

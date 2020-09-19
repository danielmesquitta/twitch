import React, { useMemo } from 'react';

import { Container, Main } from './styles';

import Header from '~/components/Header';
import Heading from '~/components/Heading';
import Title from '~/components/Title';
import CategoriesList from '~/components/CategoriesList';
import LiveListVertical from '~/components/LiveListVertical';
import ChannelsList from '~/components/ChannelsList';

import { IFollowingItem } from '~/@types/interfaces';
import { FlatList } from 'react-native-gesture-handler';

const Following: React.FC = () => {
  const { followingItems, stickyHeaderIndices } = useMemo(() => {
    const followingItems: IFollowingItem[] = [
      { render: () => <Heading>Following</Heading> },

      { render: () => <Title>Followed Categories</Title>, isTitle: true },
      { render: () => <CategoriesList /> },

      { render: () => <Title>Live Channels</Title>, isTitle: true },
      { render: () => <LiveListVertical /> },

      { render: () => <Title>Continue Watching</Title>, isTitle: true },
      { render: () => <LiveListVertical /> },

      { render: () => <Title>Offline Channels</Title>, isTitle: true },
      { render: () => <ChannelsList /> },
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

export default Following;

import React, { useMemo } from 'react';

import { Container, Main } from './styles';

import Header from '~/components/Header';
import Heading from '~/components/Heading';
import Title from '~/components/Title';
import CategoriesListHorizontal from '~/components/CategoriesListHorizontal';
import LiveListHorizontal from '~/components/LiveListHorizontal';

import { IFlatListDataItem } from '~/@types/interfaces';
import { FlatList } from 'react-native-gesture-handler';

const Discover: React.FC = () => {
  const { discoverItems, stickyHeaderIndices } = useMemo(() => {
    const discoverItems: IFlatListDataItem[] = [
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
      { render: () => <CategoriesListHorizontal /> },

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
    discoverItems.forEach(
      (item, index) => item.isTitle && stickyHeaderIndices.push(index)
    );

    return {
      discoverItems,
      stickyHeaderIndices,
    };
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <FlatList<IFlatListDataItem>
          data={discoverItems}
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

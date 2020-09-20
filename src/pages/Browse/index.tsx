import React, { useMemo } from 'react';

import { Container, Main } from './styles';

import Header from '~/components/Header';
import Heading from '~/components/Heading';
import Nav from '~/components/Nav';
import CategoriesListVertical from '~/components/CategoriesListVertical';

import { IFlatListDataItem } from '~/@types/interfaces';
import { FlatList } from 'react-native-gesture-handler';

const Following: React.FC = () => {
  const { followingItems, stickyHeaderIndices } = useMemo(() => {
    const followingItems: IFlatListDataItem[] = [
      { render: () => <Heading>Browse</Heading> },

      { render: () => <Nav>Categories</Nav>, isTitle: true },
      { render: () => <CategoriesListVertical /> },
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
        <FlatList<IFlatListDataItem>
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

import React, { useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { Container, Main } from './styles';

import Header from '~/components/Header';
import Heading from '~/components/Heading';
import Nav from '~/components/Nav';
import CategoriesListVertical from '~/components/CategoriesListVertical';
import LiveListVertical from '~/components/SingleLiveListVertical';

import { IFlatListDataItem } from '~/@types/interfaces';
import { IStore, IBrowse } from '~/@types/store';

const Following: React.FC = () => {
  const browse = useSelector<IStore, IBrowse>(state => state.browse);

  const { followingItems, stickyHeaderIndices } = useMemo(() => {
    const followingItems: IFlatListDataItem[] = [
      { render: () => <Heading>Browse</Heading> },

      { render: () => <Nav>Categories</Nav>, isTitle: true },
      {
        render: () =>
          browse.content === 'categories' ? (
            <CategoriesListVertical />
          ) : (
            <LiveListVertical />
          ),
      },
    ];

    const stickyHeaderIndices: number[] = [];
    followingItems.forEach(
      (item, index) => item.isTitle && stickyHeaderIndices.push(index)
    );

    return {
      followingItems,
      stickyHeaderIndices,
    };
  }, [browse.content]);

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

import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import colors from '~/styles/colors';

import data from './data';
type IItem = typeof data[0];

export const List = styled(FlatList as new () => FlatList<IItem>)`
  margin-top: -20px;
`;

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const Thumbnail = styled.Image`
  width: 100%;
`;

export const Body = styled.View`
  margin-top: -20px;
  flex: 1;
  overflow: hidden;
`;

export const Main = styled.View`
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${colors.tag};
`;

export const Username = styled.Text`
  color: ${colors.black};
  margin-left: 15px;
  width: 80%;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${colors.black};
`;

export const Category = styled.Text`
  color: ${colors.gray};
`;

export const Tags = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const Tag = styled.Text`
  color: ${colors.black};
  background: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
  font-size: 13px;
`;

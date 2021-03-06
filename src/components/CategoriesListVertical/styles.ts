import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import data from './data';
type IItem = typeof data[0];

export const List = styled(FlatList as new () => FlatList<IItem>)`
  padding: 8px 0 0;
`;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: 14px;
  margin-bottom: 25px;
`;

export const Image = styled.Image`
  background: ${props => props.theme.tag};
  height: 80px;
  width: 60px;
`;

export const Data = styled.View`
  padding-left: 10px;
`;

export const UserName = styled.Text`
  color: ${props => props.theme.black};
  font-size: 16px;
`;

export const Info = styled.Text`
  margin-top: 1px;
  color: ${props => props.theme.gray};
  font-size: 13px;
`;

export const Tags = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const Tag = styled.Text`
  color: ${props => props.theme.black};
  background: ${props => props.theme.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
  font-size: 13px;
`;

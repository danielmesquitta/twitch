import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const List = styled.ScrollView``;

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin: 0 15px 32px 0;
  width: 270px;
  position: relative;
`;

export const Thumbnail = styled.Image`
  width: 100%;
  height: 180px;
`;

export const Body = styled.View`
  margin-left: 11px;
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

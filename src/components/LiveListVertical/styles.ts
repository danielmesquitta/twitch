import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;

  margin: 0 24px 32px 0;
`;

export const Thumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const Body = styled.View`
  margin-left: 11px;
  flex: 1;
`;

export const Main = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.tag};
`;

export const Username = styled.Text`
  color: ${colors.black};
  margin-left: 5px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${colors.black};
`;

export const Category = styled.Text`
  color: ${colors.gray};
`;

export const Tags = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const TagContainer = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-size: 13px;
`;

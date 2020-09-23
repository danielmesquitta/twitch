import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;

export const CategoryItemContainer = styled.TouchableOpacity`
  position: relative;
  margin-right: 10px;
  width: 98px;
`;

export const CategoryItemImage = styled.Image`
  width: 100%;
  height: 130px;
`;

export const CategoryItemName = styled.Text`
  color: ${props => props.theme.black};
  margin-top: 5px;
  max-width: 100%;
  font-weight: bold;
  font-size: 13.5px;
`;

export const CategoryItemStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  background: ${props => props.theme.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const CategoryItemInfo = styled.Text`
  color: ${props => props.theme.gray};
  margin-left: 4px;
  padding-bottom: 1px;
`;

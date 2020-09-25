import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 0px;
`;

export const Avatar = styled.TouchableOpacity`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProfilePhoto = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const OnlineStatus = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.green};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.primary};
`;

export const Icons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
  flex-direction: row;
`;

export const ThemeSlider = styled(Slider)`
  width: 50px;
  transform: scale(1.5);
`;

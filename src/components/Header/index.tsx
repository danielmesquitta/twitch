import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';

import {
  Container,
  Avatar,
  ProfilePhoto,
  OnlineStatus,
  Icons,
  Button,
  ThemeSlider,
} from './styles';
import profilePhoto from '~/assets/profile_photo.png';
import { changeTheme } from '~/store/modules/theme/actions';
import { ITheme, IStore } from '~/@types/store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector<IStore, ITheme>(state => state.theme);

  const sliderRef = useRef<Slider>(null);

  function handleToggleTheme() {
    dispatch(changeTheme(theme.type === 'light' ? 'dark' : 'light'));
  }

  return (
    <Container>
      <Avatar>
        <ProfilePhoto source={profilePhoto} />
        <OnlineStatus />
      </Avatar>

      <Icons>
        <Button onPress={handleToggleTheme}>
          <Feather name="sun" size={26} color={theme.black} />
          <ThemeSlider
            minimumValue={0}
            maximumValue={1}
            value={theme.type === 'light' ? 0 : 1}
            minimumTrackTintColor={theme.black}
            maximumTrackTintColor={theme.purple}
            thumbTintColor={theme.type === 'light' ? theme.gray : theme.purple}
            ref={sliderRef}
            step={1}
            disabled
          />
          <Feather
            name="moon"
            size={26}
            color={theme.type === 'dark' ? theme.purple : theme.black}
          />
        </Button>

        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={theme.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={theme.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={theme.black} />
        </Button>
      </Icons>
    </Container>
  );
};

export default Header;

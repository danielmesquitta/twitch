import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  Avatar,
  ProfilePhoto,
  OnlineStatus,
  Icons,
  Button,
} from './styles';
import profilePhoto from '~/assets/profile_photo.png';
import { changeTheme } from '~/store/modules/theme/actions';
import { ITheme, IStore } from '~/@types/store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector<IStore, ITheme>(state => state.theme);

  function changeThemeColor() {
    dispatch(changeTheme(theme.type === 'light' ? 'dark' : 'light'));
  }

  return (
    <Container>
      <Avatar>
        <ProfilePhoto source={profilePhoto} />
        <OnlineStatus />
      </Avatar>

      <Icons>
        <Button onPress={changeThemeColor}>
          <Feather
            name={theme.type === 'light' ? 'sun' : 'moon'}
            size={26}
            color={theme.purple}
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

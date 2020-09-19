import React from 'react';
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
import colors from '~/styles/colors';
import profilePhoto from '~/assets/profile_photo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <ProfilePhoto source={profilePhoto} />
        <OnlineStatus />
      </Avatar>

      <Icons>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </Icons>
    </Container>
  );
};

export default Header;

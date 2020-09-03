import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { Container, Avatar, OnlineStatus, Icons, Button } from './styles';
import colors from '~/styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
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

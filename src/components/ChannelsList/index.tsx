import React from 'react';

import {
  List,
  Container,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const ChannelsList: React.FC = () => {
  const ChannelsListItem = () => {
    return (
      <Container>
        <LeftSide>
          <Avatar />
          <Column>
            <UserName>rocketseat_oficial</UserName>
            <Info>12 new videos</Info>
          </Column>
        </LeftSide>

        <RightSide>
          <WhiteCircle />
        </RightSide>
      </Container>
    );
  };

  return (
    <List>
      {[0, 1, 2, 3].map(index => (
        <ChannelsListItem key={index} />
      ))}
    </List>
  );
};

export default ChannelsList;

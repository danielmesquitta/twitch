import styled from 'styled-components/native';

import Background from '~/styles/Background';

export const Container = styled(Background)`
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${props => props.theme.purple};
  font-size: 30px;
`;

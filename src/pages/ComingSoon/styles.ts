import styled from 'styled-components/native';

import colors from '~/styles/colors';
import Background from '~/styles/Background';

export const Container = styled(Background)`
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-size: 30px;
`;

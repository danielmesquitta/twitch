import styled from 'styled-components/native';

import { statusBarHeight } from '~/styles/variables';

export default styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.primary};
  padding-top: ${statusBarHeight + 'px'};
`;

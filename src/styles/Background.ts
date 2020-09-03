import styled from 'styled-components/native';

import { statusBarHeight } from '~/styles/variables';
import colors from '~/styles/colors';

export default styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  padding-top: ${statusBarHeight + 'px'};
`;

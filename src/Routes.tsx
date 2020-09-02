import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Following from '~/pages/Following';
import ComingSoon from '~/pages/ComingSoon';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Following" component={Following} />
        <Screen name="Discover" component={ComingSoon} />
        <Screen name="Browse" component={ComingSoon} />
        <Screen name="Esports" component={ComingSoon} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

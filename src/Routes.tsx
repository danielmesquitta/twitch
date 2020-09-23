import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { Navigator, Screen } = createBottomTabNavigator();

import Following from '~/pages/Following';
import Discover from '~/pages/Discover';
import Browse from '~/pages/Browse';
import ComingSoon from '~/pages/ComingSoon';

import { IStore, ITheme } from './@types/store';
import { ThemeProvider } from 'styled-components';

const Routes: React.FC = () => {
  const theme = useSelector<IStore, ITheme>(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={theme.type === 'light' ? 'dark-content' : 'light-content'}
      />

      <NavigationContainer>
        <Navigator
          tabBarOptions={{
            style: {
              height: 60,
              backgroundColor: theme.primary,
              borderTopWidth: 0,
            },
            tabStyle: {
              alignItems: 'center',
              justifyContent: 'center',
            },
            iconStyle: {
              flex: 0,
              width: 20,
              height: 20,
            },
            labelStyle: {
              fontSize: 11,
              marginTop: 5,
            },
            inactiveTintColor: theme.black,
            activeTintColor: theme.purple,
          }}>
          <Screen
            name="Following"
            component={Following}
            options={{
              tabBarIcon: ({ size, focused }) => (
                <Ionicons
                  name="md-heart"
                  size={size}
                  color={focused ? theme.purple : theme.black}
                />
              ),
            }}
          />
          <Screen
            name="Discover"
            component={Discover}
            options={{
              tabBarIcon: ({ size, focused }) => (
                <MaterialCommunityIcons
                  name="compass-outline"
                  size={size}
                  color={focused ? theme.purple : theme.black}
                />
              ),
            }}
          />
          <Screen
            name="Browse"
            component={Browse}
            options={{
              tabBarIcon: ({ size, focused }) => (
                <Ionicons
                  name="md-browsers"
                  size={size}
                  color={focused ? theme.purple : theme.black}
                />
              ),
            }}
          />
          <Screen
            name="Esports"
            component={ComingSoon}
            options={{
              tabBarIcon: ({ size, focused }) => (
                <MaterialCommunityIcons
                  name="trophy-outline"
                  size={size}
                  color={focused ? theme.purple : theme.black}
                />
              ),
            }}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;

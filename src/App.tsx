import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Routes />
    </Provider>
  );
};

export default App;

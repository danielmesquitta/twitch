import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

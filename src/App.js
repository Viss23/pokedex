import React from 'react';
import { Provider} from 'react-redux';

import { HomePage } from './pages';
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;

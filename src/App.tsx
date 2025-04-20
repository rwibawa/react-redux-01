// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './containers/Counter';
import CounterSlice from './containers/CounterSlice';

const App: React.FC = () => (
  <Provider store={store}>
    <Counter />
    <CounterSlice />
  </Provider>
);

export default App;

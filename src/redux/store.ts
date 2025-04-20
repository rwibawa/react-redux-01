// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';
import countersliceReducer from './counterSlice';
import { count } from 'console';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterslice: countersliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

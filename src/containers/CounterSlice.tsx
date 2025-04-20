import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counterslice.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;

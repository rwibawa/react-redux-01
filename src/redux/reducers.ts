// reducers.ts
import { INCREMENT, DECREMENT } from './actionTypes';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: { type: string }): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;

/*
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default counterReducer;
*/

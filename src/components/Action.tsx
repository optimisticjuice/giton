import { useReducer } from 'react';
import { useKey } from './KeyProvider';

type Action = {
  type: 'increment' | 'decrement';
};
type State = {
  count: number;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
   const { keyValue } = useKey();
return (
  <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <div>Key pressed: {keyValue === 'Up' ? 'Up' : keyValue === 'Down' ? 'Down' : keyValue === 'Left' ? 'Left' : keyValue === 'Right' ? 'Right' : "None" }</div> 
    </div>
  );
};
export default Counter;

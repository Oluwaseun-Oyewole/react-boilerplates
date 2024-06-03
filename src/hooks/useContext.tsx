import { useContext } from 'react';
import { AppContext, ContextInitialInterface } from '../context';

const useAppContext = () => {
  const context: ContextInitialInterface = useContext(AppContext);
  const { count, increment, decrement } = context;
  if (!context) return;
  return { count, increment, decrement };
};

export default useAppContext;

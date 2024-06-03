import useAppContext from './useContext';

export const useCounter = () => {
  const contextValues = useAppContext();

  return {
    count: contextValues?.count,
    increment: contextValues?.increment,
    decrement: contextValues?.decrement,
  };
};

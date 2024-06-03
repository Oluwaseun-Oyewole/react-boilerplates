import { PropsWithChildren, createContext, useState } from 'react';

export interface ContextInitialInterface {
  count: number;
  increment: VoidFunction;
  decrement: VoidFunction;
}

export const AppContext = createContext<ContextInitialInterface>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <AppContext.Provider value={{ count, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};

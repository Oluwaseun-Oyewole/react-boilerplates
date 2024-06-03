import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

describe('use counter hook', () => {
  test('should render 0 as the initial value ', () => {
    const { result } = renderHook(useCounter);
    expect(result.current?.count).toBe(0);
  });

  test('should increment count', () => {
    const { result } = renderHook(useCounter);
    // if you are performing a state update
    act(() => result.current.increment);
    expect(result.current.count).toBe(0);
  });
});

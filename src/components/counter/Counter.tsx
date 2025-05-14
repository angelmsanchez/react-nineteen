import { useCountStore } from '../../zustand/counter';

export function Counter() {
  const { count } = useCountStore();
  return <>COUNTER GLOBAL: {count}</>;
}

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function get<TResponse>(endPoint: string): Promise<TResponse> {
  const { data } = await axios.get<TResponse>(`${endPoint}`);
  return data;
}

export function useGet<T>(query: string) {
  return useQuery({
    queryKey: ['useGet', query],
    queryFn: async () => {
      if (query) {
        return get<T>(query);
      }
      return {} as T;
    },
  });
}

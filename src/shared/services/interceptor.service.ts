import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

export function InterceptorService(): void {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return {
        ...config,
        baseURL: 'https://finalspaceapi.com/api/v0/episode/',
        headers: {
          ...(config.headers as Record<string, string>),
        },
      } as InternalAxiosRequestConfig;
    },
    (error: Record<string, unknown>) => error,
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
}

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './components/router/Router';
import { QueryProvider } from './contexts';
import { useEffect } from 'react';
import { InterceptorService } from './shared/services';

export default function App() {
  useEffect(() => {
    InterceptorService();
  }, []);

  return (
    <>
      <BrowserRouter>
        <QueryProvider>
          <Router />
        </QueryProvider>
      </BrowserRouter>
    </>
  );
}

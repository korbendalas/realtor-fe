import { AppProvider } from '@/providers/appProvider';
import { AppRoutes } from '@/routes';
import { useEffect } from 'react';

export function App() {
  return (
    <AppProvider>
      {/*<AppRoutes />*/}
      <div>AppKomponenta</div>
    </AppProvider>
  );
}

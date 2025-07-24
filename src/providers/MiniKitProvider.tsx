'use client';

import { MiniKitProvider } from '@coinbase/minikit';
import { base } from 'wagmi/chains';
import { ReactNode } from 'react';

export function MiniKitContextProvider({ 
  children 
}: { 
  children: ReactNode 
}) {
  const apiKey = process.env.NEXT_PUBLIC_CDP_CLIENT_API_KEY;

  return (
    <MiniKitProvider 
      apiKey={apiKey || ''}
      chain={base}
    >
      {children}
    </MiniKitProvider>
  );
}w 
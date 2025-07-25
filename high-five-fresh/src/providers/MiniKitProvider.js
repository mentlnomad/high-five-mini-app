'use client';

import React, { ReactNode } from 'react';
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'wagmi/chains';

interface MiniKitContextProviderProps {
  children: ReactNode;
}

export function MiniKitContextProvider({ children }: MiniKitContextProviderProps) {
  return (
    <MiniKitProvider 
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: 'auto',
          theme: 'default',
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
        },
      }}
    >
      {children}
    </MiniKitProvider>
  );
}
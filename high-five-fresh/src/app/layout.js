import { MiniKitContextProvider } from '../providers/MiniKitProvider';

export const metadata = {
  title: 'High Five Mini App',
  description: 'Buy a high five for $1 USDC - spread good vibes!',
  openGraph: {
    title: 'High Five Mini App',
    description: 'Buy a high five for $1 USDC - spread good vibes!',
    images: [`${process.env.NEXT_PUBLIC_URL}/high_five_image.png`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}/high_five_image.png`,
    'fc:frame:button:1': 'Launch High Five Mini App',
    'fc:frame:button:1:action': 'launch_frame',
    'fc:frame:button:1:target': process.env.NEXT_PUBLIC_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <MiniKitContextProvider>
          {children}
        </MiniKitContextProvider>
      </body>
    </html>
  );
}
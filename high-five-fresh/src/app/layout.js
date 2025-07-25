import { MiniKitContextProvider } from '../providers/MiniKitProvider';

export const metadata = {
  title: 'High Five Mini App',
  description: 'Buy a high five for $1 USDC - spread good vibes!',
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: `${process.env.NEXT_PUBLIC_URL}/high_five_image.png`,
      button: {
        title: "Launch High Five Mini App",
        action: {
          type: "launch_frame",
          name: "High Five Mini App",
          url: process.env.NEXT_PUBLIC_URL,
          splashImageUrl: `${process.env.NEXT_PUBLIC_URL}/high_five_image.png`,
          splashBackgroundColor: "#FBDC33",
        },
      },
    }),
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
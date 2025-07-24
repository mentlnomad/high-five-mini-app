export const metadata = {
  title: 'High Five Mini App',
  description: 'Buy a high five for $1 USDC - spread good vibes!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}

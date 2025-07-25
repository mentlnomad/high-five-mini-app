export async function GET() {
    const manifest = {
      "name": "High Five Mini App",
      "version": "1.0.0",
      "description": "Buy a high five for $1 USDC - spread good vibes!",
      "icon": "high_five_image.png",
      "splashBackgroundColor": "#FBDC33",
      "button": {
        "title": "Launch High Five Mini App"
      },
      "homeUrl": "https://high-five-mini-app.vercel.app"
    };
    
    return new Response(JSON.stringify(manifest), {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
    });
  }
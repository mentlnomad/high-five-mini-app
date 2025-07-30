'use client';

import React, { useState } from 'react';

const HIGH_FIVE_IMAGE = "/high_five_image.png";

// Simple mock payment for now
const handleMockPayment = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { success: true };
};

export default function HighFiveMiniApp() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePurchase = async () => {
    setIsProcessing(true);
    setPaymentStatus(null);

    try {
      const result = await handleMockPayment();
      setPaymentStatus(result.success ? 'success' : 'error');
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Chicle&family=Chivo+Mono:wght@400&display=swap');
      `}</style>
      
      <div className="bg-white min-h-screen w-full mx-auto relative" style={{ maxWidth: "100vw" }}>
        {/* Header Section */}
        <div 
          style={{ 
            position: "relative",
            width: "100vw",
            height: "246px",
            background: "linear-gradient(181deg, #FBDC33 0.92%, #FFF130 99.03%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0",
            padding: "0 0 32px 0",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw"
          }}
        >
          <div style={{ marginTop: "34px" }}>
            <img src={HIGH_FIVE_IMAGE} alt="High Five" className="w-24 h-24" />
          </div>
          
          <div style={{ marginTop: "24px" }}>
            <h1 
              style={{ 
                color: "#2B52FF",
                textAlign: "center",
                fontFamily: "Chicle, cursive", 
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                margin: "0"
              }}
            >
              Buy a High Five
            </h1>
          </div>
        </div>

        {/* Price Section */}
        <div 
          style={{ 
            position: "relative",
            display: "flex",
            width: "100vw",
            height: "124px",
            padding: "24px 0",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            flexShrink: 0,
            borderTop: "2px solid #2B52FF",
            borderBottom: "2px solid #2B52FF",
            background: "#FFFBCC",
            margin: "0",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw"
          }}
        >
          <div 
            style={{ 
              color: "#2B52FF",
              textAlign: "center",
              fontFamily: "Chicle, cursive",
              fontSize: "32px",
              fontWeight: "400"
            }}
          >
            $1.00 USDC
          </div>
          
          <div 
            style={{ 
              color: "#2B52FF",
              textAlign: "center",
              fontFamily: "Chivo Mono, monospace",
              fontSize: "14px",
              fontWeight: "400"
            }}
          >
            per high five
          </div>
        </div>

        {/* Features Section */}
        <div 
          style={{ 
            position: "relative",
            background: "#FFFEF6",
            paddingTop: "64px",
            paddingBottom: "64px",
            width: "100vw",
            margin: "0",
            display: "flex",
            justifyContent: "center",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw"
          }}
        >
          <div style={{ width: "354px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <h2 style={{ color: "#2B52FF", textAlign: "center", fontFamily: "Chicle, cursive", fontSize: "32px", margin: "0" }}>
              What you Get:
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#2B52FF", textAlign: "center" }}>
                🙌 One virtual high five
              </div>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#2B52FF", textAlign: "center" }}>
                ⚡😊 Instant mood boost
              </div>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#2B52FF", textAlign: "center" }}>
                🌈🤝 Spread good vibes
              </div>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#2B52FF", textAlign: "center" }}>
                🌞🙏 Make someone's day
              </div>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        {paymentStatus === 'success' && (
          <div className="w-full px-8 bg-white" style={{ paddingTop: "16px", paddingBottom: "16px" }}>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="text-green-800 font-bold text-xl mb-2">Payment Successful! 🎉</div>
              <div className="text-green-600 text-base">High five sent! Thanks for spreading good vibes! 🙌</div>
            </div>
          </div>
        )}

        {paymentStatus === 'error' && (
          <div className="w-full px-8 bg-white" style={{ paddingTop: "16px", paddingBottom: "16px" }}>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <div className="text-red-800 font-bold text-xl mb-2">Payment Failed ❌</div>
              <div className="text-red-600 text-base">Please try again.</div>
            </div>
          </div>
        )}

        {/* Buy Button */}
        <div className="w-full flex justify-center items-center bg-white" style={{ paddingTop: "24px", paddingBottom: "24px", minHeight: "144px", textAlign: "center" }}>
          <div
            onClick={handlePurchase}
            style={{ 
              display: "flex",
              width: "354px",
              height: "96px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              border: "2px solid #2B52FF",
              background: "linear-gradient(181deg, #FBDC33 0.92%, #FFF130 99.03%)",
              boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
              fontFamily: "Chicle, cursive",
              fontSize: "24px",
              fontWeight: "400",
              color: "#2B52FF",
              cursor: "pointer",
              textAlign: "center"
            }}
          >
            {isProcessing ? "Processing..." : "Buy Now"}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-8 text-center bg-white" style={{ paddingBottom: "32px" }}>
          <div style={{ color: "#2B52FF", fontFamily: "Chivo Mono, monospace", fontSize: "10px", lineHeight: "16px", textAlign: "center" }}>
            <p style={{ margin: "0" }}>Powered by Base Pay - No Fees!</p>
            <p style={{ margin: "0" }}>Payments processed as USDC on Base Network</p>
            <p style={{ margin: "0" }}>Secure and instant transactions</p>
          </div>
        </div>
      </div>
    </>
  );
}
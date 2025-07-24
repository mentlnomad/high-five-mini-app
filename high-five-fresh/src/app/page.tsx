'use client';

import React, { useState } from 'react';

// Use your actual high five image from public folder
const HIGH_FIVE_IMAGE = "/high_five_image.png";

// Mock MiniKit with proper types
interface PaymentPayload {
  reference: string;
  to: string;
  tokens: Array<{ symbol: string; token_amount: string }>;
  description: string;
}

interface PaymentResult {
  finalPayload: {
    status: string;
    transactionHash: string;
    reference: string;
    amount: string;
    to: string;
  };
}

const MiniKit = {
  isInstalled: (): boolean => {
    return typeof window !== 'undefined' && window.location.hostname !== 'localhost';
  },
  commandsAsync: {
    pay: async (payload: PaymentPayload): Promise<PaymentResult> => {
      console.log('MiniKit payment triggered:', payload);
      await new Promise(resolve => setTimeout(resolve, 3000));
      return {
        finalPayload: {
          status: 'success',
          transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
          reference: payload.reference,
          amount: payload.tokens[0].token_amount,
          to: payload.to
        }
      };
    }
  }
};

const Tokens = { USDC: 'USDC' };
const tokenToDecimals = (amount: number): number => amount * 1000000;

export default function HighFiveMiniApp() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'error' | null>(null);

  const handlePurchase = async (): Promise<void> => {
    if (!MiniKit.isInstalled()) {
      alert('Please open this app in Base App to make payments');
      return;
    }

    setIsProcessing(true);
    setPaymentStatus(null);

    try {
      const referenceId = `highfive_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const paymentPayload: PaymentPayload = {
        reference: referenceId,
        to: process.env.NEXT_PUBLIC_MERCHANT_WALLET_ADDRESS || "0x742d35cc6634C0532925a3b8D2a87E2BF8b3c4A1",
        tokens: [{ symbol: Tokens.USDC, token_amount: tokenToDecimals(1).toString() }],
        description: "High Five - Spread good vibes! 🙌",
      };

      const { finalPayload } = await MiniKit.commandsAsync.pay(paymentPayload);
      
      if (finalPayload.status === 'success') {
        setPaymentStatus('success');
      } else {
        setPaymentStatus('error');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Add Google Fonts */}
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
            padding: "0",
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
              className="text-[#CA861C] text-center"
              style={{ 
                color: "#CA861C",
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
            borderTop: "2px solid #CA861C",
            borderBottom: "2px solid #CA861C",
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
              overflow: "hidden",
              color: "#CA861C",
              textAlign: "center",
              textOverflow: "ellipsis",
              fontFamily: "Chicle, cursive",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal"
            }}
          >
            $1.00 USDC
          </div>
          
          <div 
            style={{ 
              color: "#CA861C",
              textAlign: "center",
              fontFamily: "Chivo Mono, monospace",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px"
            }}
          >
            per high five
          </div>
        </div>

        {/* Body Section */}
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
          <div
            style={{ 
              width: "354px",
              height: "183px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px"
            }}
          >
            <h2 
              style={{ 
                color: "#CA861C",
                textAlign: "center",
                fontFamily: "Chicle, cursive",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                margin: "0"
              }}
            >
              What you Get:
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#CA861C", textAlign: "center" }}>
                🙌 One virtual high five
              </div>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#CA861C", textAlign: "center" }}>
                ⚡😊 Instant mood boost
              </div>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#CA861C", textAlign: "center" }}>
                🌈🤝 Spread good vibes
              </div>
              <div style={{ fontFamily: "Chivo Mono, monospace", fontSize: "15px", lineHeight: "32px", color: "#CA861C", textAlign: "center" }}>
                🌞🙏 Make someone's day
              </div>
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {paymentStatus === 'success' && (
          <div className="w-full px-8 bg-white" style={{ paddingTop: "16px", paddingBottom: "16px" }}>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="text-green-800 font-bold text-xl mb-2">Payment Successful! 🎉</div>
              <div className="text-green-600 text-base mb-2">Your $1 USDC payment has been processed!</div>
              <div className="text-green-600 text-sm">High five sent! Thanks for spreading good vibes! 🙌</div>
            </div>
          </div>
        )}

        {paymentStatus === 'error' && (
          <div className="w-full px-8 bg-white" style={{ paddingTop: "16px", paddingBottom: "16px" }}>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <div className="text-red-800 font-bold text-xl mb-2">Payment Failed ❌</div>
              <div className="text-red-600 text-base mb-2">Unable to process your payment.</div>
              <div className="text-red-600 text-sm">Please check your USDC balance and try again.</div>
            </div>
          </div>
        )}

        {/* Buy Button */}
        <div className="w-full flex justify-center bg-white" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <button
            onClick={handlePurchase}
            disabled={isProcessing}
            className="transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{ 
              display: "flex",
              width: "354px",
              height: "96px",
              padding: "24px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              flexShrink: 0,
              borderRadius: "8px",
              border: "2px solid #CA861C",
              background: "linear-gradient(181deg, #FBDC33 0.92%, #FFF130 99.03%)",
              boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
              fontFamily: "Chicle, cursive",
              fontSize: "24px",
              fontWeight: "400"
            }}
          >
            <span className="text-[#CA861C]">
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#CA861C] border-t-transparent rounded-full animate-spin mr-3"></div>
                  Processing...
                </div>
              ) : (
                'Buy Now'
              )}
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="w-full px-8 text-center bg-white" style={{ paddingBottom: "32px" }}>
          <div 
            style={{ 
              color: "#CA861C",
              textAlign: "center",
              fontFamily: "Chivo Mono, monospace",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16px"
            }}
          >
            <p style={{ margin: "0" }}>Powered by Base Pay - No Fees!</p>
            <p style={{ margin: "0" }}>Payments processed as USDC on Base Network</p>
            <p style={{ margin: "0" }}>Secure and instant transactions</p>
          </div>
        </div>
      </div>
    </>
  );
}

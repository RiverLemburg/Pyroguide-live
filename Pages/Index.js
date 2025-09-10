import React from 'react';

export default function Home() {
  async function handleBuy(kind) {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: kind })
      });
      const data = await res.json();
      if (data.url) window.location = data.url;
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>PyroGuide</h1>
      <p>Wood burning made easy — with starter kits, templates, and wedding blanks.</p>
      <button onClick={() => handleBuy('starter')} style={{ padding: '8px 12px' }}>
        Buy Starter Kit — $69
      </button>
    </div>
  );
}

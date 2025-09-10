export default function Success() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>✅ Thanks for your order!</h1>
      <p>Your payment went through. You’ll receive a Stripe receipt by email.</p>
    </div>
  );
}

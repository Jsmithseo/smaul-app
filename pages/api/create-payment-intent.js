// pages/api/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { amount, isMonthly } = req.body;

      // Convert amount to the lowest currency unit (e.g., cents for USD)
      const amountInCents = Math.round(amount * 100);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
        metadata: { isMonthly },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

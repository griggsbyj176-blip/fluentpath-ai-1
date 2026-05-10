import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST() {
  try {
    console.log("PRICE ID:", process.env.STRIPE_AI_COACH_PRICE_ID);
    console.log("SECRET KEY:", process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_AI_COACH_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("STRIPE_CHECKOUT_ERROR:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
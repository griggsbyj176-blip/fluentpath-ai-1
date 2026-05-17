import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST() {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "subscription",

      line_items: [
        {
          price: "price_1TSR8TC4qFO2g0NbZY2Jmlzw",
          quantity: 1,
        },
      ],

      success_url:
        "https://fluentpath-ai-1-gk92.vercel.app/success",

      cancel_url:
        "https://fluentpath-ai-1-gk92.vercel.app/cancel",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

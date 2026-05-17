import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
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
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Stripe checkout failed" },
      { status: 500 }
    );
  }
}

export const plans = {
  free: { name: "Free", price: "$0", features: ["5 AI tutor messages/day", "Basic Spanish lessons", "No hearts or punishment"] },
  coach: { name: "AI Coach", price: "$12/mo", priceIdEnv: "STRIPE_AI_COACH_PRICE_ID", features: ["Unlimited AI tutor chat", "Personalized lesson plan", "Conversation roleplay", "Saved learning history"] },
  pro: { name: "Fluency Pro", price: "$29/mo", priceIdEnv: "STRIPE_FLUENCY_PRO_PRICE_ID", features: ["Voice practice", "Career/travel roleplays", "Weekly fluency report", "Advanced progress analytics"] },
};

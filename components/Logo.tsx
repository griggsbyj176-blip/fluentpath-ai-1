type Size = "sm" | "md" | "lg";

const iconSizes: Record<Size, number> = { sm: 24, md: 32, lg: 40 };
const textSizes: Record<Size, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function Logo({ size = "md" }: { size?: Size }) {
  const px = iconSizes[size];

  return (
    <div className="flex items-center gap-2.5" aria-label="FluentPath AI logo">
      <svg
        width={px}
        height={px}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fp-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#fp-grad)" />
        <circle cx="7" cy="20" r="2" fill="white" />
        <path
          d="M9 20 Q16 8 23 16"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 13 L23 16 L20 19"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className={`${textSizes[size]} font-bold tracking-tight`}>
        <span className="text-white">FluentPath</span>
        <span className="text-cyan-400"> AI</span>
      </span>
    </div>
  );
}

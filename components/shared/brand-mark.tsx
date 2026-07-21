type BrandMarkProps = {
  size?: number;
};

export function BrandMark({ size = 32 }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 3.5 26 8.75v7.42c0 6.04-4.07 10.07-10 12.33-5.93-2.26-10-6.29-10-12.33V8.75L16 3.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M11.25 15.75h9.5M16 11v9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

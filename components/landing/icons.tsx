import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
}

export function CheckIcon(props: IconProps) {
  return <Icon {...props}><path d="m5 12 4.5 4.5L19 7" /></Icon>;
}

export function CompassIcon(props: IconProps) {
  return <Icon {...props}><circle cx="12" cy="12" r="8.5" /><path d="m15.5 8.5-2.1 4.8-4.9 2.2 2.1-4.8 4.9-2.2Z" /></Icon>;
}

export function LensIcon(props: IconProps) {
  return <Icon {...props}><circle cx="11" cy="11" r="5.5" /><path d="m15.2 15.2 4.3 4.3" /></Icon>;
}

export function ScaleIcon(props: IconProps) {
  return <Icon {...props}><path d="M12 4v15M7 6h10M5 9l-2.5 5h5L5 9ZM19 9l-2.5 5h5L19 9ZM8 20h8" /></Icon>;
}

export function SparkIcon(props: IconProps) {
  return <Icon {...props}><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" /></Icon>;
}

interface Props {
  className?: string;
}

export default function SketchLine({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1200 8"
      className={`pointer-events-none select-none w-full ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 4 Q150 2 300 4.5 T600 3.5 T900 4.2 T1200 3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  );
}

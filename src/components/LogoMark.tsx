interface LogoMarkProps {
  size?: number
  className?: string
}

export default function LogoMark({ size = 28, className = '' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 220 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M 14 202 L 92 20 C 98 7 114 7 121 20 L 126 33 C 121 23 111 23 106 33 L 54 202 Z"
        fill="currentColor"
      />
      <path
        d="M 118 10 L 208 202 L 164 202 L 118 46 Z"
        fill="currentColor"
      />
    </svg>
  )
}

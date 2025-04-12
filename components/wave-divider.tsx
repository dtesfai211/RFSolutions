interface WaveDividerProps {
  position: "top" | "bottom"
  color?: string
  opacity?: number
  height?: number
}

export default function WaveDivider({ position, color = "#0284c7", opacity = 0.1, height = 120 }: WaveDividerProps) {
  return (
    <div className={`absolute ${position}-0 left-0 w-full overflow-hidden`} style={{ height: `${height}px` }}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ transform: position === "top" ? "rotate(180deg)" : "none" }}
      >
        <path
          fill={color}
          fillOpacity={opacity}
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

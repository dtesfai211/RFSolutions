// components/riverflow-logo.tsx
import Link from "next/link"

export default function RiverflowLogo({ className = "" }: { className?: string }) {
  return (
    
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-riverflow-600">RIVERFLOW</div>
        <div className="text-xs font-medium text-riverflow-600">SOLUTIONS FZ-LLC</div>
        <div className="w-full h-1 mt-1">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="#0284c7" strokeWidth="3" />
          </svg>
        </div>
      </div>
    
  )
}

interface ParQLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "light" | "dark"
}

export function ParQLogo({ className = "", size = "md", variant = "dark" }: ParQLogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl",
  }

  const colors = {
    light: "text-background",
    dark: "text-foreground",
  }

  return (
    <div className={`font-bold tracking-tight ${sizes[size]} ${colors[variant]} ${className}`}>
      <span>Par</span>
      <span className="relative">
        Q
        {/* The distinctive Q tail */}
        <span 
          className="absolute -bottom-0.5 right-0 w-2 h-0.5 bg-current rounded-full transform rotate-45 origin-left"
          style={{ 
            transform: 'translateX(2px) rotate(35deg)',
          }}
        />
      </span>
    </div>
  )
}

export function ParQLogoFull({ 
  className = "", 
  size = "md", 
  variant = "dark",
  showTagline = true 
}: ParQLogoProps & { showTagline?: boolean }) {
  const sizes = {
    sm: { logo: "text-lg", tagline: "text-[8px]" },
    md: { logo: "text-xl", tagline: "text-[10px]" },
    lg: { logo: "text-2xl", tagline: "text-xs" },
    xl: { logo: "text-4xl", tagline: "text-sm" },
  }

  const colors = {
    light: "text-background",
    dark: "text-foreground",
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`font-bold tracking-tight ${sizes[size].logo} ${colors[variant]}`}>
        <span>Par</span>
        <span className="relative">
          Q
          <span 
            className="absolute -bottom-0.5 right-0 w-1.5 h-0.5 bg-current rounded-full"
            style={{ 
              transform: 'translateX(1px) rotate(35deg)',
            }}
          />
        </span>
      </div>
      {showTagline && (
        <span className={`uppercase tracking-[0.15em] text-primary ${sizes[size].tagline}`}>
          It is more than just parking
        </span>
      )}
    </div>
  )
}

import React from 'react'

/**
 * Subtle typing indicator with three animated dots
 * Enterprise-appropriate - minimal and clean
 */
export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-1 py-2">
      <div
        className="w-2 h-2 rounded-full bg-muted-foreground"
        style={{
          animation: 'pulse 1.4s infinite',
          animationDelay: '0s',
        }}
      />
      <div
        className="w-2 h-2 rounded-full bg-muted-foreground"
        style={{
          animation: 'pulse 1.4s infinite',
          animationDelay: '0.2s',
        }}
      />
      <div
        className="w-2 h-2 rounded-full bg-muted-foreground"
        style={{
          animation: 'pulse 1.4s infinite',
          animationDelay: '0.4s',
        }}
      />
      <style>{`
        @keyframes pulse {
          0%, 60%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  )
}

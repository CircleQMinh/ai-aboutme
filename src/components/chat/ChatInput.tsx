'use client'

import React, { useRef, useEffect } from 'react'

interface ChatInputProps {
  input: string
  onInputChange: (value: string) => void
  onSendMessage: () => void
  disabled?: boolean
}


export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  onInputChange,
  onSendMessage,
  disabled = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-expand textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }, [input])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send on Enter without Shift
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !disabled) {
        onSendMessage()
      }
    }
    // Shift+Enter creates newline (default behavior)
  }

  return (
    <div className="border-t border-border bg-background p-4">
      <div className="flex gap-3 max-w-2xl mx-auto">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... (Shift+Enter for newline)"
          disabled={disabled}
          className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
          rows={1}
          style={{ maxHeight: '120px' }}
        />
        <button
          onClick={onSendMessage}
          disabled={!input.trim() || disabled}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  )
}

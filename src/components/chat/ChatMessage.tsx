'use client'

import React from 'react'
import type { Message } from '../../shared/types'

interface ChatMessageProps {
  message: Message
}

/**
 * Single chat message bubble
 * - User messages aligned right with primary color
 * - Assistant messages aligned left with muted color
 * - Smooth fade-in animation
 */
export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user'

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-in fade-in duration-300`}
      style={{ animationFillMode: 'both' }}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser // display based on role
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground border border-border'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <span className="text-xs opacity-70 block mt-1">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  )
}

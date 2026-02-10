'use client'

import React, { useState, useRef, useEffect } from 'react'
import type { Message } from '../../shared/types'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { TypingIndicator } from './TypingIndicator'
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks/hooks'
import { selectChatMessages } from '../../lib/redux/selectors/chatSelector'
import { setMessages } from '../../lib/redux/slices/chatSlice'
import { useSendMessageMutation } from '../../lib/redux/api/chatApi'


export const ChatPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(selectChatMessages) 
  const [sendMessage] = useSendMessageMutation();

  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: input,
    }

    dispatch(setMessages(userMessage))
    setInput('')
    setIsLoading(true)

    // Simulate backend delay (2 seconds as specified)
    // await new Promise((resolve) => setTimeout(resolve, 2000))

    const response = await sendMessage(input).unwrap();

   

    // Add assistant response
    const assistantMessage: Message = {
      id: `msg-${Date.now() + 1}`,
      role: 'assistant',
      content: response,
    }

    dispatch(setMessages(assistantMessage))
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-auto bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold text-foreground">Chat Assistant</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Ask anything about Minh<br></br>
            Send a message to start the conversation
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-6 py-4"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <p className="text-muted-foreground mb-2">No messages yet</p>
                <p className="text-sm text-muted-foreground">
                  Start by typing a message below
                </p>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted border border-border rounded-lg px-4 py-2">
                <TypingIndicator />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <ChatInput
        input={input}
        onInputChange={setInput}
        onSendMessage={handleSendMessage}
        disabled={isLoading}
      />
    </div>
  )
}

"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { COLORS } from '@/lib/colors';
import Navbar from '@/components/Navbar';

interface Message {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: number;
}

const ChatPage = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! Welcome to Hello Solar! How can I help you with your solar energy needs today?",
      isFromUser: false,
      timestamp: Date.now(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sendMessage = async () => {
    if (text.trim().length === 0) return;
    
    const userMessageText = text.trim();

    const newMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      isFromUser: true,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setText("");
    setIsTyping(true);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessageText })
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer ?? "Sorry, I couldn't find an answer.",
        isFromUser: false,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Something went wrong. Please try again.",
          isFromUser: false,
          timestamp: Date.now(),
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div 
        className="text-white py-4"
        style={{ backgroundColor: COLORS.primary }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Bot className="w-6 h-6" />
              Hello Solar Assistant
            </h1>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="h-[calc(100vh-220px)] min-h-[500px] shadow-lg">
          <CardHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" style={{ color: COLORS.primary }} />
                <span className="font-semibold">Solar Assistant</span>
              </div>
              <span 
                className="text-xs px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: COLORS.success, 
                  color: COLORS.textOnPrimary 
                }}
              >
                Online
              </span>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 h-[calc(100%-65px)] flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[80%] ${message.isFromUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0 mx-2">
                      {message.isFromUser ? (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ 
                            backgroundColor: COLORS.primary, 
                            color: COLORS.textOnPrimary 
                          }}
                        >
                          <User className="w-4 h-4" />
                        </div>
                      ) : (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: COLORS.surfaceVariant }}
                        >
                          <Bot className="w-4 h-4" style={{ color: COLORS.primary }} />
                        </div>
                      )}
                    </div>
                    
                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-2 rounded-2xl text-sm max-w-full ${
                        message.isFromUser ? 'rounded-br-sm' : 'rounded-bl-sm'
                      }`}
                      style={{
                        backgroundColor: message.isFromUser ? COLORS.primary : COLORS.surface,
                        color: message.isFromUser ? COLORS.textOnPrimary : COLORS.textPrimary,
                        border: message.isFromUser ? 'none' : `1px solid ${COLORS.border}`,
                      }}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                      <p
                        className="text-xs mt-1 opacity-70"
                        style={{ 
                          color: message.isFromUser ? COLORS.textOnPrimary : COLORS.gray 
                        }}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%]">
                    <div className="flex-shrink-0 mx-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: COLORS.surfaceVariant }}
                      >
                        <Bot className="w-4 h-4" style={{ color: COLORS.primary }} />
                      </div>
                    </div>
                    <div
                      className="px-4 py-3 rounded-2xl rounded-bl-sm"
                      style={{ 
                        backgroundColor: COLORS.surface,
                        border: `1px solid ${COLORS.border}`
                      }}
                    >
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: COLORS.gray }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: COLORS.gray, animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: COLORS.gray, animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t" style={{ borderColor: COLORS.border }}>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                />
                <Button
                  onClick={sendMessage}
                  disabled={text.trim().length === 0 || isTyping}
                  size="lg"
                  style={{
                    backgroundColor: COLORS.primary,
                    color: COLORS.textOnPrimary,
                  }}
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatPage;


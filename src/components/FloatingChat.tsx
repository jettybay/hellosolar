"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { COLORS } from "@/lib/colors";

interface Message {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: number;
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! Welcome to Hello Solar! How can I help you with your solar energy needs today?",
      isFromUser: false,
      timestamp: Date.now(),
    }
  ]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sendMessage = async () => {
    if (text.trim().length === 0) return;

    const userMessageText = text.trim();

    const newMessage = {
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

      const botMessage = {
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="mb-4 w-80 h-96 shadow-2xl border-0 absolute bottom-16 right-0">
          <CardHeader className="pb-3" style={{ backgroundColor: COLORS.primary, color: COLORS.textOnPrimary }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <CardTitle className="text-sm font-semibold">
                  Hello Solar Assistant
                </CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="secondary" 
                  className="text-xs"
                  style={{ backgroundColor: COLORS.success, color: COLORS.textOnPrimary }}
                >
                  Online
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0 hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 h-80 flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-xs ${message.isFromUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="flex-shrink-0 mx-1">
                      {message.isFromUser ? (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
                          style={{ backgroundColor: COLORS.primary, color: COLORS.textOnPrimary }}
                        >
                          <User className="w-3 h-3" />
                        </div>
                      ) : (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: COLORS.surfaceVariant }}
                        >
                          <Bot className="w-3 h-3" style={{ color: COLORS.primary }} />
                        </div>
                      )}
                    </div>
                    
                    <div
                      className={`px-3 py-2 rounded-2xl text-xs max-w-xs ${
                        message.isFromUser ? 'rounded-br-sm' : 'rounded-bl-sm'
                      }`}
                      style={{
                        backgroundColor: message.isFromUser ? COLORS.primary : COLORS.surface,
                        color: message.isFromUser ? COLORS.textOnPrimary : COLORS.textPrimary,
                        border: message.isFromUser ? 'none' : `1px solid ${COLORS.border}`,
                      }}
                    >
                      <p className="text-xs whitespace-pre-wrap">{message.text}</p>
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
                  <div className="flex max-w-xs">
                    <div className="flex-shrink-0 mx-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: COLORS.surfaceVariant }}
                      >
                        <Bot className="w-3 h-3" style={{ color: COLORS.primary }} />
                      </div>
                    </div>
                    <div
                      className="px-3 py-2 rounded-2xl rounded-bl-sm"
                      style={{ 
                        backgroundColor: COLORS.surface,
                        border: `1px solid ${COLORS.border}`
                      }}
                    >
                      <div className="flex space-x-1">
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{ backgroundColor: COLORS.gray }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{ backgroundColor: COLORS.gray, animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
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
            <div className="p-3 border-t" style={{ borderColor: COLORS.grayMedium }}>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-full text-xs focus:outline-none resize-none"
                  style={{
                    backgroundColor: COLORS.surfaceVariant,
                    color: COLORS.textPrimary,
                    border: "none",
                    minHeight: "32px",
                  }}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                />
                <Button
                  onClick={sendMessage}
                  disabled={text.trim().length === 0 || isTyping}
                  size="sm"
                  className="w-8 h-8 rounded-full p-0"
                  style={{
                    backgroundColor: text.trim().length > 0 && !isTyping ? COLORS.primary : COLORS.grayMedium,
                    color: text.trim().length > 0 && !isTyping ? COLORS.textOnPrimary : COLORS.gray,
                  }}
                >
                  {isTyping ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <Send className="w-3 h-3" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: COLORS.primary,
          color: COLORS.textOnPrimary,
        }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
}


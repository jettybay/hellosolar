"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
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
      id: "1",
      text: "Hello! Welcome to Hello Solar! How can I help you with your solar energy needs today?",
      isFromUser: false,
      timestamp: Date.now() - 300000,
    }
  ]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (text.trim().length === 0) return;

    const newMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isFromUser: true,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setText("");

    // Simulate bot typing
    setIsTyping(true);

    // Simulate bot response after 1-3 seconds
    setTimeout(() => {
      setIsTyping(false);
      
      const responses = [
        "I'd be happy to help you with that! Let me check our solar solutions and services.",
        "I can help you get started with solar energy. What's your energy consumption like?",
        "That's great! Let me connect you with our solar experts.",
        "Let me find that information for you.",
        "Sure! Here are some benefits of switching to solar energy.",
        "I can assist you with solar installation. What type of property are you looking to install solar on?",
        "Our platform offers various solar solutions. Would you like me to guide you through them?",
        "Absolutely! I can help you calculate potential savings with solar.",
        "Let me connect you with one of our solar consultants for personalized advice.",
        "I can provide you with solar information and pricing. What's your location?",
        "That's interesting! Can you tell me more about your energy needs?",
        "I can help you with solar financing options. What's your budget range?",
        "Let me check the latest solar incentives for your area.",
        "I can assist you in creating a solar plan. What are your main goals for going solar?",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isFromUser: false,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, Math.random() * 2000 + 1000);
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="mb-4 w-80 h-96 shadow-2xl border-0">
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
                          <Bot className="w-3 h-3" />
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
                      }}
                    >
                      <p className="text-xs">{message.text}</p>
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
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex max-w-xs">
                    <div className="flex-shrink-0 mx-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: COLORS.surfaceVariant }}
                      >
                        <Bot className="w-3 h-3" />
                      </div>
                    </div>
                    <div
                      className="px-3 py-2 rounded-2xl rounded-bl-sm"
                      style={{ backgroundColor: COLORS.surface }}
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
            </div>

            {/* Input Area */}
            <div className="p-3 border-t" style={{ borderColor: COLORS.grayMedium }}>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-3 py-2 rounded-full text-xs focus:outline-none resize-none"
                    style={{
                      backgroundColor: COLORS.surfaceVariant,
                      color: COLORS.textPrimary,
                      border: "none",
                      minHeight: "32px",
                    }}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <Button
                  onClick={sendMessage}
                  disabled={text.trim().length === 0}
                  size="sm"
                  className="w-8 h-8 rounded-full p-0"
                  style={{
                    backgroundColor: text.trim().length > 0 ? COLORS.primary : COLORS.grayMedium,
                    color: text.trim().length > 0 ? COLORS.textOnPrimary : COLORS.gray,
                  }}
                >
                  <Send className="w-3 h-3" />
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

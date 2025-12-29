"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { COLORS } from "@/lib/colors";

interface Message {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: number;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial bot greeting messages
    const initialMessages = [
      {
        id: "1",
        text: "Hello! Welcome to our Hello Solar! I'm here to assist you with your solar energy needs. What would you like to know?",
        isFromUser: false,
        timestamp: Date.now() - 300000,
      }
    
    ];
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        "I'd be happy to help you with that! Let me check our available solar solutions and services.",
        "I can help you get started on going solar. What type of property are you looking to install solar on?",
        "That's great!",
        "Let me find that information for you.",
        "Sure! Here are some tips and benefits of switching to solar energy.",
        "I can assist you with solar installation. What specific questions do you have?",
        "Our platform offers various solar resources. Would you like me to guide you through them?",
        "Absolutely! I can help you analyze potential solar savings. What are your current energy costs?",
        "Let me connect you with one of our solar experts for personalized advice.",
        "I can provide you with solar information for your area. Which location are you interested in?",
        "That's interesting! Can you tell me more about your energy needs?",
        "I can help you with solar financing. What's your budget range for going solar?",
        "Let me check the latest solar incentives available in your area.",
        "I can assist you in creating a solar plan. What are your main goals for switching to solar?",
        
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isFromUser: false,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds
  };


  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderMessage = (message: Message) => (
    <div
      key={message.id}
      className={`flex mb-4 ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex max-w-xs lg:max-w-md ${message.isFromUser ? 'flex-row-reverse' : 'flex-row'}`}>

        {/* Avatar */}
        <div className="flex-shrink-0 mx-2">
          {message.isFromUser ? (
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ backgroundColor: COLORS.primary, color: COLORS.textOnPrimary }}
            >
              U
            </div>
          ) : (
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: COLORS.surfaceVariant }}
            >
              <span className="text-sm">☀️</span>
            </div>
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`px-4 py-2 rounded-2xl ${
            message.isFromUser
              ? 'rounded-br-sm'
              : 'rounded-bl-sm'
          }`}
          style={{
            backgroundColor: message.isFromUser ? COLORS.primary : COLORS.surface,
            color: message.isFromUser ? COLORS.textOnPrimary : COLORS.textPrimary,
          }}
        >
          <p className="text-sm">{message.text}</p>
          <p
            className="text-xs mt-1 opacity-70"
            style={{ color: message.isFromUser ? COLORS.textOnPrimary : COLORS.gray }}
          >
            {formatTime(message.timestamp)}
          </p>
        </div>
      </div>
    </div>
  );

  const renderTypingIndicator = () => (
    <div className="flex justify-start mb-4">
      <div className="flex max-w-xs lg:max-w-md">

        <div className="flex-shrink-0 mx-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: COLORS.surfaceVariant }}
          >
            <span className="text-sm">☀️</span>
          </div>
        </div>
        <div
          className="px-4 py-2 rounded-2xl rounded-bl-sm"
          style={{ backgroundColor: COLORS.surface }}
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
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.background }}>
      {/* Header */}
      <header className="shadow-sm p-4" style={{ backgroundColor: COLORS.surface }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <ArrowLeft className="w-6 h-6" style={{ color: COLORS.textPrimary }} />
            </Link>
            <div>
              <h1 className="text-lg font-bold" style={{ color: COLORS.textPrimary }}>
                Hello Solar Assistant
              </h1>
              <p className="text-sm" style={{ color: COLORS.success }}>
                Online
              </p>
            </div>
          </div>
          {/* <button className="p-2">
            <span className="text-xl">⋯</span>
          </button> */}
        </div>
      </header>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(renderMessage)}
        {isTyping && renderTypingIndicator()}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.grayMedium }}>
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
              className="w-full px-4 py-2 rounded-full resize-none focus:outline-none"
              style={{
                backgroundColor: COLORS.surfaceVariant,
                color: COLORS.textPrimary,
                border: "none",
                minHeight: "40px",
                maxHeight: "120px",
              }}
              rows={1}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={text.trim().length === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{
              backgroundColor: text.trim().length > 0 ? COLORS.primary : COLORS.grayMedium,
              color: text.trim().length > 0 ? COLORS.textOnPrimary : COLORS.gray,
            }}
          >
            <span className="text-lg">➤</span>
          </button>
        </div>
      </div>
    </div>
  );
}

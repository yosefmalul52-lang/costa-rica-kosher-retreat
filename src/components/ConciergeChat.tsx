import React from "react";
import { ChatMessage } from "../types";
import { MessageSquare, Send, Sparkles, AlertCircle, HelpCircle } from "lucide-react";

interface ConciergeChatProps {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const QUICK_SUGGESTIONS = [
  "What are your strict Kashrut standards?",
  "Tell me about the Panorama Villa amenities.",
  "Describe the Shabbat atmosphere at Altura.",
  "What is the mountain weather like in Cartago?",
  "Are there custom tours to the Irazú Volcano?"
];

export default function ConciergeChat({ chatHistory, setChatHistory }: ConciergeChatProps) {
  const [userInput, setUserInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Initialize with a welcome message if history is empty
  React.useEffect(() => {
    if (chatHistory.length === 0) {
      setChatHistory([
        {
          sender: "concierge",
          text: `Shalom and welcome. I am "The Sanctuary Concierge," your personal luxury hospitality advisor. 

I am at your absolute service to coordinate your Glatt Kosher parameters, custom volcano excursions, and spiritual sanctuary requests here in the crisp, beautiful mountains of Cartago, Costa Rica. 

How may I custom-tailor your luxury escape today? Feel free to ask about our rooms, dining certification, Shabbat schedules, or local day trips.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [chatHistory, setChatHistory]);

  // Scroll to bottom on updates
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const currentTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Append User message
    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      timestamp: currentTimestamp
    };
    
    setChatHistory(prev => [...prev, userMsg]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory.map(h => ({ sender: h.sender, text: h.text }))
        })
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      
      const conciergeMsg: ChatMessage = {
        sender: "concierge",
        text: data.response || "I am here to assist you. Please let me know how I can help.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, conciergeMsg]);
    } catch (error) {
      console.error("Concierge Chat API error:", error);
      
      const errorMsg: ChatMessage = {
        sender: "concierge",
        text: "I apologize, I encountered a brief connection error with the sanctuary desk. Our Glatt Kosher retreat is fully open, and we would be delighted to assist you directly via our retreat inquiry form! Please submit your request there.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(userInput);
  };

  return (
    <div className="py-24 max-w-4xl mx-auto px-4 bg-surface select-text min-h-screen flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest font-semibold">Real-time Assistance</span>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-3">Concierge AI Desk</h1>
        <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Inquire about strict kashrut details, on-site minyan schedules, customizable baby-sitting, private waterfall excursions, or volcanic weather.
        </p>
      </div>

      {/* Main Chat Container */}
      <div className="flex-1 bg-surface-container border border-surface-container-high rounded shadow-xl flex flex-col overflow-hidden h-[580px]">
        {/* Top Active Bar */}
        <div className="bg-primary-container p-4 md:px-6 flex justify-between items-center text-on-primary">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-on-secondary font-semibold text-sm">
                SC
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-primary-container rounded-full" />
            </div>
            <div>
              <h4 className="font-headline-sm text-sm text-on-primary tracking-wide uppercase">The Sanctuary Concierge</h4>
              <span className="text-[10px] text-amber-200 uppercase tracking-widest font-label-caps">Elite Hospitality Consultant</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-primary/40 px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-secondary-fixed-dim" /> Powered by Gemini
          </div>
        </div>

        {/* Message History Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface/30">
          {chatHistory.map((msg, i) => {
            const isConcierge = msg.sender === "concierge";
            return (
              <div 
                key={i} 
                className={`flex gap-4 max-w-3xl ${!isConcierge ? "flex-row-reverse ml-auto" : "mr-auto"}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs shrink-0 select-none ${
                  isConcierge ? "bg-secondary text-on-secondary" : "bg-primary-container text-on-primary"
                }`}>
                  {isConcierge ? "C" : "G"}
                </div>

                {/* Bubble */}
                <div className="space-y-1 max-w-[85%]">
                  <div className={`p-4 rounded shadow-sm leading-relaxed whitespace-pre-wrap font-body-md text-sm ${
                    isConcierge 
                      ? "bg-surface-container text-primary border border-surface-container-high" 
                      : "bg-primary text-on-primary"
                  }`}>
                    {msg.text}
                  </div>
                  
                  <span className={`block text-[10px] text-on-surface-variant font-mono ${!isConcierge ? "text-right" : ""}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-4 max-w-xl mr-auto">
              <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-semibold text-xs select-none">
                C
              </div>
              <div className="space-y-1">
                <div className="p-4 bg-surface-container text-primary border border-surface-container-high rounded shadow-sm text-xs italic flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200" />
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-300" />
                  </span>
                  The Sanctuary Concierge is preparing bespoke suggestions...
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions Shelf */}
        <div className="px-6 py-3 border-t border-surface-container-high bg-surface-container-low flex gap-2.5 overflow-x-auto horizontal-scroll-container">
          <HelpCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
          {QUICK_SUGGESTIONS.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(suggestion)}
              className="text-xs bg-surface border border-surface-container-high text-primary hover:border-secondary hover:text-secondary px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm hover:shadow transition-all font-body-md cursor-pointer shrink-0"
              disabled={isLoading}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Form input */}
        <form onSubmit={handleFormSubmit} className="p-4 border-t border-surface-container-high bg-surface-container flex gap-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask anything about Kashrut, Shabbat, Rooms, Excursions, and Weather..."
            className="flex-1 bg-surface border border-surface-container-high rounded px-4 py-3 text-sm font-body-md text-primary focus:outline-none focus:ring-1 focus:ring-secondary outline-none shadow-inner"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-teal-ocean text-white hover:bg-teal-dark-hover p-3 rounded shadow hover:shadow-lg transition-colors flex items-center justify-center cursor-pointer"
            disabled={isLoading || !userInput.trim()}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

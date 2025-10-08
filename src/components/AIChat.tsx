import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: Date;
  typing?: boolean;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Сайн байна уу! Би таны AI багш. Танд хэрхэн тусалж чадах вэ? Математик, физик, хими эсвэл бусад хичээлийн талаар асуугаарай! 😊",
      isAI: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses = [
    "Сайн асуулт! Математикийн тухайд би танд дэлгэрэнгүй тайлбарлаж чадна. Ямар бодлогыг шийдэхэд тусламж хэрэгтэй вэ?",
    "Физикийн хууль тогтолуудыг ойлгоход би танд туслана! Жишээ бодлого хийж үзэхийг хүсч байна уу?",
    "Химийн нэгдлүүдийн талаар асуусанд баяртай байна. Ямар нэгдлийн талаар мэдэхийг хүсч байна вэ?",
    "Та маш сайн сурч байна! Би танай ахицыг харж байгаад баяртай байна. Дараагийн асуултыг асуугаарай!",
    "Энэ сэдвийг ойлгоход хэцүү байж магадгүй. Би танд алхам алхмаар тайлбарлая. Юунаас эхэлье?",
    "Танай сонирхол надад таалагдаж байна! Энэ мэдлэгийг бодлого бодоход хэрэглэж үзье!",
    "Сайн! Энэ асуудлыг шийдэхэд математикийн аль аргыг ашиглахыг санал болгож байна?",
    "Та шинэ зүйл сурахыг хүсэж байгаа нь сайхан харагдаж байна. Би танд дэмжлэг үзүүлэхэд бэлэн байна!"
  ];

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isAI: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('mn-MN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Багш</h1>
        <p className="text-muted-foreground">Ухаалаг туслах таны хажууд</p>
      </div>

      {/* Chat Container */}
      <Card className="flex-1 flex flex-col glass-morphism overflow-hidden">
        {/* AI Status */}
        <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center pulse-soft">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-semibold text-primary">AI Багш</h3>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Онлайн · Танд тусалахад бэлэн
              </div>
            </div>
            <div className="ml-auto">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex gap-3 ${message.isAI ? 'justify-start' : 'justify-end'}`}
            >
              {message.isAI && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              
              <div className={`max-w-[70%] ${message.isAI ? 'order-1' : 'order-0'}`}>
                <div className={`p-4 rounded-2xl ${
                  message.isAI 
                    ? 'bg-card border border-primary/20 glow-effect' 
                    : 'bg-primary text-primary-foreground ml-auto'
                } ${message.isAI ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
                <p className={`text-xs text-muted-foreground mt-1 ${
                  message.isAI ? 'text-left' : 'text-right'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
              
              {!message.isAI && (
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-4 h-4 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 pulse-soft">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-card border border-primary/20 p-4 rounded-2xl rounded-tl-sm glow-effect">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-card/50">
          <div className="flex gap-3">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="AI багштаа асуулт асуугаарай..."
              className="flex-1 bg-background border-border focus:border-primary focus:ring-primary"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={inputText.trim() === "" || isTyping}
              className="glow-effect"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-muted-foreground">
              AI багш 24/7 танд тусалахад бэлэн байна
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Sparkles className="w-3 h-3" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
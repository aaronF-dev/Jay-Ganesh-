import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, Send, X, Minimize2, MessageCircle, GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'navigation' | 'info' | 'greeting' | 'error';
}

interface ChatbotProps {
  onNavigate?: (section: string) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "🎓 Welcome to Jay Ganesh School! I'm your AI assistant. I can help you navigate our website, answer questions about admissions, programs, facilities, and more. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
      type: 'greeting'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced NLP processing with intent classification and entity extraction
  const processMessage = async (userMessage: string): Promise<{ text: string; type: string }> => {
    const lowerMsg = userMessage.toLowerCase().trim();
    
    // Intent classification using pattern matching (can be enhanced with ML models)
    const intents = {
      navigation: {
        patterns: ['show', 'go to', 'navigate', 'take me', 'find', 'where is', 'section'],
        entities: {
          about: ['about', 'history', 'overview', 'school info', 'background'],
          programs: ['program', 'course', 'curriculum', 'academic', 'study', 'subjects', 'classes'],
          admissions: ['admission', 'apply', 'enroll', 'registration', 'join', 'entrance'],
          contact: ['contact', 'phone', 'address', 'location', 'reach', 'call'],
          gallery: ['gallery', 'photo', 'picture', 'image', 'campus', 'facilities'],
          testimonials: ['testimonial', 'review', 'feedback', 'parent', 'student opinion']
        }
      },
      information: {
        patterns: ['what', 'how', 'when', 'why', 'tell me', 'explain', 'describe'],
        entities: {
          fees: ['fee', 'cost', 'tuition', 'price', 'payment', 'expense'],
          timing: ['timing', 'schedule', 'hours', 'time', 'when open'],
          transport: ['transport', 'bus', 'pickup', 'drop', 'vehicle'],
          facilities: ['facility', 'lab', 'library', 'playground', 'canteen', 'sports'],
          staff: ['teacher', 'faculty', 'staff', 'principal', 'instructor'],
          events: ['event', 'activity', 'celebration', 'function', 'program']
        }
      },
      greeting: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'namaste'],
        entities: {}
      },
      help: {
        patterns: ['help', 'assist', 'support', 'guide', 'what can you do'],
        entities: {}
      }
    };

    // Extract intent and entities
    let detectedIntent = 'unknown';
    let detectedEntity = '';
    
    for (const [intent, data] of Object.entries(intents)) {
      if (data.patterns.some(pattern => lowerMsg.includes(pattern))) {
        detectedIntent = intent;
        
        // Extract entities
        for (const [entity, keywords] of Object.entries(data.entities)) {
          if (keywords.some(keyword => lowerMsg.includes(keyword))) {
            detectedEntity = entity;
            break;
          }
        }
        break;
      }
    }

    // Generate contextual responses based on intent and entity
    switch (detectedIntent) {
      case 'navigation':
        return handleNavigationIntent(detectedEntity);
      
      case 'information':
        return handleInformationIntent(detectedEntity);
      
      case 'greeting':
        return {
          text: "🙏 Hello! Welcome to Jay Ganesh School. I'm here to help you explore our website and answer your questions. You can ask me about:\n\n• 📚 Academic Programs\n• 🎯 Admissions Process\n• 🏫 School Facilities\n• 📞 Contact Information\n• 🖼️ Campus Gallery\n• 💬 Student Testimonials\n\nWhat would you like to know?",
          type: 'greeting'
        };
      
      case 'help':
        return {
          text: "🤖 I'm your intelligent school assistant! Here's how I can help:\n\n**Navigation:** 🧭\n• \"Show me the about section\"\n• \"Take me to admissions\"\n• \"Find the gallery\"\n\n**Information:** 📋\n• \"What are the school fees?\"\n• \"Tell me about facilities\"\n• \"What are the timings?\"\n\n**Quick Commands:** ⚡\n• \"Programs\" - View academic offerings\n• \"Contact\" - Get contact details\n• \"Reviews\" - Read testimonials\n\nJust ask naturally - I understand context!",
          type: 'info'
        };
      
      default:
        return handleUnknownIntent(userMessage);
    }
  };

  const handleNavigationIntent = (entity: string): { text: string; type: string } => {
    const navigationMap: { [key: string]: { section: string; message: string } } = {
      about: {
        section: 'about',
        message: "🏫 **Navigating to About Section**\n\nHere you'll find our school's rich history, mission, vision, and core values. Learn about our commitment to academic excellence and character development."
      },
      programs: {
        section: 'programs',
        message: "📚 **Viewing Academic Programs**\n\nExplore our comprehensive curriculum from elementary to high school, including special programs, extracurricular activities, and academic achievements."
      },
      admissions: {
        section: 'admissions',
        message: "🎯 **Opening Admissions Information**\n\nFind everything you need to know about enrollment, application process, requirements, and important dates for new admissions."
      },
      contact: {
        section: 'contact',
        message: "📞 **Contact Information**\n\nHere's how to reach us - phone numbers, email addresses, office hours, and our complete address with directions."
      },
      gallery: {
        section: 'gallery',
        message: "🖼️ **School Gallery**\n\nTake a virtual tour of our beautiful campus, classrooms, laboratories, sports facilities, and various school activities."
      },
      testimonials: {
        section: 'testimonials',
        message: "💬 **Student & Parent Reviews**\n\nRead authentic testimonials from our students and parents about their experiences at Jay Ganesh School."
      }
    };

    const nav = navigationMap[entity];
    if (nav) {
      onNavigate?.(nav.section);
      return { text: nav.message, type: 'navigation' };
    }

    return {
      text: "🧭 I can help you navigate to any section of our website. Try saying:\n• \"Show me the about section\"\n• \"Go to admissions\"\n• \"Find the gallery\"",
      type: 'navigation'
    };
  };

  const handleInformationIntent = (entity: string): { text: string; type: string } => {
    const infoMap: { [key: string]: string } = {
      fees: "💰 **Fee Structure & Payment**\n\nOur fee structure is designed to be accessible and transparent:\n• Competitive rates for quality education\n• Flexible payment plans available\n• Scholarships for deserving students\n• No hidden charges\n\n📞 Contact our admissions office for detailed fee information and payment options.",
      
      timing: "🕐 **School Timings & Schedule**\n\n**Regular Hours:**\n• School: 8:00 AM - 3:30 PM (Mon-Fri)\n• Office: 8:00 AM - 5:00 PM\n• Saturday: 9:00 AM - 1:00 PM\n\n**Extended Services:**\n• Early morning care from 7:30 AM\n• After-school programs until 6:00 PM\n• Weekend activities available",
      
      transport: "🚌 **Transportation Services**\n\nSafe and reliable transportation covering major areas:\n• GPS-enabled buses with trained drivers\n• Multiple pickup/drop points\n• Morning and evening services\n• Emergency contact system\n• Route optimization for convenience\n\n📞 Contact us for route details and availability in your area.",
      
      facilities: "🏫 **World-Class Facilities**\n\nOur campus features:\n• 🔬 Modern science laboratories\n• 📚 Well-stocked library with digital resources\n• 💻 Computer lab with latest technology\n• 🏃‍♂️ Sports complex and playground\n• 🎭 Auditorium for cultural events\n• 🍽️ Hygienic cafeteria\n• 🚑 Medical facility with trained nurse",
      
      staff: "👨‍🏫 **Expert Faculty & Staff**\n\nOur team comprises:\n• Highly qualified and experienced teachers\n• Specialized subject experts\n• Trained counselors and support staff\n• Regular professional development programs\n• Student-teacher ratio optimized for attention\n• Multilingual faculty for diverse needs",
      
      events: "🎉 **School Events & Activities**\n\nWe organize various events throughout the year:\n• 📚 Academic competitions and science fairs\n• 🎭 Cultural programs and talent shows\n• 🏆 Sports tournaments and athletic meets\n• 🌍 Educational trips and excursions\n• 🎓 Annual day and graduation ceremonies\n• 🤝 Community service projects"
    };

    const info = infoMap[entity];
    if (info) {
      return { text: info, type: 'info' };
    }

    return {
      text: "📋 I can provide information about:\n• School fees and payments\n• Timings and schedules\n• Transportation services\n• Campus facilities\n• Faculty and staff\n• Events and activities\n\nWhat specific information would you like?",
      type: 'info'
    };
  };

  const handleUnknownIntent = (message: string): { text: string; type: string } => {
    const suggestions = [
      "Tell me about your programs",
      "What are the school fees?",
      "Show me the gallery",
      "How do I apply for admission?",
      "What facilities do you have?"
    ];

    return {
      text: `🤔 I'd be happy to help! I didn't quite understand your question, but here are some things you can ask me:\n\n${suggestions.map(s => `• ${s}`).join('\n')}\n\nOr try asking in a different way - I'm learning to understand better!`,
      type: 'info'
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Simulate NLP processing delay
      setTimeout(async () => {
        const response = await processMessage(inputText);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          isUser: false,
          timestamp: new Date(),
          type: response.type as any
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1200);
    } catch (error) {
      setIsTyping(false);
      toast({
        title: "Error",
        description: "Sorry, I encountered an issue. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (text: string) => {
    // Format bold text
    const boldFormatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Format bullet points
    const bulletFormatted = boldFormatted.replace(/^• /gm, '<span class="text-accent">•</span> ');
    
    return bulletFormatted;
  };

  const getMessageIcon = (type?: string) => {
    switch (type) {
      case 'navigation': return '🧭';
      case 'info': return '📋';
      case 'greeting': return '🎓';
      case 'error': return '⚠️';
      default: return '🤖';
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary hover:shadow-elegant transform hover:scale-110 transition-all duration-300 shadow-lg"
          size="icon"
        >
          <Bot className="w-5 h-5 sm:w-7 sm:h-7" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <Card className={`w-[calc(100vw-2rem)] max-w-80 sm:max-w-96 transition-all duration-300 shadow-elegant border-0 bg-card/95 backdrop-blur-sm ${
        isMinimized ? 'h-16 sm:h-20' : 'h-[28rem] sm:h-[32rem]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gradient-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center shadow-card flex-shrink-0">
              <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <span className="font-semibold text-xs sm:text-sm block truncate">School AI Assistant</span>
              <div className="text-xs opacity-90 hidden sm:block">Always here to help</div>
            </div>
          </div>
          <div className="flex space-x-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 h-64 sm:h-80 overflow-y-auto bg-gradient-to-b from-background/50 to-background/80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-1.5 sm:space-x-2 max-w-[90%] sm:max-w-[85%]">
                    {!message.isUser && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                        {getMessageIcon(message.type)}
                      </div>
                    )}
                    <div
                      className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        message.isUser
                          ? 'bg-gradient-primary text-primary-foreground shadow-card'
                          : 'bg-secondary/80 text-secondary-foreground border border-border/50'
                      }`}
                    >
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: formatMessage(message.text) 
                        }} 
                        className="whitespace-pre-line"
                      />
                      <div className={`text-xs mt-1.5 sm:mt-2 opacity-70 ${
                        message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-xs">
                      🤖
                    </div>
                    <div className="bg-secondary/80 text-secondary-foreground p-3 rounded-2xl text-sm border border-border/50">
                      <div className="flex items-center space-x-1">
                        <span className="text-xs">AI is thinking</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t bg-background/80">
              <div className="flex space-x-1.5 sm:space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about the school..."
                  className="flex-1 p-2 sm:p-3 border border-input rounded-lg sm:rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth bg-background/90"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="w-12 h-12 rounded-xl bg-gradient-primary hover:shadow-elegant transform hover:scale-105 transition-all duration-200"
                  disabled={!inputText.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-xs text-muted-foreground mt-2 text-center">
                Powered by AI • Type naturally, I understand context
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;
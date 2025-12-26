'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Sparkles, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

export default function AIAgentPage() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { role: 'user' as const, text: prompt };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage.text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="max-w-4xl mx-auto py-20 px-8 h-[calc(100vh-100px)] flex flex-col"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="inline-flex items-center gap-2 bg-mint px-4 py-2 rounded-full mb-4"
        >
          <Sparkles size={16} />
          <span className="text-xs font-bold tracking-widest uppercase text-black">Assistant</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-black">Dicta AI Agent</h1>
      </div>

      {/* Chat container */}
      <div className="flex-1 bg-white shadow-2xl shadow-black/5 border border-gray-100 rounded-[3rem] overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          <AnimatePresence mode="popLayout">
            {messages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-6">
                  <Bot size={40} className="text-gray-300" />
                </div>
                <p className="text-gray-400 max-w-xs">
                  Ask me anything about Dicta Hub courses, admissions, or tech in general!
                </p>
              </motion.div>
            ) : (
              messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-black text-white' : 'bg-mint text-black'
                    }`}
                  >
                    {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div
                    className={`max-w-[80%] p-5 rounded-3xl ${
                      msg.role === 'user'
                        ? 'bg-gray-100 rounded-tr-none text-black'
                        : 'bg-mint/20 rounded-tl-none text-black'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-mint text-black flex items-center justify-center animate-pulse">
                <Bot size={18} />
              </div>
              <div className="bg-mint/10 p-5 rounded-3xl rounded-tl-none">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-200"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-400"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="p-6 bg-gray-50/50 border-t border-gray-100 flex items-center gap-4">
          <Input
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            className="flex-1 rounded-2xl"
            placeholder="Describe your goals..."
            disabled={loading}
          />
          <Button type="submit" size="md" disabled={loading} className="px-5" variant="black">
            <Send size={20} />
          </Button>
        </form>
      </div>
    </motion.div>
  );
}

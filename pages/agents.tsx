
import Link from 'next/link'
import { useState } from 'react'

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState('')

  const agents = [
    {
      id: 'kodax',
      name: 'KODAX',
      title: 'Amethyst Repair Sage',
      description: 'Technical analysis and problem-solving expert',
      color: 'purple',
      icon: '⚙️',
      role: 'Technical Analysis & Problem Solving',
      specialty: 'Diagnoses issues, provides technical solutions, speaks with authority and precision'
    },
    {
      id: 'chance',
      name: 'CHANCE',
      title: 'Signal Blue Visionary',
      description: 'Creative brainstorming and ideation specialist',
      color: 'blue',
      icon: '💡',
      role: 'Creative Brainstorming & Visionary Thinking',
      specialty: 'Explores possibilities, sees patterns, inspires forward-thinking perspectives'
    },
    {
      id: 'scribe',
      name: 'SCRIBE',
      title: 'Neon Lime Knowledge Keeper',
      description: 'Documentation and content organization expert',
      color: 'lime',
      icon: '📝',
      role: 'Documentation & Knowledge Organization',
      specialty: 'Transforms raw thoughts into polished, structured content with eloquence'
    }
  ]

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !selectedAgent) return

    // Add user message
    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')

    // Simulate agent response
    setTimeout(() => {
      const agentMessage = {
        role: 'assistant',
        content: `This is a response from ${selectedAgent.toUpperCase()}. In production, this would be powered by real LLM.`
      }
      setMessages(prev => [...prev, agentMessage])
    }, 500)
  }

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-laser-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <h1 className="text-2xl font-bold neon-pink">BBeezHive</h1>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition">← Back</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-12 neon-text">AI Agents</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Agents List */}
          <div className="lg:col-span-1 space-y-4">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => {
                  setSelectedAgent(agent.id)
                  setMessages([])
                }}
                className={`w-full p-4 rounded-lg glass text-left transition ${
                  selectedAgent === agent.id
                    ? 'neon-border-pink shadow-neon-pink'
                    : 'border border-gray-700 hover:border-laser-pink/50'
                }`}
              >
                <div className="text-2xl mb-2">{agent.icon}</div>
                <h3 className="font-bold text-lg">{agent.name}</h3>
                <p className="text-sm text-gray-400">{agent.title}</p>
                <p className="text-xs text-gray-500 mt-2">{agent.specialty}</p>
              </button>
            ))}
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {selectedAgent ? (
              <div className="glass neon-border-pink rounded-lg p-6 h-[600px] flex flex-col">
                <div className="mb-4">
                  {agents.find(a => a.id === selectedAgent) && (
                    <div>
                      <h3 className="text-2xl font-bold neon-pink">{agents.find(a => a.id === selectedAgent)?.name}</h3>
                      <p className="text-gray-400">{agents.find(a => a.id === selectedAgent)?.role}</p>
                    </div>
                  )}
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-4 border-t border-gray-700 pt-4">
                  {messages.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Start a conversation...</p>
                  ) : (
                    messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            msg.role === 'user'
                              ? 'bg-laser-pink/20 border border-laser-pink'
                              : 'bg-signal-blue/20 border border-signal-blue'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask an agent..."
                    className="flex-1 px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-laser-pink outline-none transition"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-laser-pink hover:bg-laser-pink/80 rounded font-bold transition"
                  >
                    Send
                  </button>
                </form>
              </div>
            ) : (
              <div className="glass neon-border-blue rounded-lg p-8 h-[600px] flex items-center justify-center">
                <p className="text-gray-400 text-center">Select an agent to start chatting</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

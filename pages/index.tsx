
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const features = [
    {
      id: 'agents',
      title: 'AI Agents',
      description: 'KODAX, CHANCE, SCRIBE - Three specialized AI agents for technical analysis, creative brainstorming, and documentation.',
      icon: '🤖',
      color: 'pink',
      href: '/agents'
    },
    {
      id: 'partners',
      title: 'Partner Network',
      description: 'Connect with Partner A & B, share pods, and collaborate seamlessly with dual-user workspace.',
      icon: '🤝',
      color: 'blue',
      href: '/partners'
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      description: 'Discover and purchase AI agents, templates, and themes. Monetize your creations.',
      icon: '🛍️',
      color: 'lime',
      href: '/marketplace'
    },
    {
      id: 'ghostfi',
      title: 'Ghost-Fi Pro',
      description: 'Advanced encryption, analytics, priority support, and white-label options.',
      icon: '🔒',
      color: 'purple',
      href: '/pro'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; shadow: string; text: string }> = {
      pink: { border: 'neon-border-pink', shadow: 'shadow-neon-pink', text: 'neon-pink' },
      blue: { border: 'neon-border-blue', shadow: 'shadow-neon-blue', text: 'neon-blue' },
      lime: { border: 'neon-border-lime', shadow: 'shadow-neon-lime', text: 'neon-lime' },
      purple: { border: 'neon-border-purple', shadow: 'shadow-neon-purple', text: 'neon-purple' },
    }
    return colors[color] || colors.pink
  }

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-laser-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <h1 className="text-2xl font-bold neon-pink">BBeezHive</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 rounded border border-signal-blue hover:bg-signal-blue/10 transition">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 rounded bg-laser-pink hover:bg-laser-pink/80 transition font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
          <span className="neon-pink">AI Agents</span> × <span className="neon-blue">Partnerships</span> × <span className="neon-lime">Marketplace</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          BBeezHive is the ultimate platform for dual-user collaboration, AI-powered automation, and marketplace monetization. 
          Connect with partners, activate specialized agents, and build your empire.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup" className="px-8 py-3 bg-neon-gradient rounded-lg font-bold hover:shadow-neon-pink transition">
            Start Free Trial
          </Link>
          <Link href="#features" className="px-8 py-3 border-2 border-signal-blue rounded-lg font-bold hover:bg-signal-blue/10 transition">
            Explore Features
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-center mb-12 neon-text">Powerful Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const colors = getColorClasses(feature.color)
            const isHovered = hoveredCard === feature.id

            return (
              <Link key={feature.id} href={feature.href}>
                <div
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-6 rounded-lg glass ${colors.border} transition-all duration-300 cursor-pointer ${
                    isHovered ? `${colors.shadow} scale-105` : ''
                  }`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className={`text-xl font-bold mb-2 ${colors.text}`}>{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-center mb-12 neon-text">Simple Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Free', price: '$0', features: ['Basic agents', 'Partner linking', 'Marketplace access'] },
            { name: 'Pro', price: '$9.99/mo', features: ['Advanced agents', 'Ghost-Fi security', 'Priority support', 'API access'], highlight: true },
            { name: 'Enterprise', price: '$29.99/mo', features: ['Everything in Pro', 'Dedicated manager', 'Custom integrations', 'White-label'] }
          ].map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-lg glass ${plan.highlight ? 'neon-border-pink scale-105' : 'border border-gray-700'} transition`}
            >
              <h4 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'neon-pink' : ''}`}>{plan.name}</h4>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-neon-lime">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded font-bold transition ${
                plan.highlight
                  ? 'bg-laser-pink hover:bg-laser-pink/80'
                  : 'border border-signal-blue hover:bg-signal-blue/10'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6 neon-text">Ready to Transform Your Workflow?</h3>
        <p className="text-xl text-gray-300 mb-8">Join thousands of users leveraging AI agents and partnerships.</p>
        <Link href="/signup" className="inline-block px-8 py-3 bg-neon-gradient rounded-lg font-bold hover:shadow-neon-pink transition">
          Start Your Free Trial Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-laser-pink/20 bg-void-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2026 BBeezHive. All rights reserved. | KPI: SIG-LK-SFT-ALPHA-992-VAULT-8TB-2026-NEXUS</p>
        </div>
      </footer>
    </div>
  )
}

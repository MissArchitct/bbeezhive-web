'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro')

  const features = [
    { name: 'Ghost-Fi Security', pro: true, enterprise: true, icon: '🔒' },
    { name: 'Advanced Analytics', pro: true, enterprise: true, icon: '📊' },
    { name: 'Priority Support', pro: true, enterprise: true, icon: '⚡' },
    { name: 'Custom Branding', pro: false, enterprise: true, icon: '🎨' },
    { name: 'API Access', pro: true, enterprise: true, icon: '🔌' },
    { name: 'Bulk Operations', pro: true, enterprise: true, icon: '⚙️' },
    { name: 'Advanced Integrations', pro: false, enterprise: true, icon: '🔗' },
    { name: 'Dedicated Manager', pro: false, enterprise: true, icon: '👔' },
  ]

  const plans = [
    {
      id: 'pro',
      name: 'Pro',
      price: 9.99,
      period: 'month',
      description: 'Perfect for growing teams',
      cta: 'Upgrade to Pro',
      highlight: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 29.99,
      period: 'month',
      description: 'For large organizations',
      cta: 'Contact Sales',
      highlight: false
    }
  ]

  return (
    <main className="min-h-screen bg-dark-gradient">
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
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 neon-text">
            <span className="neon-pink">Ghost-Fi</span> <span className="neon-blue">Pro</span>
          </h2>
          <p className="text-xl text-gray-300">Unlock advanced features and enterprise capabilities</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg p-8 transition ${
                plan.highlight
                  ? 'glass neon-border-pink shadow-neon-pink scale-105'
                  : 'glass border border-gray-700'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? 'neon-pink' : ''}`}>
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>

              <button className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                plan.highlight
                  ? 'bg-laser-pink hover:bg-laser-pink/80'
                  : 'border border-signal-blue hover:bg-signal-blue/10'
              }`}>
                {plan.cta}
              </button>

              <div className="space-y-3">
                {features.map((feature) => {
                  const included = plan.id === 'pro' ? feature.pro : feature.enterprise
                  return (
                    <div
                      key={feature.name}
                      className={`flex items-center gap-3 ${included ? '' : 'opacity-50'}`}
                    >
                      <span className={included ? 'text-neon-lime' : 'text-gray-600'}>
                        {included ? '✓' : '✗'}
                      </span>
                      <span className="text-sm">{feature.icon} {feature.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="glass neon-border-blue rounded-lg p-8">
          <h3 className="text-2xl font-bold neon-blue mb-8">Feature Comparison</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Free</th>
                  <th className="text-center py-4 px-4">Pro</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.name} className="border-b border-gray-700/50">
                    <td className="py-4 px-4">{feature.icon} {feature.name}</td>
                    <td className="text-center py-4 px-4 text-gray-500">✗</td>
                    <td className="text-center py-4 px-4">
                      {feature.pro ? <span className="text-neon-lime">✓</span> : <span className="text-gray-500">✗</span>}
                    </td>
                    <td className="text-center py-4 px-4">
                      {feature.enterprise ? <span className="text-neon-lime">✓</span> : <span className="text-gray-500">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold neon-text mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I upgrade or downgrade anytime?',
                a: 'Yes! You can change your plan at any time. Changes take effect at the next billing cycle.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, you get 14 days free access to all Pro features. No credit card required.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise.'
              },
              {
                q: 'Do you offer discounts for annual billing?',
                a: 'Yes! Save 20% when you pay annually instead of monthly.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="glass border border-gray-700 rounded-lg p-6">
                <h4 className="font-bold mb-2 text-laser-pink">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

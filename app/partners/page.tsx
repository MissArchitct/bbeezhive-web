'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PartnersPage() {
  const [hiveKey, setHiveKey] = useState('')
  const [linkedPartner, setLinkedPartner] = useState<string | null>(null)

  const partners = [
    {
      id: 'partner-a',
      name: 'Master Alpha',
      role: 'Partner A',
      emoji: '⚡',
      status: 'active',
      sharedPods: 12,
      joinDate: '2026-01-15'
    },
    {
      id: 'partner-b',
      name: 'Madame Omega',
      role: 'Partner B',
      emoji: '💋',
      status: 'active',
      sharedPods: 8,
      joinDate: '2026-02-01'
    }
  ]

  const sharedFiles = [
    { id: 1, name: 'Q1 Strategy.md', uploadedBy: 'Master Alpha', size: '2.4 MB', date: '2026-03-05' },
    { id: 2, name: 'API Documentation.pdf', uploadedBy: 'Madame Omega', size: '5.1 MB', date: '2026-03-04' },
    { id: 3, name: 'Sales Bot Config.json', uploadedBy: 'Master Alpha', size: '342 KB', date: '2026-03-03' },
  ]

  const handleLinkPartner = (e: React.FormEvent) => {
    e.preventDefault()
    if (hiveKey.trim()) {
      setLinkedPartner(hiveKey)
      setHiveKey('')
    }
  }

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
        <h2 className="text-4xl font-bold mb-12 neon-text">Partner Network</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Partner Linking */}
          <div className="lg:col-span-1">
            <div className="glass neon-border-blue rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold neon-blue mb-4">Link Partner</h3>
              <form onSubmit={handleLinkPartner} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Hive Key</label>
                  <input
                    type="text"
                    value={hiveKey}
                    onChange={(e) => setHiveKey(e.target.value)}
                    placeholder="Enter partner's Hive Key"
                    className="w-full px-3 py-2 rounded bg-void-black border border-gray-700 focus:border-signal-blue outline-none transition text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-signal-blue hover:bg-signal-blue/80 rounded font-bold transition"
                >
                  Link Partner
                </button>
              </form>
            </div>

            {/* Partners List */}
            <div className="space-y-4">
              {partners.map((partner) => (
                <div key={partner.id} className="glass neon-border-pink rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{partner.emoji}</span>
                      <div>
                        <h4 className="font-bold">{partner.name}</h4>
                        <p className="text-xs text-gray-400">{partner.role}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-neon-lime/20 text-neon-lime px-2 py-1 rounded">{partner.status}</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Shared Pods: {partner.sharedPods}</p>
                    <p>Joined: {partner.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shared Content */}
          <div className="lg:col-span-2">
            <div className="glass neon-border-lime rounded-lg p-6">
              <h3 className="text-2xl font-bold neon-lime mb-6">Shared Pods</h3>
              <div className="space-y-3">
                {sharedFiles.map((file) => (
                  <div key={file.id} className="border border-gray-700 rounded-lg p-4 hover:border-neon-lime/50 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold">{file.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Uploaded by <span className="text-neon-lime">{file.uploadedBy}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{file.size}</p>
                        <p className="text-xs text-gray-600">{file.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Total Shared', value: '20', color: 'pink' },
                { label: 'Active Partners', value: '2', color: 'blue' },
                { label: 'Collaboration Score', value: '95%', color: 'lime' }
              ].map((stat) => (
                <div key={stat.label} className={`glass neon-border-${stat.color} rounded-lg p-4 text-center`}>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


import Link from 'next/link'
import { useState } from 'react'

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState<string[]>([])

  const items = [
    {
      id: 'sales-bot',
      name: 'Sales Bot',
      category: 'agents',
      price: 9.99,
      rating: 4.8,
      downloads: 1200,
      description: 'AI-powered sales assistant for lead generation and closing deals',
      icon: '🤖'
    },
    {
      id: 'content-template',
      name: 'Content Template Pack',
      category: 'templates',
      price: 4.99,
      rating: 4.6,
      downloads: 850,
      description: 'Pre-built templates for blog posts, emails, and social media',
      icon: '📋'
    },
    {
      id: 'neon-theme',
      name: 'Neon Dark Theme',
      category: 'themes',
      price: 2.99,
      rating: 4.9,
      downloads: 2100,
      description: 'Premium neon-styled UI theme with 10+ color variations',
      icon: '🎨'
    },
    {
      id: 'analytics-agent',
      name: 'Analytics Agent',
      category: 'agents',
      price: 14.99,
      rating: 4.7,
      downloads: 650,
      description: 'Advanced analytics and reporting AI agent',
      icon: '📊'
    },
    {
      id: 'automation-suite',
      name: 'Automation Suite',
      category: 'templates',
      price: 19.99,
      rating: 4.5,
      downloads: 420,
      description: 'Complete workflow automation templates',
      icon: '⚙️'
    },
    {
      id: 'glassmorphism',
      name: 'Glassmorphism UI Kit',
      category: 'themes',
      price: 7.99,
      rating: 4.8,
      downloads: 1500,
      description: 'Modern glassmorphism design components',
      icon: '✨'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'agents', name: 'AI Agents' },
    { id: 'templates', name: 'Templates' },
    { id: 'themes', name: 'Themes' }
  ]

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory)

  const toggleCart = (itemId: string) => {
    setCart(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const cartTotal = cart.reduce((sum, itemId) => {
    const item = items.find(i => i.id === itemId)
    return sum + (item?.price || 0)
  }, 0)

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-laser-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <h1 className="text-2xl font-bold neon-pink">BBeezHive</h1>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Cart: {cart.length} items</span>
            <Link href="/" className="text-gray-400 hover:text-white transition">← Back</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-12 neon-text">Marketplace</h2>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="glass neon-border-blue rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold neon-blue mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded transition ${
                      selectedCategory === cat.id
                        ? 'bg-laser-pink/20 border border-laser-pink text-laser-pink'
                        : 'hover:bg-gray-800/50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="glass neon-border-lime rounded-lg p-6">
              <h3 className="text-lg font-bold neon-lime mb-4">Cart Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Items:</span>
                  <span className="font-bold">{cart.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total:</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full mt-4 py-2 bg-neon-gradient rounded font-bold hover:shadow-neon-pink transition">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* Items Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="glass neon-border-pink rounded-lg p-6 hover:shadow-neon-pink transition">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <button
                      onClick={() => toggleCart(item.id)}
                      className={`px-3 py-1 rounded text-sm font-bold transition ${
                        cart.includes(item.id)
                          ? 'bg-laser-pink text-white'
                          : 'border border-laser-pink text-laser-pink hover:bg-laser-pink/10'
                      }`}
                    >
                      {cart.includes(item.id) ? '✓ Added' : 'Add'}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-neon-lime">${item.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">{item.downloads.toLocaleString()} downloads</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'partner-a'
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setLoading(true)
    // Simulate signup
    setTimeout(() => {
      setLoading(false)
      alert('Signup successful! (Demo)')
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-dark-gradient flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🐝</span>
          </div>
          <h1 className="text-3xl font-bold neon-pink">BBeezHive</h1>
          <p className="text-gray-400 mt-2">Join the hive</p>
        </div>

        {/* Signup Form */}
        <div className="glass neon-border-blue rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-signal-blue outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-signal-blue outline-none transition"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Partnership Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-signal-blue outline-none transition"
              >
                <option value="partner-a">Partner A (Master Alpha ⚡)</option>
                <option value="partner-b">Partner B (Madame Omega 💋)</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-signal-blue outline-none transition"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-signal-blue outline-none transition"
                required
              />
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              <span className="text-sm text-gray-400">
                I agree to the{' '}
                <Link href="#" className="text-signal-blue hover:underline">
                  Terms of Service
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-neon-gradient rounded-lg font-bold hover:shadow-neon-pink transition disabled:opacity-50 mt-6"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-void-black text-gray-400">Or sign up with</span>
            </div>
          </div>

          {/* OAuth */}
          <div className="space-y-3">
            <button type="button" className="w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition font-medium">
              Google
            </button>
            <button type="button" className="w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition font-medium">
              GitHub
            </button>
          </div>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-signal-blue hover:underline font-medium">
            Sign in
          </Link>
        </p>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}

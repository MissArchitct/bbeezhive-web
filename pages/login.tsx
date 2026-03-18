
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      setLoading(false)
      alert('Login successful! (Demo)')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🐝</span>
          </div>
          <h1 className="text-3xl font-bold neon-pink">BBeezHive</h1>
          <p className="text-gray-400 mt-2">Welcome back</p>
        </div>

        {/* Login Form */}
        <div className="glass neon-border-pink rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-laser-pink outline-none transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded bg-void-black border border-gray-700 focus:border-laser-pink outline-none transition"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-laser-pink hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-neon-gradient rounded-lg font-bold hover:shadow-neon-pink transition disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-void-black text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* OAuth */}
          <div className="space-y-3">
            <button className="w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition font-medium">
              Google
            </button>
            <button className="w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition font-medium">
              GitHub
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-laser-pink hover:underline font-medium">
            Sign up
          </Link>
        </p>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

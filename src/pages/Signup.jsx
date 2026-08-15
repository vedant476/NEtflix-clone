import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'
import netflixLogo from '../assets/netflix.svg'
import heroImage from '../assets/landing-hero.jpg'

function Signup() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState(location.state?.email || '')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/home')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-black relative"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <nav className="relative z-10 px-8 md:px-16 py-6">
        <Link to="/">
          <img src={netflixLogo} alt="Netflix" className="w-24 md:w-32" />
        </Link>
      </nav>

      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-black/75 backdrop-blur-sm p-10 md:p-14 rounded-md w-full max-w-md"
        >
          <h1 className="text-white text-3xl font-bold mb-8">Create Account</h1>

          {error && (
            <p className="text-red-400 text-sm mb-5 bg-orange-500/20 border border-orange-500/30 rounded p-3">
              {error}
            </p>
          )}

          <div className="space-y-4 mb-4">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded bg-zinc-700/80 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/30 text-base"
            />
            <input
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded bg-zinc-700/80 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/30 text-base"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white py-4 rounded font-semibold text-base transition-colors mt-6"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p className="text-gray-500 text-sm mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Sign in.
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
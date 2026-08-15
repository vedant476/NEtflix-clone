import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebase.js'
import netflixLogo from '../assets/netflix.svg'
import searchIcon from '../assets/search.svg'
import ottIcon from '../assets/ott.svg'
import userAvatar from '../assets/user-account2.png'

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const searchInputRef = useRef(null)
  const profileRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Search input pe focus jab open ho
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  // Profile dropdown bahar click karne pe band
  useEffect(() => {
    function handleOutsideClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim() === '') return
    navigate(`/browse?q=${encodeURIComponent(searchTerm)}`)
    setMenuOpen(false)
    setSearchOpen(false)
    setSearchTerm('')
  }

  const handleLogout = async () => {
    await signOut(auth)
    setProfileOpen(false)
    navigate('/home')
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-12 py-4 md:py-5 transition-all duration-500 ${
        scrolled ? 'bg-black' : 'bg-linear-to-b from-black/80 via-black/20 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between">

        {/* ── Left side: Logo + Nav links ── */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center shrink-0">
            <img src={netflixLogo} alt="Netflix" className="w-20 md:w-28" />
          </Link>

          <div className="hidden md:flex gap-5 text-sm font-normal text-gray-200 tracking-wide">
            <Link to="/home" className="hover:text-white transition-colors">Home</Link>
            <Link to="/browse" className="hover:text-white transition-colors">Browse</Link>
            <Link to="/watchlist" className="hover:text-white transition-colors">My List</Link>
          </div>
        </div>

        {/* ── Right side: Search + OTT + Profile ── */}
        <div className="hidden md:flex items-center gap-5">

          {/* Search — icon click se expand */}
          <div className="flex items-center gap-2">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Titles, people, genres"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onBlur={() => { if (!searchTerm) setSearchOpen(false) }}
                  className="bg-black/80 border border-white/60 rounded px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none w-52 transition-all"
                />
                <button type="submit">
                  <img src={searchIcon} alt="Search" className="w-5 h-5 opacity-80 hover:opacity-100" />
                </button>
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)}>
                <img src={searchIcon} alt="Search" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
              </button>
            )}
          </div>

          {/* OTT / Browse grid icon */}
          <Link to="/browse" title="Browse">
            <img src={ottIcon} alt="Browse" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
          </Link>


            {/* Profile avatar + dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-1 group"
            >
              <img
                src={userAvatar}
                alt="Account"
                className="w-8 h-8 rounded object-cover"
              />
              {/* Dropdown caret */}
              <svg
                className={`w-3 h-3 fill-white/70 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {profileOpen && (
              <div className="absolute right-0 top-11 w-48 bg-black/95 border border-zinc-700 rounded shadow-2xl py-2 text-sm text-white">
                {currentUser && (
                  <div className="px-4 py-2 border-b border-zinc-700 text-gray-400 text-xs truncate">
                    {currentUser.email}
                  </div>
                )}
                <Link
                  to="/watchlist"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 hover:bg-zinc-800 transition-colors"
                >
                  My List
                </Link>
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-2 px-4 py-2.5 hover:bg-zinc-800 transition-colors text-red-400"
                  >
                    Sign out of Netflix
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-zinc-800 transition-colors"
                  >
                    Sign In
                  </Link>
                )}

                

              </div>
            )
            }

            
          </div>


            {/* Creator link */}
          <Link to="https://github.com/vedant476" target="_blank" rel="noopener noreferrer" title="Creator">
  <img
    src="https://github.com/vedant476.png"
    alt="Creator"
    className="w-5 h-5 rounded-full opacity-80 hover:opacity-100 transition-opacity"
  />
</Link>
          

          
        </div>
          
        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black rounded-lg p-4 flex flex-col gap-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-black/60 border border-gray-500 rounded px-3 py-2 text-sm text-white focus:outline-none"
            />
            <button type="submit">
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
            </button>
          </form>
          <Link to="/home" onClick={() => setMenuOpen(false)} className="text-gray-200 hover:text-white">Home</Link>
          <Link to="/browse" onClick={() => setMenuOpen(false)} className="text-gray-200 hover:text-white">Browse</Link>
          <Link to="/watchlist" onClick={() => setMenuOpen(false)} className="text-gray-200 hover:text-white">My List</Link>
          <Link to="https://github.com/vedant476" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">Creator</Link>
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-center"
            >
              Sign out
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-center"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
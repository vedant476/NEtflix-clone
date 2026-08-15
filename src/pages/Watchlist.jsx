import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getWatchlist, removeFromWatchlist } from '../services/watchlistService'

function Watchlist() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
      return
    }
    fetchWatchlist()
  }, [currentUser, navigate])

  const fetchWatchlist = async () => {
    setLoading(true)
    try {
      const data = await getWatchlist(currentUser.uid)
      setMovies(data)
    } catch (err) {
      console.error('Watchlist fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = async (imdbID) => {
    try {
      await removeFromWatchlist(currentUser.uid, imdbID)
      setMovies((prev) => prev.filter((m) => m.imdbID !== imdbID))
    } catch (err) {
      console.error('Remove error:', err)
    }
  }

  if (!currentUser) return null

  return (
    <div className="pt-24 px-6 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-8">My List</h1>

      {loading ? (
        <p className="text-gray-400">Loading your watchlist...</p>
      ) : movies.length === 0 ? (
        <p className="text-gray-400">
          Your list is empty. Browse movies and click "+ Add to My List" to save them here.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="relative group rounded overflow-hidden bg-zinc-900"
            >
              {movie.Poster && movie.Poster !== 'N/A' ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full aspect-[2/3] object-cover"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-zinc-800 flex items-center justify-center text-gray-500 text-sm px-2 text-center">
                  {movie.Title}
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <p className="text-white text-sm font-semibold mb-1 truncate">{movie.Title}</p>
                <p className="text-gray-400 text-xs mb-3">{movie.Year}</p>
                <button
                  onClick={() => handleRemove(movie.imdbID)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xs py-1.5 rounded transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Watchlist
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { addToWatchlist, removeFromWatchlist, getWatchlist } from '../services/watchlistService.js'

function MovieModal({ movie, onClose }) {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [added, setAdded] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!movie) return null

  // Normalize fields — support both local JSON format and OMDb format
  const title = movie.title || movie.Title
  const poster = movie.backdrop || movie.poster || movie.Poster
  const overview = movie.overview || movie.Plot
  const rating = movie.rating || movie.imdbRating
  const year = movie.year || movie.Year

  const hasPoster = poster && poster !== 'N/A'

  // OMDb format movie object banao watchlistService ke liye
  const normalizedMovie = {
    imdbID: movie.imdbID || String(movie.id),
    Title: title,
    Year: String(year),
    Poster: poster || 'N/A',
    imdbRating: rating ? String(rating) : 'N/A',
    Genre: movie.Genre || '',
    Plot: overview || '',
  }

  // Check karo ki movie already watchlist mein hai ya nahi
  useEffect(() => {
    async function checkWatchlist() {
      if (!currentUser) return
      try {
        const list = await getWatchlist(currentUser.uid)
        const isAdded = list.some((m) => m.imdbID === normalizedMovie.imdbID)
        setAdded(isAdded)
      } catch (err) {
        console.error('Watchlist check error:', err)
      }
    }
    checkWatchlist()
  }, [currentUser, movie])

  const handleWatchlist = async () => {
    if (!currentUser) {
      onClose()
      navigate('/login')
      return
    }
    setLoading(true)
    try {
      if (added) {
        await removeFromWatchlist(currentUser.uid, normalizedMovie.imdbID)
        setAdded(false)
      } else {
        await addToWatchlist(currentUser.uid, normalizedMovie)
        setAdded(true)
      }
    } catch (err) {
      console.error('Watchlist error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 rounded-lg max-w-2xl w-full overflow-hidden relative"
      >
        <div className="aspect-video bg-black flex items-center justify-center">
          {hasPoster ? (
            <img src={poster} alt={title} className="w-full h-full object-cover" />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>

          <div className="flex gap-4 text-sm text-gray-400 mb-4">
            {rating && <span>⭐ {typeof rating === 'number' ? rating.toFixed(1) : rating}</span>}
            {year && <span>{year}</span>}
          </div>

          <p className="text-gray-300 text-sm mb-6">{overview}</p>

          <div className="flex gap-3 flex-wrap">
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' trailer')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors"
            >
              ▶ Watch Trailer
            </a>

            <button
              onClick={handleWatchlist}
              disabled={loading}
              className={`px-6 py-2 rounded font-semibold transition-colors flex items-center gap-2 ${
                added
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-zinc-700 text-white hover:bg-zinc-600 border border-zinc-500'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? '...' : added ? '✓ Added to My List' : '+ Add to My List'}
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/60 text-white w-8 h-8 rounded-full hover:bg-black/80"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default MovieModal
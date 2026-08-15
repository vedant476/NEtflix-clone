import { useEffect, useState } from 'react'
import { fetchTrending } from '../services/omdbApi.js'

function Banner({ onMovieClick }) {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function loadBanner() {
      const movies = await fetchTrending()
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]
      setMovie(randomMovie)
    }
    loadBanner()
  }, [])

  const handlePlay = () => {
    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' official trailer')}`,
      '_blank'
    )
  }

  if (!movie) {
    return (
      <div className="relative h-[80vh] md:h-[90vh] bg-zinc-900 animate-pulse">
        {/* Skeleton shimmer */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 w-full">
          <div className="h-16 md:h-24 bg-zinc-800 rounded w-2/3" />
          <div className="h-4 bg-zinc-800 rounded w-full max-w-lg" />
          <div className="h-4 bg-zinc-800 rounded w-3/4 max-w-md" />
          <div className="flex gap-3 mt-6">
            <div className="h-11 w-28 bg-zinc-700 rounded" />
            <div className="h-11 w-36 bg-zinc-700 rounded" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">

      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${movie.backdrop || movie.poster})` }}
      />

      {/* Vignette layers — same as Netflix */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent" />

      {/* Content — bottom-left positioned like Netflix */}
      <div className="absolute bottom-[15%] left-0 px-8 md:px-16 max-w-2xl w-full animate-fadeIn">

        {/* Maturity rating badge */}
        <div className="inline-flex items-center gap-1 mb-4">
          <span className="text-xs font-semibold text-white/80 border border-white/40 px-2 py-0.5 rounded-sm tracking-wider">
            U/A 13+
          </span>
          {movie.year && (
            <span className="text-xs text-white/60 ml-2">{movie.year}</span>
          )}
        </div>

        {/* Movie title */}
        <h1 className="netflix-logo text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] tracking-tight">
          {movie.title}
        </h1>

        {/* Rating stars */}
        {movie.rating && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-400 font-bold text-sm">
              {Math.round(movie.rating * 10)}% Match
            </span>
            <span className="text-white/50 text-sm">⭐ {movie.rating.toFixed(1)}</span>
          </div>
        )}

        {/* Synopsis */}
        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 max-w-lg drop-shadow-md line-clamp-3">
          {movie.overview}
        </p>

        {/* Buttons — Netflix style */}
        <div className="flex items-center gap-3">

          {/* Play button */}
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 bg-white text-black px-7 md:px-8 py-2.5 md:py-3 rounded font-bold hover:bg-white/80 transition-colors text-sm md:text-base"
          >
            {/* Play SVG icon */}
            <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          {/* More Info button */}
          <button
            onClick={() => onMovieClick?.(movie)}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-7 md:px-8 py-2.5 md:py-3 rounded font-bold hover:bg-white/30 transition-colors text-sm md:text-base border border-white/10"
          >
            {/* Info SVG icon */}
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            More Info
          </button>

        </div>
      </div>

    </div>
  )
}

export default Banner
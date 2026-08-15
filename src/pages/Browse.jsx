import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovies, fetchById } from '../services/omdbApi.js'
import MovieModal from '../components/MovieModal.jsx'
import SkeletonCard from '../components/SkeletonCard.jsx'


function Browse() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    async function loadResults() {
      if (!query) return
      setLoading(true)
      const data = await searchMovies(query)
      setResults(data)
      setLoading(false)
    }
    loadResults()
  }, [query])

  const handleMovieClick = async (movie) => {
    const fullDetails = await fetchById(movie.imdbID)
    setSelectedMovie(fullDetails || movie)
  }

  return (
    <div className="pt-24 px-6 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        {query ? `Results for "${query}"` : 'Browse'}
      </h1>

      {loading && <p className="text-gray-400">Searching...</p>}

      {!loading && query && results.length === 0 && (
        <p className="text-gray-400">No movies found for "{query}"</p>
      )}





      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))
          : results.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {movie.Poster && movie.Poster !== 'N/A' ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="rounded-md w-full h-60 object-cover"
                />
              ) : (
                <div className="w-full h-60 bg-gray-800 rounded-md flex items-center justify-center text-sm text-gray-400 p-2 text-center">
                  {movie.Title}
                </div>
              )}
              <p className="text-sm mt-1 text-gray-300 truncate">{movie.Title}</p>
            </div>
          ))}
      </div>

      {!query && (
        <p className="text-gray-400">Type something in the search bar to find movies.</p>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}

export default Browse


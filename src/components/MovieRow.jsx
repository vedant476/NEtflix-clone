import { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import SkeletonCard from './SkeletonCard.jsx'

function MovieRow({ title, fetchFunction, onMovieClick }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovies() {
      setLoading(true)
      const data = await fetchFunction()
      setMovies(data)
      setLoading(false)
    }
    loadMovies()
  }, [fetchFunction])

  return (
    <div className="mb-10">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-3 px-4 md:px-6 tracking-wide">
        {title}
      </h2>
      <div className="flex gap-2 md:gap-3 overflow-x-scroll px-4 md:px-6 pb-6 scrollbar-hide">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
            ))}
      </div>
    </div>
  )
}

export default MovieRow
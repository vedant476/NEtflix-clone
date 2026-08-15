import { useState } from 'react'
import Banner from '../components/Banner.jsx'
import MovieRow from '../components/MovieRow.jsx'
import MovieModal from '../components/MovieModal.jsx'
import {
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
} from '../services/omdbApi.js'


function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null)


  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <div>
      <Banner onMovieClick={handleMovieClick} />

      <div className="mt-8">
        <MovieRow
          title="Trending Now"
          fetchFunction={fetchTrending}
          onMovieClick={handleMovieClick}
        />
      </div>

      <MovieRow
        title="Top Rated"
        fetchFunction={fetchTopRated}
        onMovieClick={handleMovieClick}
      />
      <MovieRow
        title="Action Movies"
        fetchFunction={fetchActionMovies}
        onMovieClick={handleMovieClick}
      />
      <MovieRow
        title="Comedy Movies"
        fetchFunction={fetchComedyMovies}
        onMovieClick={handleMovieClick}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  )
}

export default Home
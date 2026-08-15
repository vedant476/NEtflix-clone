function MovieCard({ movie, onClick }) {
  if (!movie.poster) return null

  return (
    <div
      onClick={() => onClick(movie)}
      className="group min-w-40 md:min-w-50 cursor-pointer relative rounded-md overflow-hidden shadow-lg transition-transform duration-300 ease-out hover:scale-110 hover:z-10 hover:shadow-2xl hover:shadow-black/80"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        loading="lazy"
        className="w-full h-60 md:h-70 object-cover"
     />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <div>
          <p className="text-white text-sm font-semibold line-clamp-2">{movie.title}</p>
          {movie.year && <p className="text-gray-300 text-xs mt-1">{movie.year}</p>}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
// src/services/omdbApi.js
// Home page categories load from local static JSON (fast, reliable, no API dependency)
// Search still uses live OMDb API

import moviesData from '../data/movies.json'

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY
const OMDB_BASE_URL = 'https://www.omdbapi.com/'

export async function fetchTrending() {
  return moviesData.trending
}

export async function fetchTopRated() {
  return moviesData.topRated
}

export async function fetchActionMovies() {
  return moviesData.action
}

export async function fetchComedyMovies() {
  return moviesData.comedy
}

// Live search (OMDb) — movies only
export async function searchMovies(query) {
  const res = await fetch(
    `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie`
  )
  const data = await res.json()
  return data.Response === 'True' ? data.Search : []
}

// Full details by IMDb ID (used for search result clicks)
export async function fetchById(imdbID) {
  const res = await fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`)
  const data = await res.json()
  return data.Response === 'True' ? data : null
}
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
} from 'firebase/firestore'
import { db } from './firebase'

/**
 * Watchlist mein movie add karo
 * @param {string} userId - Firebase user UID
 * @param {object} movie - OMDb movie object (imdbID field required)
 */
export async function addToWatchlist(userId, movie) {
  const ref = doc(db, 'users', userId, 'watchlist', movie.imdbID)
  await setDoc(ref, {
    imdbID: movie.imdbID,
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster,
    imdbRating: movie.imdbRating || 'N/A',
    Genre: movie.Genre || '',
    Plot: movie.Plot || '',
    addedAt: new Date().toISOString(),
  })
}

/**
 * Watchlist se movie remove karo
 * @param {string} userId - Firebase user UID
 * @param {string} imdbID - Movie ka imdbID
 */
export async function removeFromWatchlist(userId, imdbID) {
  const ref = doc(db, 'users', userId, 'watchlist', imdbID)
  await deleteDoc(ref)
}

/**
 * User ki poori watchlist fetch karo
 * @param {string} userId - Firebase user UID
 * @returns {Array} - Movies array
 */
export async function getWatchlist(userId) {
  const colRef = collection(db, 'users', userId, 'watchlist')
  const snapshot = await getDocs(colRef)
  return snapshot.docs.map((doc) => doc.data())
}

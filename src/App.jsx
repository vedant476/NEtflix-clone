import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext.jsx'

import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Watchlist from './pages/Watchlist.jsx'
import Navbar from './components/Navbar.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const { currentUser } = useAuth()

  return (
    <div className="bg-black min-h-screen text-white">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <Routes>
        {/* Public routes — Landing, Login, Signup */}
        <Route
          path="/"
          element={currentUser ? <Navigate to="/home" replace /> : <Landing />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/home" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/home" replace /> : <Signup />}
        />

        {/* Protected routes — Login required */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <Navbar />
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Navbar />
              <Watchlist />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
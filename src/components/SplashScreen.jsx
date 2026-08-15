import { useEffect, useState } from 'react'
import netflixLogo from '../assets/netflix.svg'

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
    const finishTimer = setTimeout(() => onFinish(), 2600)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-100 transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src={netflixLogo}
        alt="Netflix"
        className="w-40 md:w-64 animate-netflixIntro"
      />
    </div>
  )
}

export default SplashScreen
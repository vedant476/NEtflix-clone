import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import netflixLogo from '../assets/netflix.svg'
import heroImage from '../assets/landing-hero.jpg'

function Landing() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleGetStarted = (e) => {
    e.preventDefault()
    navigate('/signup', { state: { email } })
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Roboto',sans-serif]">

      {/* ── Hero Section ── */}
      <div className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black" />

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-5">
          <img src={netflixLogo} alt="Netflix" className="w-24 md:w-36" />
          <Link
            to="/login"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Sign In
          </Link>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 max-w-3xl leading-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-2 text-white/90">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className="text-base md:text-xl mb-8 text-white/80">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email form */}
          <form
            onSubmit={handleGetStarted}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-5 py-4 bg-black/70 border border-gray-500 rounded text-white text-base placeholder-gray-400 focus:outline-none focus:border-gray-300"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded text-lg transition-colors whitespace-nowrap"
            >
              Get Started
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-2 bg-zinc-800" />

      {/* ── More reasons to join ── */}
      <section className="px-6 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center md:text-left">
          More reasons to join
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {/* Card 1 — Enjoy on your TV */}
          <div className="bg-linear-to-br from-[#1a0533] to-[#0d0d2b] rounded-xl p-6 flex flex-col justify-between min-h-75 border border-white/5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Enjoy on your TV
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <g id="television-core-small">
                  <path fillRule="evenodd" clipRule="evenodd" d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z" fill="url(#tv_g0)" />
                  <path d="M18.6 60.7388C18.6 60.2306 18.9587 59.796 19.4602 59.711C22.0196 59.2775 29.7585 58.0508 35.4 58.0508C41.0415 58.0508 48.7804 59.2775 51.3398 59.711C51.8412 59.796 52.2 60.2306 52.2 60.7388C52.2 60.902 52.0575 61.0268 51.8967 61.0004C50.1219 60.707 40.9704 59.2409 35.4 59.2409C29.8295 59.2409 20.678 60.707 18.9033 61.0004C18.7425 61.0268 18.6 60.902 18.6 60.7388Z" fill="url(#tv_g1)" />
                  <path d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" fill="url(#tv_g2)" />
                  <path d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" fill="url(#tv_g3)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.99995 12.6H63C63.663 12.6 64.2 13.1372 64.2 13.8V50.4H7.79995V13.8C7.79995 13.1372 8.33719 12.6 8.99995 12.6ZM7.19995 50.4V13.8C7.19995 12.8059 8.00581 12 8.99995 12H63C63.9942 12 64.8 12.8059 64.8 13.8V50.4V51.6C64.8 52.5941 63.9942 53.4 63 53.4H8.99995C8.00581 53.4 7.19995 52.5941 7.19995 51.6V50.4Z" fill="url(#tv_g4)" />
                  <path d="M35.4 52.8C36.3941 52.8 37.2 52.3971 37.2 51.9C37.2 51.4029 36.3941 51 35.4 51C34.4059 51 33.6 51.4029 33.6 51.9C33.6 52.3971 34.4059 52.8 35.4 52.8Z" fill="url(#tv_g5)" />
                </g>
                <defs>
                  <radialGradient id="tv_g0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.3269 49.3723) rotate(118.526) scale(55.1579 46.2871)"><stop stopColor="#802600" /><stop offset="0.333333" stopColor="#6F181D" /><stop offset="0.666667" stopColor="#5B1333" /><stop offset="1" stopColor="#391945" /></radialGradient>
                  <radialGradient id="tv_g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.1077 53.6128) rotate(158.116) scale(32.7275 42.219)"><stop stopColor="#99421D" /><stop offset="0.333333" stopColor="#99161D" /><stop offset="0.666667" stopColor="#7D1845" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <linearGradient id="tv_g2" x1="10.4727" y1="14.9572" x2="56.1755" y2="51.4814" gradientUnits="userSpaceOnUse"><stop stopColor="#99161D" /><stop offset="0.245283" stopColor="#CA005B" /><stop offset="0.346698" stopColor="#FF479A" /><stop offset="0.46934" stopColor="#CC3CFF" /><stop offset="0.735849" stopColor="#BC1A22" /><stop offset="1" stopColor="#C94FF5" /></linearGradient>
                  <radialGradient id="tv_g3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.6181 23.8286) rotate(90) scale(25.9571 25.8545)"><stop stopColor="#1C0E20" stopOpacity="0" /><stop offset="1" stopColor="#1C0E20" /></radialGradient>
                  <radialGradient id="tv_g4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54 20.1938) rotate(144.293) scale(47.2897 44.8232)"><stop stopColor="#EF7744" /><stop offset="0.333333" stopColor="#E50914" /><stop offset="0.666667" stopColor="#A70D53" /><stop offset="1" stopColor="#792A95" /></radialGradient>
                  <radialGradient id="tv_g5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.525 51.3562) rotate(135) scale(4.58735)"><stop stopColor="#FFDCCC" /><stop offset="0.333333" stopColor="#FFBDC0" /><stop offset="0.666667" stopColor="#F89DC6" /><stop offset="1" stopColor="#E4A1FA" /></radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Card 2 — Download your shows */}
          <div className="bg-linear-to-br from-[#1a0533] to-[#0d0d2b] rounded-xl p-6 flex flex-col justify-between min-h-75 border border-white/5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Download your shows to watch offline
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <g id="download-core-small">
                  <path d="M36 70.2008C54.8882 70.2008 70.2001 54.8889 70.2001 36.0008C70.2001 17.1126 54.8882 1.80078 36 1.80078C17.1119 1.80078 1.80005 17.1126 1.80005 36.0008C1.80005 54.8889 17.1119 70.2008 36 70.2008Z" fill="url(#dl_g0)" />
                  <path opacity="0.4" d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z" fill="url(#dl_g1)" />
                  <path d="M62.3657 37.9958C63.1205 53.3924 51.3908 65.3832 36.1668 64.7778C20.9428 64.173 7.9893 51.2008 7.23444 35.8041C6.47952 20.4075 18.2091 8.41672 33.4331 9.02194C48.6571 9.62716 61.6103 22.5992 62.3657 37.9958Z" fill="url(#dl_g2)" />
                  <path opacity="0.6" d="M36.9 60.6C48.6636 60.6 58.2 51.0637 58.2 39.3C58.2 27.5363 48.6636 18 36.9 18C25.1363 18 15.6 27.5363 15.6 39.3C15.6 51.0637 25.1363 60.6 36.9 60.6Z" fill="url(#dl_g3)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M39.0849 42.2727L46.3387 35.76L48.8945 38.5142L38.9118 47.477L37.8466 48.4333L36.6071 47.477L24.9899 38.5142L27.0434 35.76L35.4849 42.2727L33.6 21.6016H37.2L39.0849 42.2727Z" fill="url(#dl_g4)" />
                </g>
                <defs>
                  <radialGradient id="dl_g0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.0001 36.1837) rotate(-90) scale(34.3829)"><stop offset="0.782019" stopColor="#982DBE" /><stop offset="0.906819" stopColor="#B038DC" stopOpacity="0.2" /><stop offset="1" stopColor="#E4A1FA" stopOpacity="0" /></radialGradient>
                  <radialGradient id="dl_g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.9937 20.0992) rotate(135) scale(49.9836)"><stop stopColor="#FFDCCC" /><stop offset="0.333333" stopColor="#FFBDC0" /><stop offset="0.666667" stopColor="#F89DC6" /><stop offset="1" stopColor="#E4A1FA" /></radialGradient>
                  <radialGradient id="dl_g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.7999 19.6937) rotate(135) scale(53.1037)"><stop stopColor="#FFA984" /><stop offset="0.333333" stopColor="#FF787F" /><stop offset="0.666667" stopColor="#F45FA2" /><stop offset="1" stopColor="#C44AF1" /></radialGradient>
                  <radialGradient id="dl_g3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.9 39.3) scale(21.3)"><stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" /></radialGradient>
                  <radialGradient id="dl_g4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.2 32.1016) rotate(39.5226) scale(15.5567)"><stop stopColor="#EF7744" /><stop offset="0.2406" stopColor="#E50914" /><stop offset="1" stopColor="#792A95" /></radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Card 3 — Watch everywhere */}
          <div className="bg-linear-to-br from-[#1a0533] to-[#0d0d2b] rounded-xl p-6 flex flex-col justify-between min-h-75 border border-white/5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Watch everywhere
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <g id="watch-core-small">
                  <path d="M24.0492 36.6016L33.6 46.3898L17.8029 56.8633C17.8029 56.8633 15.8891 57.6983 13.625 55.2638C11.361 52.8293 12.1235 51.238 12.1235 51.238L24.0492 36.6016Z" fill="url(#we_g0)" />
                  <path d="M25.0344 34.1992L36 46.151L25.0616 53.8043C25.0616 53.8043 21.8289 55.0984 18.0987 51.0172C14.3686 46.9358 15.9198 44.5105 15.9198 44.5105L25.0344 34.1992Z" fill="url(#we_g1)" />
                  <path d="M39 13.0195L59.1 33.6788L32.5325 50.4142C32.5325 50.4142 28.7459 50.2552 24.3978 45.4897C20.0498 40.7243 21.4096 35.8101 21.4096 35.8101L39 13.0195Z" fill="url(#we_g2)" />
                  <path d="M57.6709 15.3516C63.1044 21.2807 63.9858 29.2883 59.6386 33.2371C55.2916 37.186 47.3628 35.5806 41.9292 29.6515C36.4954 23.7224 35.6145 15.7148 39.9615 11.766C44.3084 7.81716 52.2372 9.42252 57.6709 15.3516Z" fill="url(#we_g3)" />
                  <path d="M58.3787 31.255C54.8121 34.5032 48.2143 33.0817 43.6421 28.0798C39.07 23.078 38.2547 16.39 41.8213 13.1419C45.3879 9.89364 51.9857 11.3152 56.5579 16.3171C61.1298 21.3189 61.9452 28.0069 58.3787 31.255Z" fill="url(#we_g4)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.0576 9.60156L21.479 11.7187L24 11.0654L22.3575 13.0272L23.7789 15.1444L21.3424 14.2397L19.7 16.2016L19.8365 13.6806L17.4 12.7759L19.9209 12.1225L20.0576 9.60156ZM58.776 52.8016L58.9623 56.4685L62.4 57.4188L59.0774 58.7347L59.2637 62.4016L57.0239 59.548L53.7014 60.8638L55.6397 57.7843L53.4 54.9307L56.8377 55.8811L58.776 52.8016ZM15.206 24.2101L15.8768 21.0016L13.4793 23.1964L10.6853 21.5563L11.9975 24.553L9.59998 26.7478L12.8085 26.405L14.1207 29.4016L14.7915 26.1931L18 25.8502L15.206 24.2101Z" fill="url(#we_g5)" />
                </g>
                <defs>
                  <radialGradient id="we_g0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.6875 32.7016) rotate(135) scale(34.9134)"><stop stopColor="#99421D" /><stop offset="0.333333" stopColor="#99161D" /><stop offset="0.666667" stopColor="#7D1845" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <radialGradient id="we_g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.5937 27.2992) rotate(135) scale(44.5477 44.5279)"><stop stopColor="#EF7744" /><stop offset="0.333333" stopColor="#E50914" /><stop offset="0.666667" stopColor="#A70D53" /><stop offset="1" stopColor="#792A95" /></radialGradient>
                  <radialGradient id="we_g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.3 29.106) rotate(135) scale(31.8127)"><stop stopColor="#FB540D" /><stop offset="0.333333" stopColor="#E50914" /><stop offset="0.666667" stopColor="#A70D53" /><stop offset="1" stopColor="#792A95" /></radialGradient>
                  <radialGradient id="we_g3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.675 14.7078) rotate(134.326) scale(24.0433 24.0367)"><stop stopColor="#FFDCCC" /><stop offset="0.333333" stopColor="#FFBDC0" /><stop offset="0.666667" stopColor="#F89DC6" /><stop offset="1" stopColor="#E4A1FA" /></radialGradient>
                  <radialGradient id="we_g4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.1305 21.273) rotate(141.875) scale(9.87138 12.8159)"><stop offset="0.307292" stopColor="#F89DC6" /><stop offset="0.645392" stopColor="#E75094" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <linearGradient id="we_g5" x1="44.65" y1="27.9016" x2="24.25" y2="48.3016" gradientUnits="userSpaceOnUse"><stop stopColor="#EF7744" /><stop offset="0.333333" stopColor="#E50914" /><stop offset="0.666667" stopColor="#A70D53" /><stop offset="1" stopColor="#792A95" /></linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Card 4 — Create profiles for kids */}
          <div className="bg-linear-to-br from-[#1a0533] to-[#0d0d2b] rounded-xl p-6 flex flex-col justify-between min-h-75 border border-white/5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Create profiles for kids
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <g id="profiles-core-small">
                  <path d="M10.8 15.6008C10.8 12.9499 12.949 10.8008 15.5999 10.8008H40.8C43.4509 10.8008 45.6 12.9498 45.6 15.6008V40.8007C45.6 43.4516 43.4509 45.6007 40.8 45.6007H15.6C12.949 45.6007 10.8 43.4517 10.8 40.8007V15.6008Z" fill="url(#kid_g0)" />
                  <path d="M9.59998 14.4016C9.59998 11.7506 11.749 9.60162 14.4 9.60156H39.6C42.251 9.60156 44.4 11.7506 44.4 14.4016V39.6015C44.4 42.2525 42.251 44.4015 39.6 44.4015H14.4C11.749 44.4016 9.59998 42.2525 9.59998 39.6015V14.4016Z" fill="url(#kid_g1)" />
                  <path d="M18.6 21.9008C18.6 23.0606 17.6598 24.0008 16.5 24.0008C15.3402 24.0008 14.4 23.0606 14.4 21.9008C14.4 20.741 15.3402 19.8008 16.5 19.8008C17.6598 19.8008 18.6 20.741 18.6 21.9008Z" fill="url(#kid_g2)" />
                  <path d="M39.6 21.9008C39.6 23.0606 38.6598 24.0008 37.5 24.0008C36.3402 24.0008 35.4 23.0606 35.4 21.9008C35.4 20.741 36.3402 19.8008 37.5 19.8008C38.6598 19.8008 39.6 20.741 39.6 21.9008Z" fill="url(#kid_g3)" />
                  <path d="M23.6713 29.4501C23.2437 29.1967 22.6917 29.3379 22.4383 29.7655C22.1848 30.1932 22.3261 30.7452 22.7537 30.9986C23.8254 31.6337 26.769 32.7744 30.6375 32.7744C34.506 32.7744 37.4497 31.6337 38.5213 30.9986C38.949 30.7452 39.0902 30.1932 38.8368 29.7655C38.5834 29.3379 38.0313 29.1967 37.6037 29.4501C36.8191 29.9151 34.194 30.9744 30.6375 30.9744C27.081 30.9744 24.456 29.9151 23.6713 29.4501Z" fill="url(#kid_g4)" />
                  <path d="M27.6 32.4016C27.6 29.7506 29.749 27.6016 32.4 27.6016L57.6 27.6016C60.2508 27.6016 62.4 29.7506 62.4 32.4016V57.6015C62.4 60.2524 60.2508 62.4016 57.6 62.4016H32.4C29.749 62.4016 27.6 60.2524 27.6 57.6016V32.4016Z" fill="url(#kid_g5)" />
                  <path d="M41.8213 47.6025C41.3937 47.349 40.8416 47.4903 40.5882 47.9179C40.3348 48.3455 40.476 48.8976 40.9037 49.1509C41.9753 49.786 44.919 50.9267 48.7875 50.9267C52.656 50.9267 55.5996 49.786 56.6713 49.1509C57.0989 48.8976 57.2402 48.3455 56.9867 47.9179C56.7333 47.4903 56.1813 47.349 55.7537 47.6025C54.969 48.0674 52.344 49.1267 48.7875 49.1267C45.231 49.1267 42.6059 48.0674 41.8213 47.6025Z" fill="url(#kid_g6)" />
                </g>
                <defs>
                  <radialGradient id="kid_g0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.075 17.6882) rotate(135) scale(32.8097)"><stop stopColor="#99421D" /><stop offset="0.333333" stopColor="#99161D" /><stop offset="0.666667" stopColor="#7D1845" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <radialGradient id="kid_g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.4 8.70157) rotate(133.87) scale(75.3216)"><stop stopColor="#FFDCCC" /><stop offset="0.333333" stopColor="#FFBDC0" /><stop offset="0.666667" stopColor="#F89DC6" /><stop offset="1" stopColor="#E4A1FA" /></radialGradient>
                  <radialGradient id="kid_g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.3 11.1008) rotate(133.939) scale(68.7426 55.9547)"><stop stopColor="#99421D" /><stop offset="0.333333" stopColor="#99161D" /><stop offset="0.666667" stopColor="#7D1845" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <radialGradient id="kid_g3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.3 11.1008) rotate(133.939) scale(68.7426 55.9547)"><stop stopColor="#99421D" /><stop offset="0.333333" stopColor="#99161D" /><stop offset="0.666667" stopColor="#7D1845" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <radialGradient id="kid_g4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.3 11.0994) rotate(133.939) scale(68.7426 55.9548)"><stop stopColor="#99421D" /><stop offset="0.333333" stopColor="#99161D" /><stop offset="0.666667" stopColor="#7D1845" /><stop offset="1" stopColor="#59216E" /></radialGradient>
                  <radialGradient id="kid_g5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61.8 29.7016) rotate(135) scale(43.2749)"><stop stopColor="#EF7744" /><stop offset="0.333333" stopColor="#E50914" /><stop offset="0.666667" stopColor="#A70D53" /><stop offset="1" stopColor="#792A95" /></radialGradient>
                  <radialGradient id="kid_g6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1 11.1017) rotate(137.146) scale(73.6614 60.3576)"><stop stopColor="#FFDCCC" /><stop offset="0.333333" stopColor="#FDF6F6" /><stop offset="0.666667" stopColor="#FADCE9" /><stop offset="1" stopColor="#E4A1FA" /></radialGradient>
                </defs>
              </svg>
            </div>
          </div>

        </div>
      </section>

      <div className="h-2 bg-zinc-800" />


      <div className="h-2 bg-zinc-800" />

      {/* ── FAQ Section ── */}
      <section className="px-6 md:px-16 py-16 md:py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-10">Frequently Asked Questions</h2>
        <div className="space-y-2 text-left">
          {[
            { q: 'What is Netflix?', a: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more — on thousands of internet-connected devices.' },
            { q: 'How much does Netflix cost?', a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.' },
            { q: 'Where can I watch?', a: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.' },
            { q: 'How do I cancel?', a: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.' },
          ].map(({ q, a }) => (
            <details key={q} className="group bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-5 text-lg font-medium list-none">
                {q}
                <span className="text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="px-5 pb-5 text-gray-300 text-base border-t border-zinc-700 pt-4">{a}</p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <p className="text-base md:text-xl mb-6 text-white/80">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-5 py-4 bg-black/70 border border-gray-500 rounded text-white text-base placeholder-gray-400 focus:outline-none focus:border-gray-300"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded text-lg transition-colors whitespace-nowrap"
            >
              Get Started
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black border-t border-zinc-800 px-6 md:px-16 py-10 text-gray-500 text-sm max-w-6xl mx-auto">
        <p className="mb-6">Questions? <a href="tel:000800-919-1743" className="underline hover:text-gray-300">Call 000800-919-1743</a></p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {['FAQ', 'Help Centre', 'Account', 'Media Centre', 'Investor Relations', 'Jobs', 'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information', 'Contact Us', 'Speed Test', 'Legal Notices', 'Netflix Originals'].map(link => (
            <a key={link} href="#" className="hover:underline hover:text-gray-300">{link}</a>
          ))}
        </div>
        <p className="text-gray-600">Netflix India</p>
      </footer>

      {/* ── Creator Badge ── */}
      <div className="bg-black border-t border-zinc-900 py-6 px-6 flex justify-center">
        <a
          href="https://github.com/vedant476"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
        >
          <img
            src="https://github.com/vedant476.png"
            alt="Creator"
            className="w-9 h-9 rounded-full ring-2 ring-zinc-700 group-hover:ring-red-600 transition-all"
          />
          <div className="text-left">
            <p className="text-zinc-500 text-xs">Built by</p>
            <p className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors flex items-center gap-1">
              vedant476
              <svg className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />

              </svg>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Landing

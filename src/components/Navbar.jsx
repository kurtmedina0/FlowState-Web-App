import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Rocket, Sparkles, Home, DollarSign, Info, BookOpen, HelpCircle } from 'lucide-react'

function Navbar({ onSignInClick, onRegisterClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full z-50 pt-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-3xl border rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden ${
          scrollY > 50 
            ? 'border-purple-500/30 shadow-purple-500/20' 
            : 'border-slate-700/40'
        }`}>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          
          <div className="relative flex items-center justify-between px-6 lg:px-8 py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  FlowState
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider">PRODUCTIVITY</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavLink 
                to="/" 
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) => `px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive && location.state?.scrollTo !== 'pricing'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </NavLink>
                            
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  } else {
                    navigate('/', { state: { scrollTo: 'pricing' } })
                  }
                }}
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  location.pathname === '/' && location.state?.scrollTo === 'pricing'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Pricing
              </button>
              
              <NavLink 
                to="/about" 
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) => `px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                About Us
              </NavLink>
              
              <NavLink 
                to="/blog" 
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) => `px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Blog
              </NavLink>
              
              <NavLink 
                to="/help" 
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) => `px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Help Centre
              </NavLink>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={onSignInClick}
                className="hidden lg:block px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600"
              >
                Sign In
              </button>
              
              <button
               onClick={onRegisterClick}
               className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 group shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Register</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-3 relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 group shadow-lg shadow-purple-500/25"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isMenuOpen ? <X size={22} className="relative z-10 text-white" /> : <Menu size={22} className="relative z-10 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - IMPROVED */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="relative bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-3xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            
            <div className="relative px-4 py-6">
              {/* Navigation Links with Icons */}
              <div className="space-y-1 mb-6">
                <NavLink 
                  to="/" 
                  onClick={() => {
                    setIsMenuOpen(false)
                    window.scrollTo(0, 0)
                  }} 
                  className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive && location.state?.scrollTo !== 'pricing'
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </NavLink>
                
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      navigate('/', { state: { scrollTo: 'pricing' } })
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    location.pathname === '/' && location.state?.scrollTo === 'pricing'
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Pricing</span>
                </button>
                
                <NavLink 
                  to="/about" 
                  onClick={() => {
                    setIsMenuOpen(false)
                    window.scrollTo(0, 0)
                  }} 
                  className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Info className="w-5 h-5" />
                  <span>About Us</span>
                </NavLink>
                
                <NavLink 
                  to="/blog" 
                  onClick={() => {
                    setIsMenuOpen(false)
                    window.scrollTo(0, 0)
                  }} 
                  className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Blog</span>
                </NavLink>
                
                <NavLink 
                  to="/help" 
                  onClick={() => {
                    setIsMenuOpen(false)
                    window.scrollTo(0, 0)
                  }} 
                  className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Help Centre</span>
                </NavLink>
              </div>
              
              {/* CTA Buttons - Improved Layout */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false)
                    onSignInClick()
                  }}
                  className="w-full px-4 py-3.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600"
                >
                  Sign In
                </button>
                <button
                 onClick={() => {
                   setIsMenuOpen(false)
                   onRegisterClick()
                 }}
                 className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white relative overflow-hidden rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  <Sparkles className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Get Started Free</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
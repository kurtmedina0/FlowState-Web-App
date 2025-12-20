import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Help from './pages/Help'
import SignInModal from './pages/SignInModal.jsx'
import RegisterModal from './pages/RegisterModal.jsx'
import { supabase } from './library/Supabase'

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <BrowserRouter>
      <Navbar 
        onSignInClick={() => setIsSignInOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
        user={user}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<Help />} /> 
      </Routes>
      
      <SignInModal 
        isOpen={isSignInOpen}   
        onClose={() => setIsSignInOpen(false)} 
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </BrowserRouter>
  )
}

export default App